import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "らむらのサイトへようこそ",
  description: "このサイトはクッションページです。",
};

const LINKS = [
  {
    href: "./arane",
    label: "荒音の夜",
    subtitle: "UTAU音源「現音令彼」",
  },
  {
    href: "./gesshoku",
    label: "月蝕 公式サイト",
    subtitle: "UTAU音源「月蝕」",
  },
  {
    href: "https://ramuralicense.wixsite.com/character",
    label: "幻月の記",
    subtitle: "「ミィル・パラノイド」「バッショク」",
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left">
          らむらのサイトへようこそ
        </h1>
        <p>
          このサイトはクッションページです。
          <br />
          下記リンクから本サイトへアクセスしてください。
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 dark:border-white/15 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-transparent flex flex-col justify-center text-center w-full sm:w-64 min-h-16 px-6 py-4"
            >
              <span className="font-semibold text-base">{link.label}</span>
              <span className="text-xs text-gray-500 mt-1">
                {link.subtitle}
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
