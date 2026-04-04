import NavBar from "@/components/NavBar";
import TextAndImage from "@/components/TextAndImage";
import Cardapio from "@/components/Cardápio";

export default function Main() {
  return (
    <div className="min-h-screen bg-white">
      {/* O NavBar já tem sticky top-0, então ele flutua conforme o scroll */}
      <NavBar />

      {/* Agrupamos tudo em um único <main> por semântica (SEO e Acessibilidade).
          py-5 no mobile e py-10 no desktop para o Hero (TextAndImage).
      */}
      <main className="flex flex-col">
        <section className="py-4 md:py-10">
          <TextAndImage />
        </section>

        {/* Espaçamento entre o Hero e o Cardápio:
            - No celular: py-10 (40px) é suficiente para separar as seções.
            - No PC: py-20 (80px) dá o respiro elegante que o estilo pede.
        */}
        <section className="py-10 md:py-24 border-t border-zinc-50">
          <Cardapio />
        </section>
      </main>

      {/* Dica: Adicione um Footer simples aqui depois */}
    </div>
  );
}
