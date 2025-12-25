import React from 'react'

export default function BookItem({ book }) {
  return (
    <div className="flex gap-12 items-start w-[90vw] mx-auto">
      
      {/* Image */}
      <div className="shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-[420px] h-[260px] object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-[650px]">
        <h2 className="text-[24px] font-semibold mb-3">
          {book.title}
        </h2>

        <p className="text-[16px] text-gray-700 mb-4">
          {book.description}
        </p>

        <button className="px-5 py-2 bg-[#0B2C4D] text-white rounded-full">
          Learn More
        </button>
      </div>

    </div>
  )
}
