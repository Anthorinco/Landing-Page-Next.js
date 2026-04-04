import NavBar from "@/components/NavBar";
import TextAndImage from "@/components/TextAndImage";
import Cardapio from "@/components/Cardápio";
export default function Main() {
  return (
    <>
      <NavBar />
      <main className="py-5">
        <TextAndImage />
      </main>
      <main className="py-20">
        <Cardapio />
      </main>
    </>
  );
}
