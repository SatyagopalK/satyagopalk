import React from 'react'
import Header from '../Hero/Header'
import BookList from './BookList'
import Footer from '../Hero/Footer'

export default function Research({ name }) {
  return (
    <div className="ml-[2vw]">
      
      {/* Header section – SAME as Projects */}
      <div className="mb-[5vh] mt-[5vh] font-mont w-[90vw] mx-auto">
        <h1 className="text-[32px] mt-[4vh] mb-[2vh] font-bold">
          {name}
        </h1>

        <h3 className="text-[18px]">
          I write about stuff I learn, explore, and try out. No fluff—just me figuring
          out tech, AI, and research, and sharing it in a way that actually makes sense.
        </h3>
      </div>

      {/* Content list – SAME spacing behavior as Projects */}
      <div className="space-y-12">
        <BookList />
      </div>

    </div>
  )
}
