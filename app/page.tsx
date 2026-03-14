import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-1/4 bg-slate-900 text-white text-center p-6">
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="w-3/4 flex flex-col bg-slate-900 gap-6 p-10">

        <div style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>

          <h1 className="text-4xl text-[#007FFF] font-bold text-left">
            Icon Aaron Li
          </h1>

          <div className="flex gap-4 justify text-white mt-4">
            <a href="https://github.com/AAzurez" className="underline">
              <Image
                src="/github.jpg"
                alt="Aaron Li"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </a>

            <a href="https://linkedin.com/in/aaronli5370" className="underline">
              <Image
                src="/linkedin.jpg"
                alt="Aaron Li"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </a>
          </div>

          <section id="projects" className="mt-10 max-w-xl text-left text-white">
            <h2 className="text-2xl font-semibold">Bio</h2>
            <p className="text-white">
              Still working on this! :D Stay Tuned!
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              White space
            </p>
          </section>

          <section id="projects" className="mt-10 max-w-xl text-left text-white">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-white">
              Still working on this! :D Stay Tuned!
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              HALLO
            </p>
          </section>

          <section id="about" className="mt-10 max-w-xl text-left">
            <h2 className="text-2xl font-semibold text-white">Another Section!</h2>
            <p className="text-white">
              Still working on this! :D Stay Tuned!
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              Zzzzz
            </p>
          </section>

        </div>

      </main>

    </div>
  );
}