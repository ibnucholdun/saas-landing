import Image from "next/image";
import React from "react";

type Props = {};

const partners = [
  { src: "/images/makeless.png", alt: "makeless" },
  { src: "/images/coworks.png", alt: "coworks" },
  { src: "/images/greener.png", alt: "greener" },
  { src: "/images/askimat.png", alt: "saas" },
  { src: "/images/dorfus.png", alt: "dorfus" },
  { src: "/images/askimat.png", alt: "askimat" },
];

const PartnersSection = (props: Props) => {
  return (
    <section className="w-4/5 mx-auto lg:my-16 my-8 flex justify-between items-center flex-wrap gap-5">
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.src}
          alt={partner.alt}
          width={130}
          height={130}
          className="object-cover lg:w-[130px] w-[100px] "
        />
      ))}
    </section>
  );
};

export default PartnersSection;
