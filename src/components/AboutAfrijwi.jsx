import ProjectFlow from "./ProjectFlow";

export default function AboutAfrijwi() {
  return (
    <section id="about-afrijwi" className="bg-earth-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Who is behind this
          </span>
          <h2 className="mt-4 text-2xl font-bold text-earth-900 sm:text-3xl">
            About AFRIJWI
          </h2>
        </div>

        <div className="mt-8 space-y-4 text-earth-900/80">
          <p>
            AFRIJWI is a sole-proprietor business registered in Japan &mdash;
            not a company, organization, or NGO.
          </p>
          <p>
            We listen directly to people in local communities, seek to
            understand the challenges they actually face, and develop
            practical solutions based on their experiences and needs.
          </p>
          <p>
            We are currently conducting field research in Rwanda and
            exploring ways to create solutions together with local
            communities.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Project Lead
          </p>
          <div className="mt-3 flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700"
              aria-hidden="true"
            >
              YS
            </span>
            <div>
              <p className="font-semibold text-earth-900">Yukino Shimbo</p>
              <p className="text-sm text-earth-900/70">
                Student at Institute of Science Tokyo
              </p>
              <p className="text-sm text-earth-900/70">Project Lead, AFRIJWI</p>
              <p className="mt-2 text-sm text-earth-900/60">
                Currently conducting field research in Rwanda.
              </p>
            </div>
          </div>
        </div>

        <ProjectFlow />
      </div>
    </section>
  );
}
