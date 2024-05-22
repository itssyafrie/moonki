import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center">
        <Link href="/" className="font-extrabold text-[#36485C] text-[24px]">
          MOONKI
        </Link>
      </div>

      <div className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="hover:bg-violet-200 px-2 py-2 rounded-md"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src="/Facebook.svg" alt="Facebook" width={40} height={40} />
        <Image src="/Feed.svg" alt="Feed" width={40} height={40} />
        <Image src="/X.svg" alt="Twitter" width={40} height={40} />
      </div>
    </div>
  );
}
