import React from 'react'
import { Link } from 'react-router-dom'

export default function BookItem({ book, index, id }) {
  const bookId =
    typeof id !== 'undefined'
      ? id
      : book && typeof book.id !== 'undefined'
      ? book.id
      : index

  return (
    <article className="mx-auto flex flex-col md:flex-row gap-8 w-[85vw] md:items-start">
      
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
        <Link to={`/books/${bookId}`}>
          <img
            src={book.img}
            alt={book.title}
            className="w-full max-w-[240px] md:max-w-[300px] h-auto rounded shadow-sm"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 text-left">
        <h2 className="text-2xl font-semibold mb-2">
          <Link to={`/books/${bookId}`} className="hover:underline">
            {book.title}
          </Link>
        </h2>

        <p className="text-gray-700 mb-4">{book.desc}</p>

        <Link to={`/books/${bookId}`} className="btn">
          Learn More
        </Link>
      </div>

    </article>
  )
}
