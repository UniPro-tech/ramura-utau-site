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
        url: 'https://arane.uniproject-tech.net/images/title.webp',
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
      本規約は、現音令彼(以下、「本サービス」といいます。)を利用されるすべての方（以下、
      「利用者」といいます。）に対して適用されます。本サービスの利用を開始された時点で、
      利用者は本規約に同意したものとみなされます。
      <h2 className="text-3xl py-2">第１条（定義）</h2>
      <div className="leading-6">
        本規約では、以下の用語を使用します。
        １．「作品」とは、本サービスを使用して作成されたすべてのコンテンツを指します。<br />
        ２．「投稿」とは、利用者が作品を SNS やウェブサイト、その他のオンラインプラットフ
        ォームにアップロードまたは公開する行為を指します。<br />
        ３．「本コンテンツ」とは、本サービスに関連して提供される全てのデータ、テキスト、画
        像、映像、音声、プログラム等を指します。<br />
        ４．「同人活動」とは、個人または法人が介入していない任意団体や個人事業主が行う非商
        業的な創作活動を指します。<br />
      </div>
      <h2 className="text-3xl py-2">第２条（利用条件）</h2>
      <div className="leading-6">
        １．本サービスをご利用になる際には、本規約への同意が必要です。<br />
        ２．未成年者が本サービスを利用する場合、保護者または法定代理人の同意が必要です。<br />
        未成年者が本サービスを利用した場合、保護者または法定代理人が本規約に同意したもの
        とみなされます。<br />
        ３．利用者は、自己の責任において本サービスを利用しなければなりません。<br />
      </div>
      <h2 className="text-3xl py-2">第３条（禁止事項）</h2><div className="leading-6">
        本サービスのご利用にあたって、以下の行為を行ってはいけません。
        １．公序良俗に反する作品の制作または投稿<br />
        ２．他人の知的財産権、プライバシー権、名誉権、その他の権利を侵害する行為<br />
        ３．虚偽の情報を提供する行為<br />
        ４．政治的または宗教的な意味合いを含む作品の製作（一般的な民俗行事においてはこの
        限りではない）<br />
        ５．本サービスを AI 等の機械学習に本サービスを用いる行為<br />
        ６．本サービスを商用的な活動や法人の活動に利用すること<br />
        ７．本サービスを使用して、違法な行為や犯罪行為に関与すること<br />
        ８．本サービスの一部または全部を複製、天才、改変、リバースエンジニアリング、逆コ
        ンパイル、逆アセンブルする行為<br />
        ９．本サービスを不正に利用する目的で AI やその他の技術を使用する行為<br />
        10. 法令または本規約に違反する行為、らむらが不適切と判断する行為</div>
      <h2 className="text-3xl py-2">第４条（同人活動に関する特例）</h2><div className="leading-6">
        １．利用者は、本サービスを利用して制作した作品を同人活動の一環として公開・頒布す
        ることができます。<br />
        ２．同人活動において、作品の制作や配布に必要な最低限の費用を補うため、作品の有料
        頒布を行うことが出来ます。ただし、以下の条件を遵守するものとします。<br />
        １．利用者は、商業的利用が最低限の運営費用を補う目的であることを確保すること。<br />
        ２．現音の名称やロゴ、その他の識別情報を正しく明記すること。<br />
        ３．他の利用者や第三者の権利を侵害しないこと。<br />
        ４．公序良俗に反しないこと。<br />
        ５．利用者は、法令および本規約を遵守し、同人活動を行うこと。<br />
        ２．らむらは、同人活動に関連して生じた紛争について、いかなる責任も負いません。利用
        者は、自己の責任でこれを処理し、らむらに損害を与えないものとします。</div>
      <h2 className="text-3xl py-2">第５条（権利関係）</h2><div className="leading-6">
        １．本サービスおよび本コンテンツに関連する著作権、商標権その他の知的財産権は、全
        てらむらまたは正当な権利者に帰属します。<br />
        ２．利用者が本サービスを利用して作成した作品の著作権は、原則として利用者または既
        存の権利者に帰属します。ただし、利用者は、らむらに対し、当該作品を本サービスの運
        営・改善、宣伝・広報活動のために無償で利用する権利（複製、頒布、公衆送信、翻案等
        を含む）を許諾するものとします。<br />
        ３．利用者は、前項に基づくらむらの著作権の利用に関して、著作者人格権を行使しないも
        のとします。</div>
      <h2 className="text-3xl py-2">第６条（投稿にあたって）</h2><div className="leading-6">
        １．利用者は、作成した作品を投稿する際に、らむらおよび現音令彼を概要欄や適切な箇所に明
        記しなければなりません。<br />
        ２．投稿作品に関する第三者からのクレームや紛争については、利用者が自己の責任と費
        用で対応するものとし、らむらに一切の迷惑や損害を与えてはなりません。</div>
      <h2 className="text-3xl py-2">第７条（利用制限）</h2><div className="leading-6">
        １．らむらは、利用者が本規約に違反した場合、事前の通知なく、当該利用者の利用を一時
        的または無期限に停止し、ならびに将来の利用を拒否する権利を有します。<br />
        ２．利用者の違反行為によりらむらまたは第三者に損害が発生した場合、利用者はその一切
        の損害を賠償する責任を負います。</div>
      <h2 className="text-3xl py-2">第８条（免責事項）</h2><div className="leading-6">
        １．らむらは、本サービスが常に正常に稼働することを保証するものではなく、提供される
        コンテンツやサービスの完全性、正確性、信頼性、適法性等について、一切保証しませ
        ん。<br />
        ２．らむらは、本サービスの利用により利用者に生じた損害（データの消失、システム障
        害、その他の不利益を含む）について、一切責任を負いません。<br />
        ３．らむらは、不可抗力（天災地変、戦争、テロ等）により本サービスの提供が困難になっ
        た場合、責任を負いません。</div>
      <h2 className="text-3xl py-2">第 9 条（規約の変更）</h2><div className="leading-6">
        らむらは、本規約を随時変更できるものとし、変更後の規約は、らむらが本サービス上に掲示
        した時点から効力を生じるものとします。利用者は、変更後の規約に同意した上で本サー
        ビスを継続利用するものとみなされます。</div>
      <h2 className="text-3xl py-2">第 10 条（準拠法および管轄）</h2><div className="leading-6">
        １．本規約の成立、効力、解釈および履行に関しては、日本法を準拠法とします。<br />
        ２．本サービスに関連して生じた一切の紛争については、東京地方裁判所を第一審の専属
        的合意管轄裁判所とします。</div>
      <h2 className="text-3xl py-2">第 11 条（分離可能性）</h2 ><div className="leading-6">
        本規約のいずれかの条項が違法、無効または執行不能と判断された場合でも、残りの条項
        は引き続き有効に存続します。</div>
    </main>
  );
}
