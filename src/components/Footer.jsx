export default function Footer() {
  return (
    <footer className="bg-earth-900 py-10 text-earth-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Rwanda Farmer Support &amp; Trainer Matching
          </p>
          <p className="text-sm text-earth-50/70">
            Connecting farmers in Rwanda with people who have agricultural and
            livestock knowledge.
          </p>
          <p className="text-sm font-medium text-brand-300">
            Early Rwanda Pilot
          </p>
        </div>

        <div className="mt-6 border-t border-earth-50/10 pt-6">
          <p className="text-sm font-semibold text-earth-50/90">AFRIJWI</p>
          <p className="mt-1 text-sm text-earth-50/60">
            A sole-proprietor business registered in Japan.
          </p>
          <p className="mt-3 text-sm text-earth-50/60">
            Project Lead: Yukino Shimbo
            <br />
            Student at Institute of Science Tokyo
          </p>
        </div>

        <div className="mt-6 border-t border-earth-50/10 pt-6 text-sm text-earth-50/60">
          <p>
            Contact:{" "}
            <a
              href="mailto:frijwi.tech@gmail.com"
              className="text-earth-50/80 underline decoration-earth-50/30 underline-offset-2 hover:text-white"
            >
              frijwi.tech@gmail.com
            </a>
          </p>
          <p className="mt-3 text-xs text-earth-50/40">
            © {new Date().getFullYear()} AFRIJWI &mdash; Rwanda Farmer Support
            &amp; Trainer Matching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
