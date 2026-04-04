import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function TextAndImage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tighter leading-none text-zinc-900 text-center max-w-4xl mx-auto py-10">
        O <span className="text-[#8CB369]">lanche</span> mais gostoso de{" "}
        <span className="text-[hsl(92,37%,59%)]">Lagarto</span>
      </h1>

      <div className="relative p-2 filter drop-shadow-[0_0_30px_hsl(111,100%,69%)]">
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-lg bg-muted"
        >
          <Image
            src="/Images/Hambúrguer.jpg"
            alt="Hambúrguer suculento"
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>
    </div>
  );
}
