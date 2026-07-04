"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
const photos = [
  "/photos/photos1.PNG",
  "/photos/photos2.PNG",
  "/photos/photos3.PNG",
  "/photos/photos4.PNG",
  "/photos/photos5.PNG",
  "/photos/photos6.PNG",
  "/photos/photos7.PNG",
  "/photos/photos8.PNG",
  "/photos/photos9.PNG",
  "/photos/photos10.PNG",
];

export default function FinalLetter() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 },
  });

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % photos.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100 py-16 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold text-pink-600">
          ❤️ The Grand Finale ❤️
        </h1>

        <p className="mt-4 text-xl text-pink-500">
          Every memory with you deserves to be celebrated.
        </p>

        <div className="mt-12 flex justify-center">
          <Image
            src={photos[current]}
            alt="Memory"
            width={500}
            height={650}
            className="rounded-3xl shadow-2xl object-cover border-4 border-pink-300 transition-all duration-700"
          />
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-pink-600">
            Happy Birthday Tommy Ji ❤️
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-700">

            Thank you for being such a beautiful person.

            <br /><br />

            May your life always be filled with happiness,
            success, laughter, peace and endless love.

            <br /><br />

            Keep smiling because your smile makes the world
            a little brighter.

            <br /><br />

            I hope this small surprise made your birthday
            even more memorable.

            <br /><br />

            Once again...

            <br /><br />

            🎂 Happy Birthday Tommy Ji ❤️ 🎂

          </p>

        </div>

        <button
  onClick={() => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "/surprise";
    }, 1800);
  }}
  className="mt-10 rounded-full bg-pink-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-700 animate-pulse"
>
  🎈 One Last Surprise...
</button>
      </div>

    <div className="absolute left-8 top-12 text-5xl animate-bounce">💖</div>

<div className="absolute right-10 top-20 text-5xl animate-pulse">💕</div>

<div className="absolute left-12 bottom-16 text-4xl animate-bounce">🌸</div>

<div className="absolute right-14 bottom-24 text-5xl animate-pulse">🎀</div>

<div className="absolute left-1/3 top-32 text-3xl animate-bounce">✨</div>

<div className="absolute right-1/3 bottom-32 text-3xl animate-pulse">💗</div></section>
  );
}