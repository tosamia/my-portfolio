
export default function Footer() {
  return (
    <footer className="border-t border-[#243B3A]/10 bg-[#E8EAE1] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#home" className="text-xl font-black text-[#243B3A]">
          Samia<span className="text-[#A47755]">.</span>
        </a>

        <p className="text-center text-xs text-[#718078]">
          © 2026 Samia Rahman. Designed & built with Next.js.
        </p>

        <div className="flex gap-5 text-sm font-medium text-[#52645D]">
          <a href="https://github.com/tosamia" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/samia-rahmann/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:samiasamian2003@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
