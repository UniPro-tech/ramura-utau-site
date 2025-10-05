import fs from "fs";
import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export const dynamic = "force-static";

export default async function LicensePage() {
  const LICENSE_FILE_PATH = "src/docs/legal.md";
  const file = await fs.promises.readFile(LICENSE_FILE_PATH, "utf-8");
  return (
    <main className="flex flex-col justify-center items-center gap-8 px-4 py-8 md:px-8 lg:px-16">
      <section className="markdown max-w-6xl shadow-lg p-8 rounded-xl w-full">
        <MarkdownAsync remarkPlugins={[remarkGfm]}>{file}</MarkdownAsync>
      </section>
      <Link href="/" className="text-blue-500 hover:underline">
        ホームに戻る
      </Link>
    </main>
  );
}
