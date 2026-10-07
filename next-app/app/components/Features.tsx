export default function Features() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        What Youll Learn
      </h2>

      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-2 gap-6">
        <div className = "rounded-xl border border-gray-300 p-6 hover:shadow-lg">
          <h3 className = "text-2xl font-bold">Variables</h3>
          <p className="mt-2">Learn how data is stored and used.</p>
        </div>

        <div className = "rounded-xl border border-gray-300 p-6 hover:shadow-lg">
          <h3 className="text-2xl font-bold">Functions</h3>
          <p className="mt-2">Understand how functions work.</p>
        </div>

        <div className="rounded-xl border border-gray-300 p-6 hover:shadow-lg">
          <h3 className="text-2xl font-bold">OOP</h3>
          <p className="mt-2">Learn classes, objects, and encapsulation.</p>
        </div>

        <div className="rounded-xl border border-gray-300 p-6 hover:shadow-lg">
          <h3 className="text-2xl font-bold">Data Structures</h3>
          <p className="mt-2">Learn arrays, lists, trees, and more.</p>
        </div>
      </div>
    </section>
  );
}