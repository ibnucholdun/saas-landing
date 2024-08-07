import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const MobileNavbar = (props: Props) => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="flex flex-col gap-y-3 my-3">
            {["Demos", "Pages", "Support", "Contact"].map((item) => (
              <li key={item} className="mx-3 text-sm">
                <Link href="#">{item}</Link>
              </li>
            ))}
            <li>
              <button className="bg-purpleTwo lg:px-5 lg:py-3 px-3 py-1 text-xs rounded-xl text-white">
                Start a free trial
              </button>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;
