import CardPrice from "@/components/CardPrice";
import CardQuote from "@/components/CardQuote";
import { ToggleLeft } from "lucide-react";
import React from "react";

type Props = {};

const PriceSection = (props: Props) => {
  const plans = [
    {
      title: "Starter",
      price: 19,
      features: [
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: false },
        { text: "Lorem ipsum, dolor sit amet", available: false },
      ],
    },
    {
      title: "Standard",
      price: 49,
      features: [
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: false },
      ],
    },
    {
      title: "Premium",
      price: 99,
      features: [
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
        { text: "Lorem ipsum, dolor sit amet", available: true },
      ],
    },
  ];

  return (
    <section className="bg-grayTwo p-1">
      <div className="w-4/5 mx-auto lg:my-24 my-12 text-center">
        <h2 className="font-bold lg:text-4xl lg:leading-[60px] text-2xl">
          Pricing & Plans
        </h2>
        <p className="lg:text-base text-sm font-light lg:mt-8 lg:mb-16 lg:w-2/5 mt-4 mb-8 mx-auto">
          With lots of unique blocks, you can easily build a page without
          coding. Building your next landing page.
        </p>
        <div className="flex justify-center items-center lg:gap-x-5 lg:mb-16 gap-x-2 mb-8 lg:text-base text-sm">
          Monthly{" "}
          <ToggleLeft
            fill="#979797"
            color="white"
            className="lg:w-16 lg:h-16 w-8 h-8"
          />
          Yearly{" "}
          <span className="text-purpleTwo rounded-full bg-purpleTwo bg-opacity-10 px-3 py-1">
            Save 25%
          </span>
        </div>

        <div className="flex items-center justify-between flex-col lg:flex-row gap-x-10">
          {plans.map((plan, index) => (
            <CardPrice
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>

        <div className="flex justify-between items-center lg:gap-x-10 flex-col lg:flex-row lg:mt-36 mt-16">
          <CardQuote
            quote="OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."
            author="Diego Morata"
          />
          <CardQuote
            quote="Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users."
            author="Franklin Hicks"
          />
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
