
const features = [
  {
    title: "Variables",
    description: "Learn how data is stored and used.",
  },
  {
    title: "Functions",
    description: "Understand how functions work.",
  },
  {
    title: "OOP",
    description: "Learn classes, objects, and encapsulation.",
  },
  {
    title: "Data Structures",
    description: "Learn arrays, lists, trees, and more.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
        What You will Learn
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group flex min-h-40 flex-col items-center justify-center rounded-xl border-2 border-red-600 bg-neutral-950 p-6 text-center transition-colors duration-200 hover:bg-red-600"
          >
            <h3 className="text-2xl font-bold text-red-500 transition-colors duration-200 group-hover:text-white">
              {feature.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-red-500 transition-colors duration-200 group-hover:text-white sm:text-lg">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
