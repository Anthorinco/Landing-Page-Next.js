import Link from "next/link";
import Cardapio from "@/components/Cardápio";
import Contato from "@/components/Contato";
import NavBar from "@/components/NavBar";
import TextAndImage from "@/components/TextAndImage";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#contato", label: "Contato" },
];

export default function Main() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f4efe5]">
      <NavBar />

      <main>
        <TextAndImage />
        <Cardapio />
        <Contato />
      </main>

      <footer className="border-t border-white/10 bg-[#17110d] px-4 py-8 text-[#d8ccba] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-black tracking-[-0.03em] text-white">
              Sabor Lagartense
            </p>
            <p className="mt-1 text-xs text-[#9e907d]">
              Hambúrgueres e pastéis com sabor da nossa terra.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-[#9e907d]">
            © {new Date().getFullYear()} Sabor Lagartense
          </p>
        </div>
      </footer>
    </div>
  );
}
