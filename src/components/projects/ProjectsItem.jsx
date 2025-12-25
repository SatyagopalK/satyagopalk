import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectsItem({ book, index, id }){
    const bookId = typeof id !== 'undefined' ? id : (book && typeof book.id !== 'undefined' ? book.id : index)
    return (
        <article className="mx-auto flex flex-col md:flex-row items-center gap-8 justify-center w-[85vw]">
        <div className="flex-shrink-0 w-full md:w-1/3">
                <Link to={`/books/${bookId}`}>
                    <img src={book.img} alt={book.title} className="w-full h-auto rounded shadow-sm" />
                </Link>
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2 "><Link to={`/books/${bookId}`} className="hover:underline">{book.title}</Link></h2>
                <p className="text-gray-700 mb-4 text-left">{book.desc}</p>
                <Link to={`/projects/${bookId}`} className="btn">Learn More</Link>
            </div>
        </article>
    )
}
