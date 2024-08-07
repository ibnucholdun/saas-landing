import Link from "next/link";
import React from "react";
import { Rubik } from "next/font/google";
import MobileNavbar from "./MobileNavbar";

type Props = {};

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

const Header = (props: Props) => {
  return (
    <header className="py-7 flex justify-between">
      <h1 className={`text-2xl font-bold ${rubik.className}`}>Brainware.io</h1>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-10">
          {["Demos", "Pages", "Support", "Contact"].map((item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          ))}
          <li>
            <button className="bg-purpleTwo px-5 py-3 rounded-xl">
              Start a free trial
            </button>
          </li>
        </ul>
      </nav>
      <MobileNavbar />
    </header>
  );
};

export default Header;
