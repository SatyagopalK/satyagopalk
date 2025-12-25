import React from "react";
import { Link } from 'react-router-dom'

export default function Blogcomponent({ title, subtitle, description, image, link, id }) {
    return (
        <div className="min-h-screen flex">
            <div className="bg-white flex flex-col w-[50vw]  border-[1px] border-grey-200 min-h-screen">

                {/* IMAGE */}
                <div className="min-w-[50vw] flex items-center justify-center mt-[8vh]">
                    <img className="max-h-[50vh]" src={image} alt={title} />
                </div>

                {/* CONTENT */}
                <div className="flex items-center justify-center">
                    <div className="sm:p-0 p-[4vh] sm:m-[10vh] flex flex-col gap-[4vh]">

                        <h1 className="font-semibold text-[23px] font-mont">{title}</h1>

                        {subtitle && (
                            <h2 className="font-semibold text-[18px] font-mont">{subtitle}</h2>
                        )}

                        <p className="font-times text-[18px]">
                            {description}
                        </p>

                        {/* BUTTON */}
                        <div>
                            {typeof id !== 'undefined' ? (
                                <Link to={`/blogs/${id}`}>
                                    <div className="text-[16px] font-mont font-semibold w-[120px] h-[50px] flex items-center justify-center bg-[#002147] text-white rounded-full cursor-pointer">
                                        Learn More
                                    </div>
                                </Link>
                            ) : (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <div className="text-[16px] font-mont font-semibold w-[120px] h-[50px] flex items-center justify-center bg-[#002147] text-white rounded-full cursor-pointer">
                                        Learn More
                                    </div>
                                </a>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
