import NavBar from "@/components/NavBar";
import TextAndImage from "@/components/TextAndImage";
import Cardapio from "@/components/Cardápio";
import Contato from "@/components/Contato";

export default function Main() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="flex flex-col">
        <section id="inicio" className="py-4 md:py-10">
          <TextAndImage />
        </section>

        <section
          id="cardapio"
          className="py-10 md:py-24 border-t border-zinc-50"
        >
          <Cardapio />
        </section>
        <section id="contato" className="py-4 md:py-10">
          <Contato />
        </section>
      </main>
    </div>
  );
}
