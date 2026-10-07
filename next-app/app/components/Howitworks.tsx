export default function HowItWorks() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        How It Works
      </h2>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-3 gap-6">

        <div className="rounded-xl border p-6">
          <h3 className="text-xl font-bold">01</h3>
          <h4 className="mt-2 text-lg font-semibold">Choose a Language</h4>
          <p className="mt-2">
            Select the programming language you want to learn.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="text-xl font-bold">02</h3>
          <h4 className="mt-2 text-lg font-semibold">Pick a Topic</h4>
          <p className="mt-2">
            Choose the programming concept you want to study.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="text-xl font-bold">03</h3>
          <h4 className="mt-2 text-lg font-semibold">Start Learning</h4>
          <p className="mt-2">
            Learn with explanations, examples, and exercises.
          </p>
        </div>

      </div>
    </section>
  );
}