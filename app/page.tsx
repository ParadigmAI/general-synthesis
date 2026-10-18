import { HeroVideo } from "./hero-video";
import { Logo } from "./logo";

export default function Home() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden bg-[#1d2a1f] text-white">
        <HeroVideo />
        {/* Darken top and bottom so the logo and type stay legible over any frame. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(10,14,11,0.45)_0%,rgba(10,14,11,0)_22%),linear-gradient(to_top,rgba(10,14,11,0.72)_0%,rgba(10,14,11,0.15)_55%,rgba(10,14,11,0)_75%)]"
        />
        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-between px-6 pt-8 pb-20 sm:px-10 sm:pt-12 sm:pb-24 lg:px-16">
          <header>
            <h1>
              <Logo />
            </h1>
          </header>

          <main>
            <p className="max-w-[14ch] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] sm:text-7xl lg:text-[5.5rem]">
              New possibilities in plant science.
            </p>
            <p className="mt-8 max-w-[34ch] text-lg leading-relaxed text-white/85 sm:mt-10 sm:text-xl">
              We&rsquo;re building a company to advance what&rsquo;s possible
              through plant research. More soon.
            </p>
          </main>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20 lg:px-16">
        <section
          aria-labelledby="founder-note"
          className="grid gap-4 border-t border-rule pt-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-10 sm:pt-10"
        >
          <h2
            id="founder-note"
            className="text-[0.8125rem] font-medium tracking-[0.01em] text-muted"
          >
            A note from the founder
          </h2>
          <blockquote className="max-w-[52ch] font-serif text-xl leading-normal sm:text-[1.375rem]">
            <p>
              &ldquo;We&rsquo;re starting General Synthesis with a simple
              ambition: to explore what plants could become. It&rsquo;s early.
              Our focus now is on the foundations. We&rsquo;ll share more as the
              work develops.&rdquo;
            </p>
          </blockquote>
        </section>
      </div>
    </>
  );
}
