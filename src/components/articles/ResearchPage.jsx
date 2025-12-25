import React from 'react'
import Header from '../Hero/Header'
import BookList from './BookList'
import Footer from '../Hero/Footer'

export default function Research({ name }) {
  return (
    <div className="min-h-screen flex flex-col font-mont">
      <main className="flex-grow">
        <section className="py-12">

          {/* SAME CONTENT FRAME AS PROJECTS */}
          <div className="mb-[5vh] mt-[5vh] font-mont w-[90vw] mx-auto">

            <h1 className="text-[32px] font-bold mb-4">{name}</h1>

            <p className="text-[18px] text-gray-700 mb-12 max-w-3xl">
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
