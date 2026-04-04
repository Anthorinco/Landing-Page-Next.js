export default function Cardapio() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
        <div className="space-y-16">
          <h2 className="text-5xl font-serif font-black text-zinc-900 mb-10 border-l-8 border-[#8CB369] pl-4 uppercase tracking-tighter">
            Hambúrgueres
          </h2>

          {/* Burger 1 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              BURGER
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div className="pr-4">
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Clássico .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Lagarto Original
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Blend bovino 180g, queijo prato, picles da casa e maionese
                  artesanal no pão brioche.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                28.90
              </div>
            </div>
          </div>

          {/* Burger 2 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              CHEESE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Cheddar .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Cheddar Melt
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Hambúrguer 180g, muito cheddar cremoso e cebola caramelizada
                  no shoyu.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                32.00
              </div>
            </div>
          </div>

          {/* Burger 3 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              BACON
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Crocante .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Bacon Blast
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Duas fatias de bacon rústico, blend 180g, queijo cheddar e
                  molho barbecue.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                34.90
              </div>
            </div>
          </div>

          {/* Burger 4 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              VEGGIE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Natural .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Grão de Bico
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Hambúrguer de grão de bico, alface, tomate, cebola roxa e
                  maionese vegana.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                26.00
              </div>
            </div>
          </div>

          {/* Burger 5 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              HOT
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Picante .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Pepper Burger
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Blend 180g, queijo monterey jack, geleia de pimenta e
                  jalapeños.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                31.50
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: PASTÉIS */}
        <div className="space-y-16 mt-20 lg:mt-0">
          <h2 className="text-5xl font-serif font-black text-zinc-900 mb-10 border-l-8 border-[#8CB369] pl-4 uppercase tracking-tighter">
            Pastéis
          </h2>

          {/* Pastel 1 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              CARNE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Clássico .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Carne com Ovo
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Carne moída bem temperada, ovo cozido picado, azeitona e
                  cebolinha.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                12.00
              </div>
            </div>
          </div>

          {/* Pastel 2 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              QUEIJO
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Amado .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Queijo Coalho
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  O verdadeiro queijo coalho regional, derretido e dourado na
                  massa crocante.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                11.00
              </div>
            </div>
          </div>

          {/* Pastel 3 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              FRANGO
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Especial .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Frango com Catupiry
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Frango desfiado suculento com o autêntico requeijão cremoso.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                13.50
              </div>
            </div>
          </div>

          {/* Pastel 4 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              MIX
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Favorito .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Portuguesa
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Presunto, queijo, ovo, cebola, azeitona e um toque de orégano.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                14.00
              </div>
            </div>
          </div>

          {/* Pastel 5 */}
          <div className="relative group">
            <span className="absolute -left-4 -top-8 text-8xl font-serif font-black text-zinc-100/60 -z-10 select-none uppercase">
              DOCE
            </span>
            <div className="border-b border-zinc-100 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#8CB369] text-xl font-serif font-bold uppercase tracking-widest mb-1">
                  / Sobremesa .
                </h3>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">
                  Romeu e Julieta
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Combinação perfeita de queijo derretido com goiabada cascão.
                </p>
              </div>
              <div className="text-[#E88D67] text-2xl font-serif font-bold">
                10.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
