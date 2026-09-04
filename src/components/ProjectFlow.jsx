import { Fragment } from "react";

const steps = [
  {
    label: "AFRIJWI",
    text: "Listening to local communities and understanding real challenges.",
  },
  {
    label: "Current Project",
    text: "Rwanda Farmer Support & Trainer Matching.",
  },
  {
    label: "What We Are Testing",
    text: "Connecting farmers with people who have relevant agricultural knowledge.",
  },
];

export default function ProjectFlow() {
  return (
    <div className="mx-auto mt-12 flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <div className="flex-1 rounded-xl border border-brand-200 bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              {step.label}
            </p>
            <p className="mt-1 text-xs text-earth-900/70 sm:text-sm">
              {step.text}
            </p>
          </div>
          {i < steps.length - 1 && (
            <span
              className="shrink-0 self-center text-lg text-brand-400"
              aria-hidden="true"
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
