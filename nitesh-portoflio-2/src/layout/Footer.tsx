import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 text-xs text-white/30 sm:flex-row">
        <p>© {new Date().getFullYear()} Nitesh Khatri. All rights reserved.</p>

        <button
          type="button"
          onClick={scrollTop}
          className="flex items-center gap-2 transition hover:text-white"
        >
          Back to top
          <ArrowUpRight size={14} />
        </button>
      </div>
    </footer>
  );
}
