import { TRAINER_FORM_URL } from "../config";

/**
 * Every "Become a Trainer" CTA on the site should use this component so
 * the destination (Google Form) stays managed in one place (see config.js).
 */
export default function TrainerButton({
  children = "Become a Trainer",
  className = "",
  size = "md",
}) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-lg"
      : size === "sm"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3 text-base";

  return (
    <a
      href={TRAINER_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 font-semibold text-white shadow-sm transition hover:bg-brand-700 active:bg-brand-800 ${sizeClasses} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
