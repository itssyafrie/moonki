import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <div className="font-extrabold text-[24px]">MOONKI</div>

        <ul className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <button className="hidden sm:block md:w-fit bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Contact Us
          </button>
        </div>

        <Image
          src="/Menu (1).svg"
          alt="Menu Button"
          width={40}
          height={40}
          className="lg:hidden"
        />
      </div>
    </nav>
  );
}
