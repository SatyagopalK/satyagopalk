import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogDebug(){
  const modules = import.meta.glob('../data/blogs/*.html', { query: '?raw', import: 'default' })
  const files = Object.keys(modules).map(p => {
    // path like ../data/blogs/0.html -> id 0
    const m = p.match(/\/([\dA-Za-z\-_.]+)\.html$/)
    const id = m ? m[1] : p
    return { path: p, id }
  })

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Blog files found</h2>
      <ul className="list-disc pl-6">
        {files.map(f => (
          <li key={f.path}>
            {f.path} — <Link to={`/blogs/${f.id}`} className="text-blue-600">Open /blogs/{f.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

