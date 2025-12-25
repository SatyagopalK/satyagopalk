import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/blogs/Blog";
import ResearchPage from "./components/articles/ResearchPage";
import Projects from "./components/projects/Projects"
import BookDetail from "./components/articles/BookDetail";
import BlogDetail from "./components/blogs/BlogDetail";
import BlogDebug from "./components/blogs/BlogDebug";
import BlogPost from "./components/blogs/BlogPost";
import ScrollToTop from './ScrollToTop'
import AboutMe from "./components/Hero/AboutMe"
import ProjectDeatils from "./components/projects/ProjectDeatils"

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Projects />} />
                    {/* <Route path="/blogs" element={<Home />} />
                    <Route path="/blogs/debug" element={<BlogDebug />} />
                    <Route path="/blogs/:id" element={<BlogPost />} /> */}

                    <Route path="/research" element={<ResearchPage name="Articles" />} />
                    <Route path="/books" element={<Projects />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDeatils />} />
                    <Route path="/AboutMe" element={<AboutMe />} />

                </Routes>
                <ScrollToTop />
            </Layout>

        </BrowserRouter>
    );
}
