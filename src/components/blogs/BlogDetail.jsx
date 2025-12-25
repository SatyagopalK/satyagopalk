import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const modules = import.meta.glob('../data/blogs/*.html', {
  query: '?raw',
  import: 'default'
})

export default function BlogDetail() {
  const { id } = useParams()
  const [content, setContent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Available keys:', Object.keys(modules))

    const key = Object.keys(modules).find(
        k => k.split('/').pop() === `${id}.html`
    )

    if (!key) {
      setError('Blog not found')
      return
    }

    modules[key]()
        .then(setContent)
        .catch(err => {
          console.error(err)
          setError('Failed to load blog')
        })
  }, [id])

  if (error) return <div className="p-8 text-red-500">{error}</div>
  if (!content) return <div className="p-8">Loading...</div>

  return (
      <div className="p-8 max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
  )
}
