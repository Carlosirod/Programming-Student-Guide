import LanguageButton from "./LanguageButton"


export default function Languages() {
  const languages = ["Python", "Java", "C++"];

  return (
    <section className="px-6 py-16 sm:px-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-white">
        Choose a Language
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {languages.map((language) => (
          <button
            key={language}
            className="flex min-h-40 items-center justify-center rounded-xl border-2 border-red-600 bg-neutral-950 p-6 text-xl font-bold text-red-500 transition-colors duration-200 hover:bg-red-600 hover:text-white"
          >
            {language}
          </button>
        ))}
      </div>
    </section>
  );
}
