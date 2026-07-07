import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
// Import Custom Cursor
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Muhammad Jati Nugroho (Jati Nugroho) | Fullstack Developer",
  description: "Portofolio resmi Muhammad Jati Nugroho, juga dikenal sebagai Jati Nugroho. Fullstack Developer di PT Garuda Cyber Indonesia dengan keahlian PHP, Laravel, Next.js, dan UI/UX Design.",
  keywords: [
    "Muhammad Jati Nugroho",
    "Jati Nugroho",
    "Fullstack Developer",
    "Programmer Pekanbaru",
    "PT Garuda Cyber Indonesia",
    "Laravel",
    "Next.js",
    "UI/UX Design"
  ],
  authors: [{ name: "Muhammad Jati Nugroho" }],
  openGraph: {
    title: "Muhammad Jati Nugroho (Jati Nugroho) | Fullstack Developer",
    description: "Portofolio resmi Muhammad Jati Nugroho. Fullstack Developer di PT Garuda Cyber Indonesia dengan keahlian PHP, Laravel, Next.js, dan UI/UX Design.",
    url: "https://tiinugroho.vercel.app/",
    siteName: "Portfolio Muhammad Jati Nugroho",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
