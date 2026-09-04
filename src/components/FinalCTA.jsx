import TrainerButton from "./TrainerButton";

export default function FinalCTA() {
  return (
    <section className="bg-brand-700 py-16 sm:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Share Your Knowledge?
        </h2>
        <p className="mt-4 text-brand-50">
          Join our early Trainer community and help us build a better way for
          Rwanda&rsquo;s farmers to access agricultural knowledge.
        </p>
        <div className="mt-8">
          <TrainerButton
            size="lg"
            className="bg-white !text-brand-700 hover:bg-brand-50"
          />
        </div>
      </div>
    </section>
  );
}
