"use client"
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import { useState,useEffect } from "react"

export default function Home() {

  const [active,setActive] = useState("home")
  
  //Taskbar transions
  useEffect(() => {
  const handleScroll = () => {
    const sections = ["bio", "projects", "expierence", "contact"]

    sections.forEach((section) => {
      const element = document.getElementById(section)

      if (element) {
        const rect = element.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(section)
        }
      }
    })
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-1/6 sticky top-0 h-screen bg-slate-900 text-white flex justify-center text-center items-center p-6">
        <ul className="space-y-8 text-lg text-center items-center hover:text-blue-400">
          <li>
            <a href="#home">
            {active === "bio" && "● "}
            Home
            </a>
          </li>
          <li>
            <a href="#projects">
              {active === "projects" && "● "}
               Projects
            </a>
          </li>
          <li>
            <a href="#expierence">
            {active === "expierence" && "● "}
            About
            </a>
          </li>
          <li><a href="#contact">
            {active === "contact" && "● "}
            Contact
            </a>
          </li>
        </ul>

      </div>

      {/* Main Content */}
      <main className="w-5/6 flex flex-col bg-slate-900 gap-6 p-10">

        <div style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>

          <h1 className="text-4xl text-[#007FFF] font-bold text-left">
            Icon Aaron Li AAzure
          </h1>

          <div className="flex gap-4 justify text-white mt-4">
            <a href="https://github.com/AAzurez">
              <Image
                src="/github.jpg"
                alt=""
                width={50}
                height={50}
                className="rounded-lg"
              />
            </a>

            <a href="https://linkedin.com/in/aaronli5370">
              <Image
                src="/linkedin.jpg"
                alt=""
                width={50}
                height={50}
                className="rounded-lg hover:brightness-200 transition"
              />
            </a>
            <a href="https://www.instagram.com/aazurezz/">
              <Image
                src="/insta.jpg"
                alt=""
                width={50}
                height={50}
                className="rounded-lg hover:brightness-200 transition"
              />
            </a>
          </div>

          <section id="bio" className="mt-10 max-w-xl text-left text-white">
            <h2 className="text-2xl font-semibold">Heyo!</h2>
            <p className="text-white">
              insert bio :/
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              White space
            </p>
          </section>

          <section id="projects" className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Projects
            </h2>
              <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-black">
                <ProjectCard 
                title = "beans"
                description = "A"
                image = "github"
                />
                <ProjectCard 
                title = "apples"
                description = "B"
                image = "github"
                />
                <ProjectCard 
                title = "organe"
                description = "C"
                image = "github"
                />
                <ProjectCard 
                title = "beans"
                description = "A"
                image = "github"
                />
                <ProjectCard 
                title = "beans"
                description = "A"
                image = "github"
                />
                <ProjectCard 
                title = "beans"
                description = "A"
                image = "github"
                />
              </div>
          </section>

          <section id="expierence" className="mt-10 max-w-xl text-left">
            <h2 className="text-2xl font-semibold text-white">Expierence</h2>
            <p className="text-white">
              Pegasus Place | July 2025 - Aug 2025
              <br/>
              Education Manager | Brooklyn, NY
              <br/>
              ● Designed modular learning workflow for 25+ students using ELI5 and Feynman methods to boost reasoning.<br/>
              ● Built assessment systems with Google Forms to analyze performance data and drive instructional improvements.<br/>
              ● Migrated 50+ students to a fully remote learning setup, maintaining engagement and academic continuity.<br/>
              <br/>
              Infinity Educational Programs | July 2025 - Aug 2025
              <br/>
              Website Designer | Remote
              <br/>
              ● Built small-scale websites on environmental topics using HTML and CSS, focusing on responsive layout.<br/>
              ● Founded prototype e-commerce brand using Squarespace and Canva implementing UX improvements.<br/>
              ● Built dashboards and heatmaps in Google Data Studio to analyze internet and mobile usage in 250+ countries.<br/>
            </p>
          </section>
           <section id="contact" className="mt-10 max-w-xl text-left">
            <h2 className="text-2xl font-semibold text-white">Contacts</h2>
            <p className="text-white">
              Email: aaronli5370@gmail.com
              <br/>
              Phone Number: +1 (929)-281-4265
            </p>
          </section>

        </div>

      </main>

    </div>
  );
}