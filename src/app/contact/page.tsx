import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - 荒音の夜 - UTAU配布サイト",
  description:
    "音源、サイトに関するお問い合わせ先です。",
  openGraph: {
    title: 'Contact - 荒音の夜 - UTAU配布サイト',
    description: '音源、サイトに関するお問い合わせ先です。',
    url: 'https://arane.uniproject.jp/contact',
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
    canonical: "https://arane.uniproject.jp/contact",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left text-white p-20 bg-[#1f1f1f]">
      <h1 className="text-5xl pb-3">お問い合わせ先</h1>
      <h2 className="text-2xl py-2.5">音源に関するお問い合わせ</h2>
      <p className="py-3">
        お問い合わせは、TwitterのDMへお願いします。
        <br />
        Twitter: <a href="https://twitter.com/@ramura0708">@ramura0708</a>
      </p>
      <h2 className="text-2xl py-2.5">サイトに関するお問い合わせ</h2>
      <p className="py-3">
        お問い合わせは、下記メールアドレスまでお願いします。[at]を@に変えてください。
        <br />
        E-mail: webmaster[at]uniproject.jp
      </p>
    </main>
  );
}
