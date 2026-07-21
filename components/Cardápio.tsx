import { ArrowUpRight } from "lucide-react";

const menuGroups = [
  {
    number: "01",
    title: "Hambúrgueres",
    subtitle: "Blend de 180 g no pão brioche",
    items: [
      {
        label: "Clássico",
        name: "Lagarto Original",
        description:
          "Blend bovino 180 g, queijo prato, picles da casa e maionese artesanal no pão brioche.",
        price: "28,90",
      },
      {
        label: "Cheddar",
        name: "Cheddar Melt",
        description:
          "Hambúrguer 180 g, cheddar cremoso e cebola caramelizada no shoyu.",
        price: "32,00",
      },
    ],
  },
  {
    number: "02",
    title: "Pastéis",
    subtitle: "Massa crocante, recheio caprichado",
    items: [
      {
        label: "Clássico",
        name: "Carne com Ovo",
        description:
          "Carne moída bem temperada, ovo cozido picado, azeitona e cebolinha.",
        price: "12,00",
      },
      {
        label: "Regional",
        name: "Queijo Coalho",
        description:
          "O verdadeiro queijo coalho regional, derretido e dourado na massa crocante.",
        price: "11,00",
      },
    ],
  },
];

export default function Cardapio() {
  return (
    <section
      id="cardapio"
      aria-labelledby="menu-title"
      className="scroll-mt-28 bg-[#f4efe5] px-4 py-20 text-[#201710] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#cfc2ae] pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#b33d22] uppercase">
              Nosso cardápio
            </p>
            <h2
              id="menu-title"
              className="font-display mt-3 text-5xl leading-none font-black tracking-[-0.045em] sm:text-6xl"
            >
              Escolha seu favorito.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#645748] lg:justify-self-end lg:text-lg">
            Poucas opções, feitas com atenção. Do hambúrguer suculento ao pastel
            de queijo coalho, cada pedido leva sabor e identidade lagartense.
          </p>
        </div>

        <div className="grid gap-14 pt-12 lg:grid-cols-2 lg:gap-20">
          {menuGroups.map((group) => (
            <article
              key={group.title}
              aria-labelledby={"grupo-" + group.number}
            >
              <header className="flex items-start gap-5 border-t-4 border-[#201710] pt-5">
                <span className="font-display text-xl font-black text-[#b33d22]">
                  {group.number}
                </span>
                <div>
                  <h3
                    id={"grupo-" + group.number}
                    className="font-display text-3xl font-black tracking-[-0.03em] sm:text-4xl"
                  >
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#756858]">{group.subtitle}</p>
                </div>
              </header>

              <ul className="mt-8 divide-y divide-[#cfc2ae] border-b border-[#cfc2ae]">
                {group.items.map((item) => (
                  <li key={item.name} className="group py-6 first:pt-0">
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <p className="mb-2 text-[0.68rem] font-extrabold tracking-[0.18em] text-[#b33d22] uppercase">
                          {item.label}
                        </p>
                        <h4 className="text-xl font-extrabold tracking-[-0.02em] transition-colors group-hover:text-[#b33d22] sm:text-2xl">
                          {item.name}
                        </h4>
                        <p className="mt-2 max-w-md text-sm leading-6 text-[#756858]">
                          {item.description}
                        </p>
                      </div>
                      <p className="shrink-0 text-right">
                        <span className="block text-[0.65rem] font-bold tracking-[0.12em] text-[#645748] uppercase">
                          R$
                        </span>
                        <span className="font-display text-2xl font-black sm:text-3xl">
                          {item.price}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-y border-[#cfc2ae] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-black tracking-[-0.03em]">
              Já decidiu?
            </p>
            <p className="mt-1 text-sm text-[#756858]">
              Envie seu pedido e confirme os detalhes com a gente.
            </p>
          </div>
          <a
            href="https://wa.me/5579996630993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#201710] px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#b33d22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b33d22] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe5]"
          >
            Montar pedido
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
