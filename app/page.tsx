import { Logo } from "./logo";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-16">
      <header>
        <h1>
          <Logo />
        </h1>
      </header>

      <main className="flex flex-1 flex-col justify-center py-24 sm:py-32">
        <p className="max-w-[14ch] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] sm:text-7xl lg:text-[5.5rem]">
          New possibilities in plant science.
        </p>
        <p className="mt-8 max-w-[34ch] text-lg leading-relaxed text-muted sm:mt-10 sm:text-xl">
          We&rsquo;re building a company to advance what&rsquo;s possible
          through plant research. More soon.
        </p>
      </main>

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
  );
}
