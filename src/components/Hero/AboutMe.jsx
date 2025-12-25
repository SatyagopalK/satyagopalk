import React from 'react';

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-[#F9F7F2] text-[#1a1a1a] font-sans selection:bg-[#FFD666] text-left">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto px-6 py-20">
                {/* Header Section */}
                <section className="mb-16">
                    <h1 className="text-4xl md:text-6xl text-left text-[#002147] font-serif font-bold mb-8 leading-tight">
                        Documenting the Process of Understanding
                    </h1>
                    <hr className="w-20 border-t-4 border-[#FFD666] mb-12" />
                </section>
                {/* About Me Body */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 text-lg leading-relaxed text-gray-800">
                    <div className="md:col-span-8 space-y-6">
                        <p>
                            I’m someone who loves learning hard things — <strong>AI, quantum computing, robotics, and remote sensing</strong> — and sharing the process. I don’t claim to know everything; I’m exploring these fields myself, documenting what I learn, and reflecting on how understanding grows from curiosity, experimentation, and persistence.
                        </p>
                        <p>
                            I created this website as a space to track my learning, archive experiments, and share ideas across domains. Most of the projects and concepts I explore are challenging, and I wanted a place to work through them honestly, without shortcuts, while building something others can follow and learn from.
                        </p>
                        <p>
                            My aim is to explain complex concepts in simple, intuitive ways without losing technical depth. If something took me time to understand, I try to make it easier for others by breaking it down step by step, showing both the journey and the reasoning behind it.
                        </p>
                        <blockquote className="border-l-4 border-[#002B5B] pl-6 py-2 my-8 italic text-xl text-gray-700">
                            "This website is not a highlight reel. It’s a living record of learning, experiments, and evolving understanding."
                        </blockquote>
                        <p>
                            Depth, clarity, and curiosity matter more than speed or perfection — and that’s the philosophy that guides both my work and my writing here.
                        </p>
                    </div>

                    {/* Sidebar/Focus Areas */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-4">Core Interests</h3>
                            <ul className="space-y-3 font-medium">
                                <li className="flex items-center">
                                    <span className="text-[#FFD666] mr-2">✔</span> Artificial Intelligence
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#FFD666] mr-2">✔</span> Quantum Computing
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#FFD666] mr-2">✔</span> Robotics & Sensing
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Email/Connect Section - Refrencing your Screenshot 1 */}

            </main>

            <footer className="text-center py-12 text-gray-400 text-sm">
                © {new Date().getFullYear()} Designed by Sagion Studios.
            </footer>
        </div>
    );
};

export default AboutMe;
