import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <h1 className="text-4xl font-bold">Contacts</h1>
          <p>お問い合わせはこちらからお願いします。</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">サイトに関するお問い合わせ</h2>
          <p>サイトに関するお問い合わせは、以下の連絡先までご連絡ください。</p>
          <ul>
            <li>
              Email:
              <Link
                href="mailto:webmaster@uniproject.jp"
                className="text-blue-500 underline dark:text-blue-300"
              >
                webmaster@uniproject.jp
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold">
            サイト以外・音源に関するお問い合わせ
          </h2>
          <p>
            サイト以外・音源に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <ul>
            <li>
              Email:
              <Link
                href="mailto:utaunora@uniproject.jp"
                className="text-blue-500 underline dark:text-blue-300"
              >
                utaunora@uniproject.jp
              </Link>
            </li>
            <li>
              Twitter:
              <Link
                href="https://twitter.com/ramura0708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline dark:text-blue-300"
              >
                @ramura0708
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
