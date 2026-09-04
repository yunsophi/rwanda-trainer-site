const steps = [
  {
    number: "1",
    title: "Apply",
    text: 'Click "Become a Trainer" and complete our short Google Form.',
  },
  {
    number: "2",
    title: "Review",
    text: "Our team reviews your background, knowledge, and areas of expertise.",
  },
  {
    number: "3",
    title: "Verification",
    text: "We may contact you through WhatsApp or phone to confirm your information and interest.",
  },
  {
    number: "4",
    title: "Become a Verified Trainer",
    text: "Once verified, you become part of our early Trainer community and may receive opportunities to support farmers in the future.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.number}
              className="relative rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {s.number}
              </span>
              <h3 className="mt-4 font-semibold text-earth-900">{s.title}</h3>
              <p className="mt-2 text-sm text-earth-900/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
