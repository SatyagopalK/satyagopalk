import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const modules = import.meta.glob('../../data/books/*.html', {
  query: '?raw',
  import: 'default'
})

export default function BookDetail() {
  const { id } = useParams()
  const [content, setContent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const key = Object.keys(modules).find(k =>
        k.endsWith(`/${id}.html`)
    )

    if (!key) {
      setError('Book not found')
      return
    }

    modules[key]()
        .then(setContent)
        .catch(() => setError('Failed to load book'))
  }, [id])

  if (error) return <div className="p-8 text-red-500">{error}</div>
  if (!content) return <div className="p-8">Loading...</div>

  return (
      <div className="p-8 max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
  )
}
