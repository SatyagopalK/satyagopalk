import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const modules = import.meta.glob('../../data/projects/*.html', {
    query: '?raw',
    import: 'default'
})

export default function ProjectDetail() {
    const { id } = useParams()
    const [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log('Available keys:', Object.keys(modules))

        const key = Object.keys(modules).find(
            k => k.split('/').pop() === `${id}.html`
        )

        if (!key) {
            setError('Project not found')
            return
        }

        modules[key]()
            .then(setContent)
            .catch(() => setError('Failed to load project'))
    }, [id])

    if (error) return <div className="p-8 text-red-500">{error}</div>
    if (!content) return <div className="p-8">Loading...</div>

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
