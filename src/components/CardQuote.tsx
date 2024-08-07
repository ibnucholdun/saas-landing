import Image from "next/image";
import React from "react";

type CardQuoteProps = {
  quote: string;
  author: string;
};

const CardQuote: React.FC<CardQuoteProps> = ({ quote, author }) => {
  return (
    <div className="lg:w-[600px] flex flex-col lg:gap-8 gap-4 text-left mb-8">
      <Image
        src="/decors/quote.svg"
        width={50}
        height={50}
        alt="Quote icon"
        className="w-9 h-9 lg:w-[50px] lg:h-[50px]"
      />
      <p className="lg:text-2xl text-lg font-bold">&quot;{quote}&quot;</p>
      <p className="lg:text-lg text-base font-semibold">{author}</p>
    </div>
  );
};

export default CardQuote;
