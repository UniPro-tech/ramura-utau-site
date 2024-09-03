import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License - 荒音の夜 - UTAU配布サイト",
  description:
    "現音令彼(あらねしむか)の利用規約です。使用する際はご一読ください。",
  openGraph: {
    title: 'License - 荒音の夜 - UTAU配布サイト',
    description: '現音令彼(あらねしむか)の利用規約です。使用する際はご一読ください。',
    url: 'https://arane.uniproject-tech.net/license',
    siteName: '荒音の夜 - 現音令彼(あらねしむか)公式サイト',
    images: [
      {
        url: 'https://arane.uniproject-tech.net/images/title.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f1f1f] p-10 text-white leading-6">
      <h1 className="text-5xl pb-3">利用規約</h1>
      <p>現音令彼の利用について</p>
      <h2 className="text-3xl py-2">1. 基本的な利用に関する事項</h2>
      <div className="leading-6">
        無償利用、同人利用を可能とします。
        <br />
        商用利用、企業利用に関しては別途ご連絡ください。
      </div>
      <h2 className="text-3xl py-2">2. 禁止事項</h2>
      <div className="leading-6">
        以下の事項に関しては禁止とさせていただきます。
        <ul className="list-disc pl-10">
          <li>音声のR18作品への利用※1</li>
          <li>政治や宗教に関する事全般※2</li>
          <li>公序良俗に反する利用</li>
          <li>イラスト素材や音声素材のAI学習</li>
          <li>イラスト素材等のトレス行為※3</li>
          <li>音源名(現音令彼)を表記せずに私用する事※4 </li>
        </ul>
      </div>
      <h2 className="text-3xl py-2">3. 要連絡事項</h2>
      これらの事項に関しては、<Link href="/contact">お問い合わせ</Link>
      よりご連絡ください。
      <ul>
        <li>商用利用企業利用</li>
        <li>そのままの形での再配布</li>
      </ul>
      <h2 className="text-3xl py-2">附則</h2>
      ※1
      音声を含まないものをR18作品に使用する事は可能です。ゾーニングやワンクッションおくなりしてください。
      <br />
      ※2 季節のイベント等、宗教的な意味合いが含まれないものを除きます。
      <br />
      ※3
      配布しているpmx/vrmモデルにポーズを取らせてトレスは可能です。立ち絵やアイコン画像そのままトレスは禁止です。
      <br />
      ※4 利きUTAUなどの特別なものは除きます 可能な事 ・原音設定を変更して再配布
      <ul className="list-disc pl-10">
        <li>
          vrmモデルの再配布、及び改変しての再配布(私「らむら」の名前を必ず入れてください)
        </li>
        <li>
          その他禁止事項に記載していない行為 表現に関して 何も制限致しません
        </li>
      </ul>
      規約に反さない範囲で殺すも生かすも煮詰めるもご自由にどうぞ。
      <h2 className="text-3xl pt-2 pb-1">定義/免責</h2>
      <h3 className="text-2xl py-1">定義</h3>
      音源や音声素材は、「らむら」が「現音令彼」の配布において提供される音声データを指します
      イラスト素材は「現音令彼」の配布データに含まれるアイコン画像や立ち絵を指します
      <h3 className="text-2xl py-1">契約の終了</h3>
      契約の終了に関して、利用者が利用規約に反している場合は、自動的に承諾を取り消しさせていただくことがございます。
      <br />
      また、利用規約違反の利用者に対しては、損害賠償や法的処置を取らせていただく場合もございます。
      <br />
      なお、配布動画等を通じて承諾の終了を通知することもございますので、ご了承ください。
      <h3 className="text-2xl py-1">免責事項</h3>
      利用者様が本配布音源、および本キャラクターを利用して発生した損害は、らむらに過失がある場合を除き、いかなる損害に対して責任を負いません。
      <br />
      また、私らむらが不適当であると判断した場合に音源やキャラクターの使用/公開中止を促す場合もあります。
      <br />
      そして、本利用規約のいずれかの条項が違法、無効または執行不可能と司法当局に判断されても、本利用規約のその他の条項または規定の適法性、有効性または執行可能性には何ら影響を及ぼさないものとします。
      <br />
      こちらの規約は予告なく変更される場合があります。
      その際、当サイトで告知し、利用者は変更後の規約に同意したものとみなします。
    </main>
  );
}
