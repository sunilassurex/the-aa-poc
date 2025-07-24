/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';

type ListItem = {
  text: ReactNode;
};

type FeatureItem = {
  title: string;
  description: {
    title?: string;
    description: string;
  }[];
};

type AccidentAssistInfoProps = {
  heading: string;
  description: string;
  items: ListItem[];
  productFeatureIntro?: string;
  productFeatureHeading?: string;
  productFeatures?: FeatureItem[];
};

export default function AccidentAssistInfo({
  heading,
  description,
  items,
  productFeatureIntro,
  productFeatureHeading,
  productFeatures,
}: AccidentAssistInfoProps) {
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className="xl:max-w-[1160px] px-[1rem] md:max-w-[74.6rem] mx-auto md:px-[1.1rem] xl:px-[2rem]">
        <div className="md:py-[49px] py-[30px] pl-[6px] pr-[6px] md:pl-[20px] md:pr-[42px] xl:pr-[64px] text-gray-800">
          <h2 className="!text-[24px] !leading-[28px] !tracking-[-0.5px] !font-newtransport !font-bold md:!text-[24px] !mb-[8px] md:!mb-[16px]">
            {heading}
          </h2>

          <span className="mb-10 text-black text-[20px] xl:text-[26px] font-newtransport font-light leading-[28px] xl:leading-[32px] tracking-[-0.38px] xl:tracking-[-0.5px] font-custom">
            {description}
          </span>

          <ul className="pl-0 max-w-[704px]">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="relative my-[15px] pl-[16px] first:mt-[24px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] before:h-[20px] before:bg-[#fc0] before:rounded-[1px]"
              >
                <p className="text-[16px] tracking-[0.25px] !leading-[1.28] md:!leading-[1.30] m-0">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {productFeatures && productFeatures.length > 0 && (
          <div className="max-w-[100%]">
            <ul>
              {productFeatureIntro && (
                <>
                  <br />
                  <p className="font-[Arial,Helvetica,Verdana,sans-serif] !text-[1.6rem] !leading-[24px] !tracking-[.25px] !m-[0px]">{productFeatureIntro}</p>
                  <p className="!mb-[0px]">&nbsp;</p>
                </>
              )}

              {productFeatureHeading && <h2 className="md:mb-[16px] !text-[24px] !leading-[28px] !tracking-[-.5px] !font-bold !text-[#2b2d32] !mb-[8px]">{productFeatureHeading}</h2>}

              <ul>
                {productFeatures.map((feature, index) => (
                 <li key={index}
                  className="relative md:!text-[16px] md:pt-[16px] md:pl-[30px] md:!leading-[1.25] !tracking-normal before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-[21px] before:h-[21px] before:bg-[url('/white-tick.png')] before:bg-no-repeat before:bg-[length:21px_21px]"
                  >
                    <p className="md:!m-[0px]"><strong className="!font-bold md:!text-[16px] md:!leading-[24px] md:!tracking-[.25px] !font-[Arial,Helvetica,Verdana,sans-serif]">{feature.title}</strong></p>
                    {feature.description.map((descObj, i) => (
                    <div
                        key={i}
                        className="md:!text-[16px] md:!leading-[24px] md:!tracking-[.25px] !m-0 font-[Arial,Helvetica,Verdana,sans-serif]"
                      >
                      {descObj.title?<p className={i !== feature.description.length - 1 ? "" : '!mb-0'}> <strong className="!font-bold">{descObj.title}<br></br></strong>{descObj.description}<br></br></p> : <>{descObj.description}</> }   
                      </div>
                  ))}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
