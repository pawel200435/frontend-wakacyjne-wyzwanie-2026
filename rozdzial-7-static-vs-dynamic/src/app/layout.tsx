import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Render i SEO Zadanie",
  description: "Sklep zbudowany z zachowaniem zasad renderingu i SEO",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Render i SEO Zadanie",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
