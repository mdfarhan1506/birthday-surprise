import Image from "next/image";

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

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-16 px-6">

      <h1 className="text-center text-5xl font-extrabold text-pink-600">
        📸 Our Memories
      </h1>

      <p className="text-center mt-4 text-gray-600 text-lg">
        Every picture tells a beautiful story ❤️
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-white shadow-xl hover:scale-105 duration-300"
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              width={500}
              height={700}
              className="h-[420px] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/cake"
          className="rounded-full bg-pink-600 px-10 py-4 text-white font-bold text-lg hover:bg-pink-700"
        >
          Continue 🎂
        </a>
      </div>

    </main>
  );
}