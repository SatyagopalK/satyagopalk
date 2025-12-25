import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const modules = import.meta.glob('../data/blogs/*.html', {
    query: '?raw',
    import: 'default'
})

export default function BlogPost() {
    const { id } = useParams()
    const [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const path = `../data/blogs/${id}.html`

        if (!modules[path]) {
            setError('Blog not 4 ')
            return
        }

        modules[path]()
            .then(html => setContent(html))
            .catch(() => setError('Failed to load blog'))
    }, [id])

    if (error) return <div className="p-8 text-red-500">{error}</div>
    if (!content) return <div className="p-8">Loading...</div>

    return (
        <div className="p-4 max-w-[70vw] mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
