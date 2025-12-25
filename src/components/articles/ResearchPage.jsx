import React from 'react'
import Header from '../Hero/Header'
import BookList from './BookList'
import Footer from '../Hero/Footer'

export default function Research({ name }) {
    return (
        <div className="min-h-screen flex flex-col font-mont">


            <main className="flex-grow">
                <section className="py-12 px-6">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>

                    <p className="text-lg text-gray-700 mb-8">
                        I write about stuff I learn, explore, and try out. No fluff—just me figuring out tech, AI, and research, and sharing it in a way that actually makes sense.     </p>

                    <BookList />
                </section>
            </main>

        </div>
    )
}
