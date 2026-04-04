"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Opcional: import { Menu } from "lucide-react"; se quiser um ícone de menu no futuro

export default function NavBar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        {/* 1. LOGO - Ajuste de tamanho responsivo */}
        <div className="flex-none">
          <Link
            href="/"
            className="text-xl md:text-3xl font-serif font-bold tracking-tighter text-zinc-900 whitespace-nowrap"
          >
            Sabor Lagartense
          </Link>
        </div>

        {/* 2. MENU (Centro) - Escondido no mobile (hidden), visível no desktop (md:flex) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium text-lg tracking-widest uppercase border-b-2 border-green-600 rounded-none bg-transparent cursor-pointer",
                  )}
                >
                  Início
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/a-la-carte"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium text-lg tracking-widest uppercase bg-transparent cursor-pointer",
                  )}
                >
                  Cardápio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/lunch"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium text-lg tracking-widest uppercase bg-transparent cursor-pointer",
                  )}
                >
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* 3. BOTÃO (Direita) - Ajuste de padding e fonte para não esmagar no mobile */}
        <div className="flex-none ml-2">
          <Button className="bg-[#8CB369] hover:bg-[#7a9d5a] text-white rounded-none px-4 py-4 md:px-6 md:py-6 text-[10px] md:text-sm font-bold tracking-widest uppercase">
            {/* Texto reduzido ou apenas "Pedir" no mobile se preferir */}
            Peça Agora
          </Button>
        </div>
      </div>
    </header>
  );
}
