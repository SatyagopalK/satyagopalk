import React from 'react'
import BookList from './BookList'

export default function Research({ name = 'Research' }) {
  return (
    <div className="min-h-screen flex flex-col font-mont">
      
      <main className="flex-grow">
        <section className="py-12">

          <div className="mx-auto w-[90vw] max-w-5xl">

            <h1 className="text-4xl font-bold mb-4">
              {name}
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              I write about stuff I learn, explore, and try out. No fluff—just me figuring
              out tech, AI, and research, and sharing it in a way that actually makes sense.
            </p>

            <BookList />

          </div>

        </section>
      </main>

    </div>
  )
}
