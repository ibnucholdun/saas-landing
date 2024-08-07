import React from "react";

type FooterListProps = {
  title: string;
  items: string[];
};

const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 mt-8">
      <h5 className="text-slate-400">{title}</h5>
      <ul className="flex flex-col lg:gap-4 gap-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
