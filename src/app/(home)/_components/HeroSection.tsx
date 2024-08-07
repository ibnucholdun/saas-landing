import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "./Header";

const HeroSection: React.FC = () => (
  <section className="bg-blackTwo text-white w-full">
    <div className="w-4/5 mx-auto px-4">
      <Header />
      <div className="lg:flex items-center gap-10 lg:py-36 py-10">
        <div className="lg:w-1/2 flex flex-col lg:gap-12 gap-6">
          <h2 className="lg:text-6xl font-bold leading-tight text-3xl">
            Get more visitors, <br />
            get more sales.
          </h2>
          <p className="lg:text-xl lg:w-4/5 leading-relaxed text-base">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website in just a few minutes.
          </p>
          <Link
            href="#"
            className="text-greenTwo font-bold lg:text-xl text-base flex items-center gap-4"
          >
            Start a free trial <ArrowRight />
          </Link>
        </div>
        <div className="lg:w-1/2 mt-12">
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={"/images/image1.png"}
                alt="image1"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <Image
              src={"/decors/dots.svg"}
              alt="dots"
              width={200}
              height={200}
              className="absolute lg:-top-10 lg:-right-10 lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] -top-5 -right-5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
