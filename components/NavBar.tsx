import Link from "next/link";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#contato", label: "Contato" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17110d] text-[#fff8ec]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="#inicio"
          aria-label="Sabor Lagartense — voltar ao início"
          className="group inline-flex min-w-0 items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
        >
          <span className="font-display text-xl font-black tracking-[-0.04em] sm:text-2xl">
            Sabor
          </span>
          <span className="truncate text-[0.65rem] font-bold tracking-[0.2em] text-[#f0bb71] uppercase sm:text-xs">
            Lagartense
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#d8ccba] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://wa.me/5579996630993"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-[#c84424] px-4 text-xs font-extrabold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#ad341b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d] sm:px-5 sm:text-sm"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">Pedir agora</span>
          <span className="sm:hidden">Pedir</span>
        </a>
      </div>

      <nav
        aria-label="Navegação principal no celular"
        className="border-t border-white/10 md:hidden"
      >
        <ul className="mx-auto flex max-w-md items-center justify-center gap-7 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-1 text-xs font-bold tracking-[0.08em] text-[#d8ccba] uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0643c]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
