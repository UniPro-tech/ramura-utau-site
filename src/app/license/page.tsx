import fs from "fs";
import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ライセンス - らむらのサイトへようこそ",
  description:
    "らむらの配布するUTAU音源および画像等のライセンスについて記載しております。ご利用の際はこちらのページをご一読の上、ご利用ください。",
};

export const dynamic = "force-static";

export default async function LicensePage() {
  const LICENSE_FILE_PATH = "src/docs/legal.md";
  const file = await fs.promises.readFile(LICENSE_FILE_PATH, "utf-8");
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col justify-center items-center gap-8 px-4 py-8 md:px-8 lg:px-16">
        <section className="markdown max-w-6xl shadow-lg p-8 rounded-xl w-full">
          <MarkdownAsync remarkPlugins={[remarkGfm]}>{file}</MarkdownAsync>
        </section>
      </main>
      <Footer />
    </div>
  );
}
