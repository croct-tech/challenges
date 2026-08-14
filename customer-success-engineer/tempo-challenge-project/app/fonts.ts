import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Self-hosting automático das fontes pelo next/font:
 * sem <link> para o Google Fonts, sem FOUT e sem request externo em runtime.
 */
// Fraunces e Inter são variáveis: sem `weight` o next/font carrega o
// range completo (400–700 usados aqui saem do mesmo arquivo).
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// IBM Plex Mono é estática: pesos precisam ser declarados.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});
