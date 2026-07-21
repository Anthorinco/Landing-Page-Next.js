import Image from "next/image";
import { ArrowDown, MapPin, MessageCircle } from "lucide-react";
import heroBurger from "@/public/Images/hero-burger.png";

export default function TextAndImage() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="scroll-mt-28 bg-[#17110d] text-[#fff8ec]"
    >
      <div className="relative isolate overflow-hidden lg:min-h-[42rem]">
        <Image
          src={heroBurger}
          alt="Hambúrguer artesanal servido no balcão do Sabor Lagartense"
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 1px"
          className="hidden object-cover object-right lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(23,17,13,0.98)_0%,rgba(23,17,13,0.88)_34%,rgba(23,17,13,0.18)_67%,rgba(23,17,13,0)_100%)] lg:block"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl lg:min-h-[42rem] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#f0bb71] uppercase sm:text-sm">
              <MapPin aria-hidden="true" className="size-4" />
              Lagarto, Sergipe
            </div>

            <h1
              id="hero-title"
              className="font-display max-w-3xl text-5xl leading-[0.92] font-black tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              O lanche mais gostoso de{" "}
              <span className="text-[#f0643c] italic">Lagarto.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#d8ccba] sm:text-lg">
              Hambúrgueres generosos, pastéis crocantes e receitas regionais.
              Escolha seu favorito e fale com a equipe pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5579996630993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c84424] px-6 text-sm font-extrabold tracking-[0.06em] text-white uppercase transition-colors hover:bg-[#ad341b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                Pedir pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-6 text-sm font-bold text-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
              >
                Ver cardápio
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>

            <p className="mt-8 border-l-2 border-[#f0bb71] pl-4 text-sm leading-6 text-[#b8ab98]">
              Blend de 180 g e pão brioche nos hambúrgueres da casa.
            </p>
          </div>

          <div className="relative aspect-[4/3] min-h-[20rem] border-t border-white/10 lg:hidden">
            <Image
              src={heroBurger}
              alt="Hambúrguer artesanal do Sabor Lagartense"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center]"
            />
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-[#211813]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {[
            ["01", "Blend de 180 g"],
            ["02", "Pão brioche"],
            ["03", "Pedido pelo WhatsApp"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-4 py-4 sm:px-5">
              <span className="font-display text-xl font-bold text-[#f0643c]">
                {number}
              </span>
              <span className="text-xs font-bold tracking-[0.1em] text-[#d8ccba] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
