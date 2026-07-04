"use client"; 

export default function Welcome() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* Decorations */}
      <div className="absolute top-6 left-6 text-3xl animate-bounce">💖</div>
      <div className="absolute top-8 right-8 text-4xl animate-pulse">🎈</div>
      <div className="absolute bottom-10 left-8 text-3xl animate-bounce">🎀</div>
      <div className="absolute bottom-12 right-8 text-4xl animate-pulse">🎂</div>
      <div className="absolute top-24 left-1/4 text-2xl">✨</div>
      <div className="absolute top-32 right-1/4 text-2xl">🌸</div>

      <div className="min-h-screen flex items-center justify-center px-6 py-10">

        <div className="max-w-3xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center">

          {/* Profile Photo */}
          <div className="flex justify-center">
            <img
              src="/photos/tommy.PNG"
              alt="Tommy"
              className="w-56 h-56 rounded-full object-cover border-4 border-pink-300 shadow-xl"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold text-pink-600">
            Happy Birthday ❤️
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Tommy Ji 🐱
          </h2>

          <p className="mt-3 text-lg text-pink-500">
            Today is all about celebrating you 🎂✨
          </p>

          <p className="mt-8 text-xl leading-9 text-gray-700">
            I made something special just for you.
            <br />
            Every page is filled with love, memories, surprises and lots of smiles.
            <br />
            I hope this little gift makes your birthday even more beautiful. 💕
          </p>

          <button
  onClick={() => (window.location.href = "/letter")}
  className="mt-10 rounded-full bg-pink-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-pink-600 hover:scale-105"
>
  Let's Gooo ✨
</button>

          <p className="mt-10 text-pink-500">
            Made with endless love for your special day 💗
          </p>

        </div>

      </div>

    </section>
  );
}