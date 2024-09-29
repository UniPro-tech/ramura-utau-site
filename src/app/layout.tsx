import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteTitle } from "../site-config";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteTitle,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId={"G-301PMSJ9EB"} />
      <body className={inter.className}>
        <header className="bg-gray-800 text-white">
          <nav className="flex items-center justify-between p-4">
            <a href="/">
              <h1 className="text-2xl font-bold">
                <Image
                  src="/images/title.webp"
                  alt="荒音の夜(サイトロゴ)"
                  width={100}
                  height={100}
                ></Image>
              </h1>
            </a>
            <ul className="flex right-4 text-right space-x-5">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/download">Download</a>
              </li>
              <li>
                <a href="/license">License</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white text-center">
          <p>
            &copy; Yuito Akatsuki 2024, ramura 2024. Designed by Mitsuru
            Akatsuki
          </p>
        </footer>
      </body>
    </html>
  );
}
