import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "らむらのサイトへようこそ",
  description: "このサイトはクッションページです。",
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left">
          らむらのサイトへようこそ
        </h1>
        <p>
          このサイトはクッションページです。
          <br />
          下記リンクから本サイトへアクセスしてください。
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="./arane"
            target="_blank"
            rel="noopener noreferrer"
          >
            荒音の夜
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="./gesshoku"
            target="_blank"
            rel="noopener noreferrer"
          >
            月蝕 公式サイト
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
