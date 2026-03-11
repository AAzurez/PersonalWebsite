export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <div style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
        <h1 className="text-4xl font-bold">Test Aaron Li</h1>
      

      <p className="text-lg text-gray-600">
        3rd Computer Science Student at RIT | Still exploring Software Engineer roles!
      </p>

      <div className="flex gap-4">
        <a href="https://github.com/AAzurez" className="underline">
          GitHub
        </a>

        <a href="https://linkedin.com/in/aaronli5370" className="underline">
          LinkedIn
        </a>
      </div>

      <section className="mt-10 max-w-xl text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <p className="text-gray-600">
          Still working on this! :D Stay Tuned!
        </p>
      </section>
     </div>
    </main>
  );
}
