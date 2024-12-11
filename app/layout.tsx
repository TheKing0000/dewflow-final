import type { Metadata } from "next";
import "./globals.css";

import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import { ThemeProvider } from "@/context/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="background-light850_dark100 relative">
            <Navbar />

            <div className="flex">
              <LeftSidebar />

              <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                <div className="mx-auto w-full max-w-5xl">{children}</div>
              </section>

              <RightSidebar />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
