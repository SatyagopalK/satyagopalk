import React from "react"
import { Link } from 'react-router-dom'
import atomic from "../../assets/atomic-habits-full.png"
import deepwork from "../../assets/deepwork.png"
import Blogcomponent from "./Blogcomponent.jsx"

export default function Blogs() {
    return (
        <div className="min-h-screen flex flex-col">

            <div className="flex flex-col items-center justify-center h-[60vh] gap-6">
                <h1 className="text-black font-semibold font-mont text-[40px]">Blogs</h1>

                <div className="w-[70vw] font-times text-[20px]">
                    You can think of my weekly articles as the place where I share incremental lessons on how to build habits that stick and live better. I share the lessons I learn week-by-week in my stories and articles. Meanwhile, my books are where I share more comprehensive analysis on these topics.
                </div>
            </div>

            <div className="bg-white flex flex-col sm:flex-row min-h-screen">
            <div className="min-w-[50vw] flex items-center justify-center mt-[8vh]  ">
                    <img className="max-h-[50vh]" src={atomic} alt="Atomic Habits" />
                </div>
                <div className="flex items-center justify-center">
                    <div className="sm:p-0 p-[4vh] sm:m-[10vh]  flex flex-col gap-[4vh]">
                        <h1 className="font-semibold text-[23px] font-mont">Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h1>
                        <h1 className="font-semibold text-[18px] font-mont ">The instant New York Times best-seller!</h1>

                       <p className="font-times text-[18px]"> My first book, Atomic Habits, offers a proven framework for getting 1 percent better every day. It's the ultimate guide on how to design a system where good habits emerge naturally and unwanted habits fade away. </p>
                        <div>
                            <Link to="/blogs/0">
                              <div className="text-[16px] font-mont font-semibold w-[120px] h-[50px] flex items-center justify-center  bg-[#002147] text-white rounded-full">Learn More</div>
                            </Link>

                        </div>
                    </div>


                    </div>

                </div>

           <div>
               <div className="flex ">
                   <Blogcomponent
                       id={1}
                       title="Atomic Habits:  Easy & Proven Way to Build Good Habits & Break Bad Ones"
                       subtitle="The instant New York Times best-seller!"
                       description="My first book, Atomic Habits, offers a proven framework for getting 1% better every day..."
                       image={atomic}
                       link="https://jamesclear.com/atomic-habits"
                   />

                   <Blogcomponent
                       title="Deep Work: Rules for Focused Success in a Distracted World"
                       subtitle="A must-read for productivity geeks!"
                       description="Deep Work teaches how to achieve deep concentration and produce high-quality output in less time..."
                       image={deepwork}
                       link="https://www.calnewport.com/books/deep-work/"
                   />
               </div>


               <div className="flex ">
                   <Blogcomponent
                       id={0}
                       title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
                       subtitle="The instant New York Times best-seller!"
                       description="My first book, Atomic Habits, offers a proven framework for getting 1% better every day..."
                       image={atomic}
                       link="https://jamesclear.com/atomic-habits"
                   />

                   <Blogcomponent
                       id={3}
                       title="Deep Work: Rules for Focused Success in a Distracted World"
                       subtitle="A must-read for productivity geeks!"
                       description="Deep Work teaches how to achieve deep concentration and produce high-quality output in less time..."
                       image={deepwork}
                   />
               </div>

           </div>

        </div>
    )
}
