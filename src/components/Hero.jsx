import TrainerButton from "./TrainerButton";

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-brand-100 via-brand-50 to-earth-50">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <span className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
          Early Rwanda Pilot
        </span>

        <h1 className="text-3xl font-extrabold leading-tight text-earth-900 sm:text-5xl">
          Share Your Knowledge.
          <br />
          Help Rwanda&rsquo;s Farmers.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-earth-900/80 sm:text-lg">
          Join our early community of agricultural students, professionals, and
          experienced farmers who want to help farmers solve real agricultural
          and livestock problems.
        </p>

        <div className="mt-8">
          <TrainerButton size="lg" />
        </div>

        <p className="mt-4 text-sm text-earth-900/60">
          Early Rwanda Pilot &middot; Takes about 3–4 minutes to apply
        </p>
      </div>
    </section>
  );
}
