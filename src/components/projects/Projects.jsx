import React from 'react'
import ProjectsItem from './ProjectsItem'
import books from '../../data/preview/projects'

export default function Projects(){
    return (
        <div className="ml-[2vw] ">
            <div className="mb-[5vh] mt-[5vh] font-mont w-[90vw] mx-auto">
            <h1 className=" text-[32px] mt-[4vh] mb-[2vh] font-bold "> Projects </h1>
                <h3 className="text-[18px]">These are the things I’ve built, tested, and learned from. Real experiments, messy at times, but full of lessons—mostly me figuring out how tech, AI, and ideas actually work.</h3>
            </div>
        <div className="space-y-12">
            {books.map((b) => (
                <ProjectsItem key={b.id} book={b} id={b.id} />
            ))}
        </div>
        </div>
    )
}
