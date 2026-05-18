import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
// Import Custom Cursor
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Jati Nugroho - Fullstack Developer",
  description: "Modern Neurobrutalism Portfolio",
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