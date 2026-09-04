const activities = [
  "Talking directly with farmers to understand their challenges",
  "Recruiting agricultural students, professionals, and experienced farmers as Trainers",
  "Testing how farmers can be connected with people who have relevant knowledge",
  "Learning from feedback from farmers and Trainers",
  "Improving the service based on what we learn",
];

export default function CurrentStage() {
  return (
    <section id="current-stage" className="bg-earth-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Rwanda Pilot
          </span>
          <h2 className="mt-4 text-2xl font-bold text-earth-900 sm:text-3xl">
            Our Current Stage
          </h2>
          <p className="mt-4 text-earth-900/80">
            We are currently in the early pilot stage of this project in
            Rwanda. We are:
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-3">
          {activities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 text-brand-600" aria-hidden="true">
                ✓
              </span>
              <span className="text-sm text-earth-900/90 sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
