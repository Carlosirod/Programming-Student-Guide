
const steps = [
  {
    number: "01",
    title: "Choose a Language",
    description: "Select the programming language you want to learn.",
  },
  {
    number: "02",
    title: "Pick a Topic",
    description: "Choose the programming concept you want to study.",
  },
  {
    number: "03",
    title: "Start Learning",
    description: "Learn with explanations, examples, and exercises.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
        How It Works
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="group flex min-h-52 flex-col items-center justify-center rounded-xl border-2 border-red-600 bg-neutral-950 p-6 text-center transition-colors duration-200 hover:bg-red-600"
          >
            <span className="text-xl font-bold text-red-500 transition-colors duration-200 group-hover:text-white">
              {step.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-red-500 transition-colors duration-200 group-hover:text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-red-500 transition-colors duration-200 group-hover:text-white">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
