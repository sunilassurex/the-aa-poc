import React from 'react';

type FactItem = {
  icon: string;
  alt: string;
  title: string;
  heading: string;
  description: string;
};

type PageDetailProps = {
  heading: string;
  facts: FactItem[];
};

export default function InsuranceBenefits({ heading, facts }: PageDetailProps) {
  return (
    <div className="row">
      <div className="wrapper">
        <div className="bg-white lg:px-[2rem] lg:!pt-[3.3rem] lg:pb-[3.8rem]">
          <div className="wrapper lg:mx-auto lg:px-[2rem]">
            <h2 className="lg:!mb-[3.3rem] lg:!text-[2.4rem] lg:!leading-[3.2rem] lg:!tracking-[-.025em] font-newTransport !font-bold !text-center">
              {heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-start justify-center text-left md:text-left px-2"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-[0.4rem] md:mt-[0.2rem] mr-[1.2rem]">
                    <img
                      src={fact.icon}
                      alt={fact.alt}
                      title={fact.title}
                      width={25}
                      height={25}
                      className="w-[2.1rem] h-[2.1rem]"
                    />
                  </div>

                  {/* Text block */}
                  <div className="flex flex-col">
                    <h5 className="font-bold text-[1.6rem] leading-[2.4rem] md:!mb-[4px] tracking-[.025em]">
                      {fact.heading}
                    </h5>
                    <p
                      className="text-[1.5rem] leading-[2.4rem] font-regular"
                      dangerouslySetInnerHTML={{ __html: fact.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
