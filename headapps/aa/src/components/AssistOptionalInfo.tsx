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

export default function AssistOptionalInfo({
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
        <div className="md:pt-[49px] md:pb-[0px] pt-[30px] pl-[6px] pr-[6px] md:pl-[0px] md:pr-[42px] text-gray-800">
          <h2 className="!text-[24px] !leading-[28px] !tracking-[-0.5px] !font-newtransport !font-bold md:!text-[24px] !mb-[8px] md:!mb-[16px]">
            {heading}
          </h2>

          <span style={{fontFamily:"Arial,'Helvetica Neue',Helvetica,Verdana,sans-serif"}} className="mb-10 text-black text-[16px] xl:text-[16px] leading-[2.2rem] xl:leading-[1.5]">
            {description}
          </span>

          <ul className="pl-0">
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
                  <p className="font-[Arial,Helvetica,Verdana,sans-serif] !text-[1.6rem] !leading-[24px] !tracking-[.25px] !m-[0px]">
                    {productFeatureIntro}
                  </p>
                  <p className="!mb-[0px]">&nbsp;</p>
                </>
              )}

              {productFeatureHeading && (
                <h2 className="md:mb-[16px] !text-[24px] !leading-[28px] !tracking-[-.5px] !font-bold !text-[#2b2d32] !mb-[8px]">
                  {productFeatureHeading}
                </h2>
              )}

              <ul>
                <ul>
                  {productFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-[8px] !text-[16px] pt-[16px] !leading-[1.25] !tracking-normal"
                    >
                      <div className="w-[21px] min-w-[21px] h-[21px] bg-[url('/white-tick.png')] bg-no-repeat bg-contain" />

                      <div>
                        <p className="md:!m-[0px]">
                          <strong className="!font-bold md:!text-[16px] md:!leading-[24px] md:!tracking-[.25px] font-[Arial,Helvetica,Verdana,sans-serif]">
                            {feature.title}
                          </strong>
                        </p>

                        {feature.description.map((descObj, i) => (
                          <div
                            key={i}
                            className="!text-[16px] !leading-[24px] !tracking-[.25px] m-0 font-[Arial,Helvetica,Verdana,sans-serif]"
                          >
                            {descObj.title ? (
                              <p className={i !== feature.description.length - 1 ? '' : '!mb-0'}>
                                <strong className="!font-bold">
                                  {descObj.title}
                                  <br />
                                </strong>
                                {descObj.description}
                                <br />
                              </p>
                            ) : (
                              <>{descObj.description}</>
                            )}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
