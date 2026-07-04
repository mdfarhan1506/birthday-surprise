"use client";

import { useRouter } from "next/navigation";

export default function Envelope() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-white to-rose-100 flex items-center justify-center">

      {/* Decorations */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">💖</div>
      <div className="absolute top-16 right-12 text-4xl animate-pulse">✨</div>
      <div className="absolute bottom-16 left-12 text-5xl animate-bounce">🎀</div>
      <div className="absolute bottom-12 right-12 text-5xl animate-pulse">🌸</div>

      <div className="text-center">

        <h1 className="text-5xl font-bold text-pink-600">
          A Letter For Tommy 💌
        </h1>

        <p className="mt-4 text-gray-600 text-xl">
          Tap the envelope to reveal your surprise.
        </p>

        <button
          onClick={() => router.push("/final-letter")}
          className="group mt-12"
        >
          <div className="w-72 h-48 rounded-3xl bg-pink-300 shadow-2xl flex items-center justify-center transition duration-500 hover:scale-110 hover:rotate-2 cursor-pointer">

            <div className="text-center">
              <div className="text-8xl group-hover:scale-110 transition">
                💌
              </div>

              <p className="mt-3 text-white font-bold text-xl">
                Open Me
              </p>
            </div>

          </div>
        </button>

      </div>

    </section>
  );
}