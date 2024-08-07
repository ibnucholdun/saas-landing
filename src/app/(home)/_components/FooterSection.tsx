import React from "react";
import FooterList from "./FooterList";

type Props = {};

const FooterSection: React.FC<Props> = (props: Props) => {
  const footerData = [
    {
      title: "Company",
      items: ["About us", "Contact us", "Careers", "Press"],
    },
    {
      title: "Product",
      items: ["Features", "Pricing", "News", "Help desk", "Support"],
    },
    {
      title: "Services",
      items: [
        "Digital Marketing",
        "Content Writing",
        "SEO for Business",
        "UI Design",
      ],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms & Conditions", "Return Policy"],
    },
    {
      title: "Contact us",
      items: ["Facebook", "Instagram", "Twitter"],
    },
  ];

  return (
    <footer className="bg-blackTwo text-white w-full">
      <div className="w-4/5 mx-auto lg:py-36 py-16">
        <div className="flex justify-between items-start flex-col lg:flex-row">
          {footerData.map((column, index) => (
            <FooterList key={index} title={column.title} items={column.items} />
          ))}
        </div>
        <hr className="border-1 border-slate-600 lg:mt-36 mt-16 lg:mb-10 mb-5" />
        <p className="text-slate-400 text-center lg:text-base text-sm">
          © Copyright 2024. Ibnu Choldun
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
