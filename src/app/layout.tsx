import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactQueryProvider } from "@/provider/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Of Legends",
  description: "리그 오브 레전드 앱에 오신 것을 환영합니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-white py-4 fixed top-0 w-full z-10 shadow-md">
          <nav className="container mx-auto flex items-center justify-between px-6">
            <h1 className="text-2xl font-bold tracking-wide">
              <Link href={"/"}>
                <span className="hover:text-gray-500 transition-colors duration-300">
                  LOL
                </span>
              </Link>
            </h1>

            <ul className="flex gap-8 text-lg">
              <li>
                <Link
                  href={"/champions"}
                  className="hover:text-gray-500 transition-colors duration-300"
                >
                  챔피언 목록
                </Link>
              </li>
              <li>
                <Link
                  href={"/items"}
                  className="hover:text-gray-500 transition-colors duration-300"
                >
                  아이템 목록
                </Link>
              </li>
              <li>
                <Link
                  href={"/rotation"}
                  className="hover:text-gray-500 transition-colors duration-300"
                >
                  Free Champions
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
