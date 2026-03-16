import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-1/6 sticky top-0 h-screen bg-slate-900 text-white flex justify-center text-center items-center p-6">
        <ul className="space-y-8 text-lg text-center items-center">
          <li><a href="#" className="hover:text-blue-400 items-center">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
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

          <section id="about" className="mt-10 max-w-xl text-left">
            <h2 className="text-2xl font-semibold text-white">Expierence</h2>
            <p className="text-white">
              Still working on this! :D Stay Tuned!
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              Zzzzz
            </p>
          </section>
           <section id="about" className="mt-10 max-w-xl text-left">
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