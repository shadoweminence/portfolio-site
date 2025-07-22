"use client";
import Image from "next/image";
import myPic from "../../public/myPic.jpg";

export default function Greeting() {
  return (
    <div className="flex items-center gap-10 max-w-4xl mx-auto my-16 px-4">
      <section className="max-w-xl text-left">
        <h2 className="text-3xl font-semibold mb-6">Greetings</h2>
        <p className="text-gray-600 mb-2">
          I’m Prashant, a web developer who enjoys creating clean and efficient
          applications.
        </p>
        <p className="text-gray-600 italic mb-6">
          Fun fact: I’m always exploring new places and technologies to keep
          learning.
        </p>

        <button
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800 transition"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </button>
      </section>
      <div className="flex-shrink-0">
        <Image
          className="rounded-3xl"
          src={myPic}
          alt="Prashant Pokhrel"
          width={160}
          height={240}
          priority
        />
      </div>
    </div>
  );
}
