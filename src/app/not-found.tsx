import Link from "next/link";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="font-display text-8xl text-gold/20 block mb-4">
          404
        </span>
        <h1 className="font-display text-2xl md:text-3xl text-off-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-text mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase bg-gold text-dark-bg hover:bg-gold-light transition-all duration-300"
          >
            Go Home
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase border border-gold text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
