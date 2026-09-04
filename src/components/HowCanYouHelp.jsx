const topics = [
  { icon: "🌾", label: "Crop Production" },
  { icon: "🦠", label: "Crop Diseases" },
  { icon: "🐛", label: "Pest Management" },
  { icon: "🧪", label: "Soil & Fertilizer" },
  { icon: "💧", label: "Irrigation" },
  { icon: "🐄", label: "Livestock" },
  { icon: "🩺", label: "Animal Health" },
  { icon: "🐓", label: "Poultry" },
  { icon: "🥛", label: "Dairy Farming" },
  { icon: "🐖", label: "Pig Farming" },
  { icon: "🐐", label: "Goat Farming" },
  { icon: "💼", label: "Agribusiness" },
  { icon: "📱", label: "Agricultural Technology" },
];

const channels = [
  { icon: "💬", label: "WhatsApp" },
  { icon: "📞", label: "Phone Call" },
  { icon: "💻", label: "Online Meeting" },
  { icon: "🚜", label: "Farm Visit" },
];

export default function HowCanYouHelp() {
  return (
    <section id="how-you-help" className="bg-brand-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
            How Can You Help?
          </h2>
          <p className="mt-4 text-earth-900/80">
            Farmers may need support with problems like these:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {topics.map((t) => (
            <div
              key={t.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 text-center shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">{t.icon}</span>
              <span className="text-xs font-medium text-earth-900/90 sm:text-sm">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-earth-900 sm:text-xl">
            How Trainers Provide Support
          </h3>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {channels.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-brand-200 bg-white p-4 text-center shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">{c.icon}</span>
              <span className="text-xs font-medium text-earth-900/90 sm:text-sm">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
