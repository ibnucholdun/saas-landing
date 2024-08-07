import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const MarketingThreeSection = (props: Props) => {
  return (
    <section className="w-4/5 mx-auto lg:my-44 my-16 flex items-center justify-between gap-x-16 flex-col lg:flex-row">
      <div className="lg:w-1/2 order-2 lg:order-1 mt-8">
        <Image
          src="/images/image4.png"
          alt="Customer satisfaction services"
          width={1000}
          height={1000}
          className="lg:w-5/6 object-cover shadow-2xl rounded-3xl mx-auto"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col lg:gap-10 gap-5 order-1 lg:order-2">
        <h3 className="font-bold lg:text-4xl lg:leading-[60px] text-2xl">
          Make your customers happy by giving services.
        </h3>
        <p className="lg:text-lg font-light text-base">
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

export default MarketingThreeSection;
