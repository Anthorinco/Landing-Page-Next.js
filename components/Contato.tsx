import { ArrowUpRight, MessageCircle } from "lucide-react";

const orderSteps = [
  "Escolha seu lanche no cardápio.",
  "Chame a gente pelo WhatsApp.",
  "Confirme os detalhes do pedido com a equipe.",
];

export default function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="scroll-mt-28 bg-[#201710] px-4 py-20 text-[#fff8ec] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#f0bb71] uppercase">
            Pedidos e contato
          </p>
          <h2
            id="contact-title"
            className="font-display mt-3 max-w-xl text-5xl leading-[0.95] font-black tracking-[-0.05em] sm:text-6xl"
          >
            A fome chamou? A gente responde.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#c8baa7]">
            Fale direto com nossa equipe para montar seu pedido. No Instagram,
            acompanhe novidades e bastidores do Sabor Lagartense.
          </p>

          <ol className="mt-10 space-y-4 border-t border-white/15 pt-6">
            {orderSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 text-sm text-[#d8ccba]"
              >
                <span className="font-display font-black text-[#f0643c]">
                  0{index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="self-end border-t border-white/15">
          <a
            href="https://wa.me/5579996630993"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-36 items-center justify-between gap-6 border-b border-white/15 bg-[#c84424] p-6 text-white transition-colors hover:bg-[#ad341b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset sm:p-8"
          >
            <span className="flex items-center gap-4 sm:gap-6">
              <MessageCircle
                aria-hidden="true"
                className="size-8 shrink-0 sm:size-10"
              />
              <span>
                <span className="block text-xs font-bold tracking-[0.15em] text-white/75 uppercase">
                  Atendimento direto
                </span>
                <span className="font-display mt-1 block text-2xl font-black sm:text-4xl">
                  WhatsApp
                </span>
                <span className="mt-1 block text-sm text-white/85">
                  (79) 99663-0993
                </span>
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="https://instagram.com/anthorinco"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-32 items-center justify-between gap-6 border-b border-white/15 p-6 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c] focus-visible:ring-inset sm:p-8"
          >
            <span className="flex items-center gap-4 sm:gap-6">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-8 shrink-0 sm:size-10"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span>
                <span className="block text-xs font-bold tracking-[0.15em] text-[#c8baa7] uppercase">
                  Acompanhe o sabor
                </span>
                <span className="font-display mt-1 block text-2xl font-black sm:text-4xl">
                  Instagram
                </span>
                <span className="mt-1 block text-sm text-[#c8baa7]">
                  @anthorinco
                </span>
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-6 shrink-0 text-[#f0bb71] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
