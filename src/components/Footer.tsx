import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <Link
        href="/"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        rel="noopener noreferrer"
      >
        <FaHome />
        Home
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/license"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        License
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/contacts"
        rel="noopener noreferrer"
      >
        <GrContact />
        Contacts
      </Link>
      {/*<a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>*/}
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://uniproject.jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/uniproject.png"
          alt="Globe icon"
          width={20}
          height={20}
        />
        Powered by Uniproject
      </Link>
    </footer>
  );
}
