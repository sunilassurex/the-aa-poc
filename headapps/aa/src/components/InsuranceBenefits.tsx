import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
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
  richText?: Field<string>;
};

export default function InsuranceBenefits({ heading, facts, richText }: PageDetailProps) {
  return (
    <div className="row">
      <div className="wrapper md:!mx-auto !px-[1rem]">
        <div className="bg-white">
          <div className="wrapper lg:mx-auto !p-[0px] md:!px-[2rem] lg:!pt-[3.3rem] lg:pb-[3.8rem] !pt-[2rem] !pr-[4rem] !pb-[0.5rm] !pl-[2.3rem] md:!pt-[1.9rem] md:!pb-[2.1rem]">
            <h2
              className="lg:!mb-[3.3rem] lg:!text-[2.4rem] lg:!leading-[3.2rem] lg:!tracking-[-.025em] font-newTransport !font-bold md:!text-center
            !text-[2.1rem] !tracking-[-.005em] !leading-[2.5rem] !mb-[2rem] !text-left md:!text-[1.9rem]"
            >
              {heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:!gap-8 md:!gap-0 text-left md:text-center">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className={`flex items-start justify-center text-left md:text-left px-2 lg:!pr-[2.8rem] lg:!pl-[5.4rem]  ${
                    index === 0 ? 'md:pr-[3rem]' : 'md:pr-0'
                  }`}
                >
                  <div className="flex-shrink-0 mt-[0.4rem] md:mt-[0.2rem] mr-[1.2rem] !pb-[1.4rem] align-top">
                    <img
                      src={fact.icon}
                      alt={fact.alt}
                      title={fact.title}
                      width={25}
                      height={25}
                      className="w-[2.1rem] h-[2.1rem]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold lg:!text-[1.6rem] md:!leading-[2.4rem] !mb-[4px] md:!tracking-[.025em] !text-[1.8rem] md:!text-[1.5rem]">
                      {fact.heading}
                    </h5>
                    <p
                      className="lg:text-[1.5rem] md:leading-[2.4rem] font-regular !text-[1.4rem] !leading-[2.2rem] md:!leading-[1.9rem] "
                      dangerouslySetInnerHTML={{ __html: fact.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {richText?.value && (
            <div className="bg-lightGray row">
              <div className="wrapper !px-[1rem]">
                <RichText field={richText}></RichText>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
