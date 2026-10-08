import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import Reveal from "../components/common/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-white/35">
            05 / Contact
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.85] tracking-[-0.07em]">
                LET’S
                <br />
                <span className="text-white/25">CREATE.</span>
              </h2>

              <p className="mt-10 max-w-xl text-base leading-8 text-white/45">
                Have a website, product, campaign or creative idea? Let’s turn
                it into something people remember.
              </p>
            </div>

            <div className="space-y-5 lg:pt-8">
              <a
                href="mailto:hello@nitesh-khatri.com"
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="flex items-center gap-3 text-white/60">
                  <Mail size={18} />
                  Email
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://github.com/khatrinitesh"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="flex items-center gap-3 text-white/60">
                  {/* <Github size={18} /> */}
                  GitHub
                </span>

                <ExternalLink size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="flex items-center gap-3 text-white/60">
                  {/* <Linkedin size={18} /> */}
                  LinkedIn
                </span>

                <ExternalLink size={17} />
              </a>

              <p className="flex items-center gap-2 pt-5 text-sm text-white/35">
                <MapPin size={16} />
                Mumbai, India
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
