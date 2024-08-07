import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const MarketingOneSection = (props: Props) => {
  return (
    <section className="w-4/5 mx-auto lg:my-44 flex items-center justify-between gap-x-16 flex-col lg:flex-row">
      <div className="lg:w-1/2 order-2 lg:order-1 mt-8">
        <Image
          src="/images/image2.png"
          alt="Track your progress"
          width={500}
          height={500}
          className="lg:w-5/6 object-cover shadow-2xl rounded-3xl mx-auto"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col lg:gap-10 gap-5 order-1 lg:order-2">
        <h3 className="font-bold lg:text-4xl lg:leading-[60px] lg:w-3/4 text-2xl">
          Track your progress with our advanced site.
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
    </section>
  );
};

export default MarketingOneSection;
