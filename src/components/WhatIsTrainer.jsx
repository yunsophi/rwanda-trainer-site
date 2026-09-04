const trainerTypes = [
  "Agriculture students",
  "Veterinary / Animal Science students",
  "Agriculture graduates",
  "Agricultural professionals",
  "Veterinary professionals",
  "Experienced farmers",
  "Others with relevant agricultural knowledge",
];

export default function WhatIsTrainer() {
  return (
    <section id="about-trainer" className="bg-earth-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
            What is a Trainer?
          </h2>
          <p className="mt-4 text-earth-900/80">
            A Trainer is someone with agricultural or livestock knowledge and
            experience who can support farmers when they face problems.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {trainerTypes.map((type) => (
            <li
              key={type}
              className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 text-brand-600" aria-hidden="true">✓</span>
              <span className="text-sm text-earth-900/90 sm:text-base">{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
