import Image from "next/image";
import React from "react";

type Props = {};

const features = [
  {
    icon: "/icons/layer.svg",
    alt: "layers",
    title: "Organize your campaigns",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Building your next landing page.",
  },
  {
    icon: "/icons/a-sync.svg",
    alt: "async",
    title: "Manage Customers",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Building your next landing page.",
  },
  {
    icon: "/icons/chart.svg",
    alt: "chart",
    title: "Track progress fast",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Building your next landing page.",
  },
];

const FeatureSection = (props: Props) => {
  return (
    <section className="w-4/5 mx-auto lg:my-40 my-16 lg:flex items-center justify-between">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex justify-between lg:w-1/4 gap-x-5 items-start mt-4"
        >
          <Image
            src={feature.icon}
            alt={feature.alt}
            width={50}
            height={50}
            className="pt-1"
          />
          <div className="flex flex-col lg:gap-y-5 gap-y-2">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-base font-light">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
