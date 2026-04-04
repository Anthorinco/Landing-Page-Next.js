import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function TextAndImage() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      {/* Ajuste de escala do H1: 
          - text-4xl no mobile (para ter presença)
          - text-7xl no tablet
          - text-8xl no desktop
          - leading-[0.9] para as linhas ficarem bem juntinhas no estilo Vegoshi
      */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tighter leading-[0.9] text-zinc-900 text-center max-w-4xl mx-auto py-8 md:py-16">
        O <span className="text-[#8CB369]">lanche</span> mais gostoso de{" "}
        <span className="text-[#8CB369]">Lagarto</span>
      </h1>

      {/* Container da Imagem:
          - drop-shadow reduzido no mobile (15px) e forte no desktop (30px)
          - p-1 no mobile para não perder espaço lateral
      */}
      <div className="relative p-1 md:p-2 filter drop-shadow-[0_0_15px_rgba(140,179,105,0.4)] md:drop-shadow-[0_0_30px_rgba(140,179,105,0.6)]">
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-xl bg-muted shadow-2xl"
        >
          <Image
            src="/Images/Hambúrguer.jpg"
            alt="Hambúrguer suculento"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </AspectRatio>
      </div>
    </div>
  );
}
