import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabor Lagartense | Hambúrgueres e pastéis em Lagarto",
  description:
    "Hambúrgueres artesanais e pastéis com sabor regional em Lagarto, Sergipe. Faça seu pedido pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
