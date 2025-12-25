import React from 'react'
import { Link } from 'react-router-dom'

export default function BookItem({ book, index, id }) {
const bookId =
typeof id !== 'undefined'
? id
: book?.id ?? index

return (
<article className="flex flex-col md:flex-row gap-8 md:items-start">

{/* IMAGE BLOCK */}
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-[240px]">
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-[220px]">
<Link to={`/books/${bookId}`}>
<img
src={book.img}
alt={book.title}
className="
             w-[200px] h-[280px]
             object-cover
             rounded-md
             shadow-sm
           "
/>
</Link>
</div>

{/* TEXT BLOCK */}
<div className="flex-1 text-left">
<h2 className="text-2xl font-semibold mb-2">
<Link to={`/books/${bookId}`} className="hover:underline">
{book.title}
</Link>
</h2>

<p className="text-gray-700 mb-4 max-w-3xl">
{book.desc}
</p>

<Link to={`/books/${bookId}`} className="btn">
Learn More
</Link>
</div>

</article>
)
}
