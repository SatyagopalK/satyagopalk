import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="p-4 bg-gray-100 shadow font-mont relative">
            <nav className="flex items-center justify-between relative">

                {/* LEFT: LOGO */}
                <div className="text-xl font-semibold z-10">
                    ExploringWhy?
                </div>

                {/* CENTER: ARTICLES → CONTACT (DESKTOP ONLY) */}
                <div className="hidden md:flex gap-6 text-lg absolute left-1/2 -translate-x-1/2">
                    <Link to="/research">Articles</Link>
                    {/*    <Link to="/blogs">Blogs</Link> */}
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact me</Link>
                </div>

                {/* RIGHT: ABOUT ME (DESKTOP ONLY) */}
                <div className="hidden md:block text-base z-10">
                   <Link to="/AboutMe"> About Me </Link>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            </nav>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MOBILE SLIDE MENU */}
            <div
                className={`fixed top-0 right-0 px-6 py-4 bg-white shadow-2xl rounded-xl
        w-[65%] max-h-[60vh] z-30 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <button className="text-3xl p-4" onClick={() => setOpen(false)}>
                    ✕
                </button>

                <div className="flex flex-col gap-6 px-6 mt-4 text-lg">
                    <Link onClick={() => setOpen(false)} to="/research">Articles</Link>
                    <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
                    <Link onClick={() => setOpen(false)} to="/newsletters">Contact Me</Link>


                    <div className="pt-4 border-t text-base">
                      <Link onclicke={() => setOpen(false)} to="/Aboutme">About Me</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
