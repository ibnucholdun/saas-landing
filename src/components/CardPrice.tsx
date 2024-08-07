import { ArrowRight, Check, X } from "lucide-react";
import React from "react";

type CardPriceProps = {
  title: string;
  price: number;
  features: { text: string; available: boolean }[];
};

const CardPrice: React.FC<CardPriceProps> = ({ title, price, features }) => {
  return (
    <div className="lg:w-[400px] w-[300px] bg-white rounded-3xl lg:p-8 mb-8 p-4 ">
      <h4 className="font-bold lg:text-xl text-lg text-purpleTwo uppercase">
        {title}
      </h4>
      <h5 className="font-bold lg:mt-10 mt-5">
        $<span className="lg:text-5xl text-4xl">{price}</span> / month
      </h5>
      <p className="text-slate-400 lg:text-sm text-xs lg:mt-5 lg:mb-8 mt-3 mb-4">
        billed monthly
      </p>
      <ul className="flex flex-col gap-2 lg:gap-4 justify-center items-center">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 lg:text-base text-sm ">
            {feature.available ? (
              <Check className="text-greenTwo" />
            ) : (
              <X className="text-red-500" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>
      <button
        className={`font-bold lg:text-base text-sm lg:py-3 lg:px-8 py-2 px-4 rounded-2xl mt-8 flex lg:gap-7 gap-4 mx-auto lg:my-5 my-3 ${
          title === "Standard"
            ? "bg-purpleTwo text-white"
            : "bg-purpleTwo bg-opacity-30 text-purpleTwo"
        }`}
      >
        Start free trial <ArrowRight />
      </button>
      <p className="lg:text-sm text-xs text-slate-400">
        No credit card required
      </p>
    </div>
  );
};

export default CardPrice;
