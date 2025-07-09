import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          {/* Subtle Grid Lines */}
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-6 md:px-8">
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
