import React from "react";
import Header from "./components/Hero/Header";
import Footer from "./components/Hero/Footer";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />   {/* always visible */}
            <main className="flex-grow">
                {children}  {/* page content */}
            </main>
            <Footer />
        </div>
    );
}
