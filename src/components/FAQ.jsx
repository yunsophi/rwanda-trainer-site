import { useState } from "react";

const faqs = [
  {
    q: "Who can become a Trainer?",
    a: "Agriculture students, veterinary students, graduates, professionals, experienced farmers, and others with relevant agricultural knowledge or experience can apply.",
  },
  {
    q: "Do I need a certificate?",
    a: "No. No certificate or document is required when you first apply. Our team may contact you through WhatsApp or phone to learn more about your background, knowledge, and experience.",
  },
  {
    q: "Is there an application fee?",
    a: "No. Applying is free.",
  },
  {
    q: "Will I definitely receive 1,000 RWF?",
    a: "No. The 1,000 RWF is a limited pilot participation incentive for the first eligible Trainers who successfully become Verified Trainers. Applying does not guarantee payment.",
  },
  {
    q: "How will I help farmers?",
    a: "Depending on the situation, you may help through WhatsApp, phone calls, online meetings, or farm visits.",
  },
  {
    q: "Will I be paid for helping farmers?",
    a: "We are currently researching an appropriate compensation model. Verified Trainers may be asked about their preferred compensation.",
  },
  {
    q: "Is the farmer matching system already available?",
    a: "We are currently building the early Trainer community. Farmer-Trainer matching will be introduced as the pilot develops.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-brand-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
      >
        <span className="font-medium text-earth-900">{q}</span>
        <span
          className={`shrink-0 text-brand-600 transition-transform ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="px-4 pb-4 text-sm text-earth-900/75 sm:px-5 sm:pb-5">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
