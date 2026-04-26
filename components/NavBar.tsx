"use client";
import { useState } from "react";
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

export default function NavBar() {
  //
  const [local, setLocal] = useState("inicio");
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLocal(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["inicio", "cardapio", "contato"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full border-b border-zinc-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <div className="flex-none">
          <Link
            href="/"
            className="text-xl md:text-3xl font-serif font-bold tracking-tighter text-zinc-900 whitespace-nowrap"
          >
            Sabor Lagartense
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#inicio"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative h-10 w-max bg-transparent px-4 py-2 transition-colors",
                    "hover:bg-transparent hover:text-green-600 focus:bg-transparent focus:outline-none active:bg-transparent",
                    "font-medium text-lg tracking-widest uppercase rounded-none",
                    local === "inicio"
                      ? "border-b-2 border-green-600 text-green-600"
                      : "border-b-2 border-transparent text-zinc-500",
                  )}
                >
                  Início
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#cardapio"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative h-10 w-max bg-transparent px-4 py-2 transition-colors",
                    "hover:bg-transparent hover:text-green-600 focus:bg-transparent focus:outline-none active:bg-transparent",
                    "font-medium text-lg tracking-widest uppercase rounded-none",
                    local === "cardapio"
                      ? "border-b-2 border-green-600 text-green-600"
                      : "border-b-2 border-transparent text-zinc-500",
                  )}
                >
                  Cardápio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#contato"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative h-10 w-max bg-transparent px-4 py-2 transition-colors",
                    "hover:bg-transparent hover:text-green-600 focus:bg-transparent focus:outline-none active:bg-transparent",
                    "font-medium text-lg tracking-widest uppercase rounded-none",
                    local === "contato"
                      ? "border-b-2 border-green-600 text-green-600"
                      : "border-b-2 border-transparent text-zinc-500",
                  )}
                >
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex-none ml-2">
          <Button className="bg-[#8CB369] hover:bg-[#7a9d5a] text-white rounded-none px-4 py-4 md:px-6 md:py-6 text-[10px] md:text-sm font-bold tracking-widest uppercase">
            Peça Agora
          </Button>
        </div>
      </div>
    </header>
  );
}
