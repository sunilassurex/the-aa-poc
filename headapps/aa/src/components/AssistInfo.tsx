/* eslint-disable prettier/prettier */
import React from 'react';

type ListItem = {
  text: string;
  linkText?: string;
  linkHref?: string;
};

type AccidentAssistInfoProps = {
  heading: string;
  description: string;
  items: ListItem[];
};

export default function AccidentAssistInfo({
  heading,
  description,
  items,
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
                  {item.linkText && item.linkHref && (
                    <>
                      {' '}
                      <a
                        href={item.linkHref}
                        className="!text-[#07818c] text-[15.7px] font-newtransport font-bold no-underline hover:underline"
                      >
                        {item.linkText}
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
