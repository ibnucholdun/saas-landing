import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const MarketingTwoSection = (props: Props) => {
  return (
    <section className="w-4/5 mx-auto lg:my-44 my-16 lg:flex items-center justify-between gap-x-16">
      <div className="lg:w-1/2 flex flex-col lg:gap-10 gap-5">
        <h3 className="font-bold lg:text-4xl lg:leading-[60px] lg:w-3/4 text-2xl">
          Understand your visitors fast. Take quick actions.
        </h3>
        <p className="lg:text-lg font-light lg:leading-10 lg:w-3/4 text-base">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </p>
        <Link
          href="#"
          className="text-purpleTwo font-bold lg:text-xl text-base flex items-center gap-4"
        >
          Start a free trial <ArrowRight />
        </Link>
      </div>
      <div className="lg:w-1/2 relative mt-8">
        <Image
          src="/images/image3.png"
          alt="Main visual"
          width={500}
          height={500}
          className="lg:w-[400px] w-[200px] shadow-2xl rounded-3xl mx-auto relative z-10"
        />
        <Image
          src="/images/image5.png"
          alt="Supporting visual"
          width={500}
          height={500}
          className="absolute top-1/2 right-0 lg:w-[350px] w-[150px] transform -translate-y-1/2 rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default MarketingTwoSection;
