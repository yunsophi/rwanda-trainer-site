const benefits = [
  {
    icon: "🤝",
    title: "Help Farmers",
    text: "Use your knowledge to help farmers solve real agricultural and livestock problems.",
  },
  {
    icon: "📈",
    title: "Gain Practical Experience",
    text: "Learn from real-world agricultural challenges and gain practical experience.",
  },
  {
    icon: "🌍",
    title: "Build Your Network",
    text: "Connect with farmers, students, professionals, and people working in agriculture.",
  },
  {
    icon: "💰",
    title: "Potential Income",
    text: "In the future, Trainers may receive payment for providing consultations.",
  },
  {
    icon: "🚀",
    title: "Join an Early Rwanda Pilot",
    text: "Help us test and improve a new way for farmers to access agricultural knowledge.",
  },
];

export default function WhyBecomeTrainer() {
  return (
    <section id="why" className="bg-earth-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
            Why Become a Trainer?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl" aria-hidden="true">{b.icon}</span>
              <h3 className="mt-3 font-semibold text-earth-900">{b.title}</h3>
              <p className="mt-2 text-sm text-earth-900/75">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
