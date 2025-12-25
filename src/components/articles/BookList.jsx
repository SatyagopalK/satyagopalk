import React from 'react'
import BookItem from './BookItem'
import books from '../../data/preview/books'

export default function BookList(){
  return (
    <div className="space-y-12">
      {books.map((b) => (
        <BookItem key={b.id} book={b} id={b.id} />
      ))}
    </div>
  )
}

export { books }
