export default function Cardapio() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-10">
        {/* COLUNA DA ESQUERDA: HAMBÚRGUERES */}
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-zinc-900 mb-8 md:mb-10 border-l-8 border-[#8CB369] pl-4 uppercase tracking-tighter">
            Hambúrgueres
          </h2>

          {/* Burger 1 */}
          <div className="relative group">
            {/* Texto de fundo responsivo: menor no mobile (text-6xl) */}
            <span className="absolute -left-2 -top-6 md:-left-4 md:-top-8 text-6xl md:text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              BURGER
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#8CB369] text-lg md:text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Clássico .
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                  Lagarto Original
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
                  Blend bovino 180g, queijo prato, picles da casa e maionese
                  artesanal no pão brioche.
                </p>
              </div>
              <div className="text-[#E88D67] text-xl md:text-2xl font-serif font-bold whitespace-nowrap">
                28.90
              </div>
            </div>
          </div>

          {/* Burger 2 */}
          <div className="relative group">
            <span className="absolute -left-2 -top-6 md:-left-4 md:-top-8 text-6xl md:text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              CHEESE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#8CB369] text-lg md:text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Cheddar .
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                  Cheddar Melt
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
                  Hambúrguer 180g, muito cheddar cremoso e cebola caramelizada
                  no shoyu.
                </p>
              </div>
              <div className="text-[#E88D67] text-xl md:text-2xl font-serif font-bold whitespace-nowrap">
                32.00
              </div>
            </div>
          </div>

          {/* Repita o padrão de classes (flex-1 no texto, gap-4, text-xl no preço mobile) para os Burgers 3, 4 e 5 */}
          {/* ... (Burgers 3, 4, 5 seguindo o mesmo estilo do 1 e 2) */}
        </div>

        {/* COLUNA DA DIREITA: PASTÉIS */}
        <div className="space-y-12 md:space-y-16 mt-12 lg:mt-0">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-zinc-900 mb-8 md:mb-10 border-l-8 border-[#8CB369] pl-4 uppercase tracking-tighter">
            Pastéis
          </h2>

          {/* Pastel 1 */}
          <div className="relative group">
            <span className="absolute -left-2 -top-6 md:-left-4 md:-top-8 text-6xl md:text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              CARNE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#8CB369] text-lg md:text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Clássico .
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                  Carne com Ovo
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
                  Carne moída bem temperada, ovo cozido picado, azeitona e
                  cebolinha.
                </p>
              </div>
              <div className="text-[#E88D67] text-xl md:text-2xl font-serif font-bold whitespace-nowrap">
                12.00
              </div>
            </div>
          </div>

          {/* Pastel 2 */}
          <div className="relative group">
            <span className="absolute -left-2 -top-6 md:-left-4 md:-top-8 text-6xl md:text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              QUEIJO
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#8CB369] text-lg md:text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Amado .
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                  Queijo Coalho
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
                  O verdadeiro queijo coalho regional, derretido e dourado na
                  massa crocante.
                </p>
              </div>
              <div className="text-[#E88D67] text-xl md:text-2xl font-serif font-bold whitespace-nowrap">
                11.00
              </div>
            </div>
          </div>

          {/* Repita o padrão para os demais Pastéis */}
          {/* ... (Pastéis 3, 4, 5 seguindo o mesmo estilo) */}
        </div>
      </div>
    </section>
  );
}
