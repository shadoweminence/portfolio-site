import Contact from "./Contact";


export default function Hero() {

  return (

    <div id="hero" className="bg-gray-200 flex justify-center items-center h-screen px-4">
      <div className="text-black max-w-lg text-center space-y-6">
        <h1 className="text-5xl font-extrabold">
          Hi, I’m Prashant.
        </h1>

        <h2 className="text-2xl text-gray-700">
          Building fast, scalable web apps.
        </h2>

<Contact/>
      </div>
    </div>

  );
}
