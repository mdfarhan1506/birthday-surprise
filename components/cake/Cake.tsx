"use client";

import Link from "next/link";

export default function Cake() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center px-6">

      <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-2xl w-full text-center">

        <h1 className="text-5xl font-extrabold text-pink-600">
          🎂 Birthday Cake 🎂
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Make a birthday wish before cutting the cake...
        </p>

        <div className="text-[170px] mt-8">
          🎂
        </div>

        <p className="text-pink-500 text-xl mt-5">
          Blow the candles in your heart ❤️
        </p>

        <Link href="/final-letter">
          <button className="mt-10 bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-xl font-bold">
            Finish Surprise 💖
          </button>
        </Link>

      </div>

    </section>
  );
}