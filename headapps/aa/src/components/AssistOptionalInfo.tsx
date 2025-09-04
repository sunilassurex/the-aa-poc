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
  variant?: 'default' | 'breakdown';
  subheading?: string;
  listIntro?: string;
  helpButtonText?: string;
  backgroundColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  imageSrc?: string;
};

export default function AssistOptionalInfo({
  heading,
  description,
  subheading,
  listIntro,
  items,
  productFeatureIntro,
  productFeatureHeading,
  productFeatures,
  variant = 'default',
  helpButtonText,
  backgroundColor,
  buttonBgColor,
  buttonTextColor,
  imageSrc,
}: AccidentAssistInfoProps) {
  return (
    <div
      className={`md:py-[1.5rem] ${backgroundColor} py-[1rem] ${
        variant === 'breakdown' ? 'breakdown-styling' : ''
      }`}
    >
      <div className="xl:max-w-[1160px] px-[1rem] md:max-w-[74.6rem] mx-auto md:px-[1.1rem] xl:px-[2rem]">
        <div className={`${imageSrc ? 'flex flex-col md:flex-row items-start ' : ''}`}>
          <div className={`flex-1`}>
            <div className="md:pt-[49px] md:pb-[0px] pt-[30px] pl-[6px] pr-[6px] md:pl-[0px] md:pr-[42px] text-gray-800 div2">
              <h2
                className={` ${
                  variant === 'breakdown'
                    ? '!text-[32px] !font-normal !leading-[40px]'
                    : '!text-[24px] !leading-[28px] !tracking-[-0.5px] !font-newtransport !font-bold  !mb-[8px] md:!mb-[16px]'
                }`}
              >
                {heading}
              </h2>
              {subheading && (
                <h3 className="!text-[20px] !leading-[30px]  font-newtransport !font-bold  text-gray-700 mb-[16px]">
                  {subheading}
                </h3>
              )}

              <span className="mb-10 text-black text-[16px] font-newtransport !font-normal xl:text-[16px] leading-[2.2rem] xl:leading-[1.5]">
                {description}
              </span>

              {listIntro && (
                <>
                  <br />
                  <br />
                  <p className="!text-[16px] !mb-[16px]  !mt-2 !leading-[24px]">{listIntro}</p>
                </>
              )}
              <ul className="pl-0">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`relative my-[15px] pl-[16px] first:mt-[24px] before:content-[''] before:absolute before:left-0  before:w-[4px] before:top-0 before:bottom-0 before:bg-[#ffd300] before:rounded-full`}
                  >
                    <p className="text-[16px] tracking-[0.25px] !leading-[1.28] md:!leading-[1.30] m-0">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
              {helpButtonText && (
                <div className="flex justify-start mt-[16px]">
                  <div className="relative inline-block group rounded-[4px] overflow-hidden">
                    <button
                      className={`${buttonBgColor} ${buttonTextColor} font-bold !rounded-[4px] px-[33px] !text-[18px] !leading-[51.5px] tracking-[.054px] w-full h-full`}
                    >
                      {helpButtonText}
                    </button>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:!opacity-20 transition-opacity duration-300 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
              )}
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
                                  <p
                                    className={i !== feature.description.length - 1 ? '' : '!mb-0'}
                                  >
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
          {imageSrc && (
              <div className="flex-shrink-0  flex justify-center md:justify-end">
      <img
        src={imageSrc}
        alt="Assist Info"
        className="xl:w-[457px] md:w-[362px] md:h-[275px] xl:h-auto object-contain"
      />
    </div>
            )}
        </div>
      </div>
    </div>
  );
}