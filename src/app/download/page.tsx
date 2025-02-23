//<a href="download?file=foo.webp">Download</a>
import Image from "next/image";
import { Button } from "@/components/button-legacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - 荒音の夜 - UTAU配布サイト",
  description:
    "UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。",
  openGraph: {
    title: 'Download - 荒音の夜 - UTAU配布サイト',
    description: 'UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。',
    url: 'https://arane.uniproject.jp/download',
    siteName: '荒音の夜 - 現音令彼(あらねしむか)公式サイト',
    images: [
      {
        url: 'https://arane.uniproject.jp/images/title.webp',
        width: 800,
        height: 600,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: "https://arane.uniproject.jp/download",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen p-0 m-0 justify-center items-center bg-custom-gradient">
      <div>
        <h1 className="text-4xl text-white font-bold">Download</h1>
        <p className="text-white">
          ダウンロードする前に、一度、利用規約をお読みください。<br />
          なお、特殊音源に関しては、単体では使用できません。<br />
          特殊音素のエイリアスはEです。
        </p>
        <br />
        <div className="flex flex-wrap">
          <Button<"Link">
            href="/download/dl-endpoint?file=tandokuon.zip"
            className="mt-4 flex-grow"
          >
            単独音
          </Button>
          <Button<"Link">
            href="/download/dl-endpoint?file=renzokuon.zip"
            className="mt-4 flex-grow"
          >
            連続音
          </Button>
          <Button<"Link">
            href="/download/dl-endpoint?file=tougou.zip"
            className="mt-4 flex-grow"
          >
            統合音源
          </Button>
          <Button<"Link">
            href="/download/dl-endpoint?file=tokushu.zip"
            className="mt-4 flex-grow"
          >
            特殊音源
          </Button>
        </div>
      </div>
      <Image
        className="leading-none m-0 p-0"
        src="/images/fullbody.webp"
        alt="logo"
        width={500}
        height={0}
      />
    </main>
  );
}
