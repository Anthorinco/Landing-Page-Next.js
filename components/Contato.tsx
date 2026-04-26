import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="w-full max-w-7xl mx-auto py-24 px-6">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-zinc-900 uppercase tracking-tighter">
          Ficou com <span className="text-[#8CB369]">fome?</span>
        </h2>
        <p className="text-zinc-500 mt-2 text-lg">
          Escolha como quer falar com a gente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          href="https://wa.me/5579996630993"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[2rem] p-8 h-72 flex flex-col justify-center items-center bg-[#8CB369] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(140,179,105,0.4)]"
        >
          <MessageCircle className="absolute -right-8 -bottom-8 w-64 h-64 text-white/10 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />

          <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl w-full text-center flex flex-col items-center gap-3">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <MessageCircle className="w-8 h-8 text-[#8CB369]" />
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">
                Peça no Zap
              </h3>
              <p className="text-white/80 font-medium italic">
                Atendimento rápido e eficiente
              </p>
            </div>
            <ArrowUpRight className="text-white w-6 h-6 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>

        <a
          href="https://instagram.com/anthorinco"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[2rem] p-8 h-72 flex flex-col justify-center items-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,39,67,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute -right-8 -bottom-8 w-64 h-64 text-white/10 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>

          <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl w-full text-center flex flex-col items-center gap-3">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2743"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">
                Siga o Sabor
              </h3>
              <p className="text-white/80 font-medium italic">
                Acompanhe nossos bastidores
              </p>
            </div>
            <ArrowUpRight className="text-white w-6 h-6 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>
      </div>
    </section>
  );
}
