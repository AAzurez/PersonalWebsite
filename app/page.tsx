export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Aaron Li</h1>

      <p className="text-lg text-gray-600">
        Computer Science Student | Developer
      </p>

      <div className="flex gap-4">
        <a href="https://github.com/yourgithub" className="underline">
          GitHub
        </a>

        <a href="https://linkedin.com/in/yourlinkedin" className="underline">
          LinkedIn
        </a>
      </div>

      <section className="mt-10 max-w-xl text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <p className="text-gray-600">
          Dice Detection using OpenCV, algorithm practice, and more.
        </p>
      </section>
    </main>
  );
}
