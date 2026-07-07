import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
// Import Custom Cursor
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Muhammad Jati Nugroho - Fullstack Developer",
  description: "Modern Neurobrutalism Portfolio",
  content: "Portofolio resmi Muhammad Jati Nugroho, juga dikenal sebagai Jati Nugroho. Fullstack Developer di PT Garuda Cyber Indonesia dengan keahlian PHP, Laravel, Next.js, dan UI/UX Design.",
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
