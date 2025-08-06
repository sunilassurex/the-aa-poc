'use client';

import React from 'react';

type Props = {
  heading: string;
  description: string;
  textAlign?: string; // e.g., 'text-left', 'text-center'
};

const BreakdownCoverComparison = ({ heading, description, textAlign = 'text-left' }: Props) => {
  const data = [
    {
      feature: 'Cover in any vehicle',
      personal: true,
      vehicle: false,
    },
    {
      feature: 'Cover as a passenger in someone else’s car',
      personal: true,
      vehicle: false,
    },
    {
      feature: 'Cover for your car if someone else is driving and you’re not a passenger',
      personal: false,
      vehicle: true,
    },
    {
      feature: 'Unlimited call-outs, as long as it’s not a recurring problem with your vehicle',
      personal: true,
      vehicle: true,
    },
    {
      feature: '24/7 Roadside Assistance if you’re more than 1/4 mile from home',
      personal: true,
      vehicle: true,
    },
    {
      feature: 'Ability to add more people to your policy',
      personal: true,
      vehicle: false,
    },
  ];

  const getIcon = (value: boolean) =>
    value ? (
      <span className="text-[#06757f] !font-bold">✓</span>
    ) : (
      <span className="text-[#da0076] !font-bold ">✗</span>
    );

  return (
    <section className=" mx-auto py-[40px]">
      <div className="max-w-[1152px] mx-auto px-[16px] ">
        <h2
          className={`!text-[32px] !leading-[40px] !font-normal ${textAlign} !mb-[16px]`}
          style={{
            fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif',
          }}
        >
          {heading}
        </h2>

        <p
          className={`!text-[16px] !leading-[24px] !font-newtransport !font-normal mx-auto !mb-[24px] text-[#1d1d1d] ${textAlign}`}
        >
          {description}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border !border-[#c7c8ca] text-left">
            <thead>
              <tr className="bg-[#dcddde]">
                <th className="py-[8px] px-[16px] text-center  border !border-[#c7c8ca] align-text-top !font-newtransport !font-bold text-[16px] leading-[24px]">
                  What’s included?
                </th>
                <th className="py-[8px] px-[16px] text-center  border !border-[#c7c8ca] align-text-top font-bold !text-[16px] leading-[24px]">
                  Personal breakdown cover(includes family breakdown cover)
                </th>
                <th className="py-[8px] px-[16px] text-center  border !border-[#c7c8ca] align-text-top font-semibold !text-[16px]">
                  Vehicle cover
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border !border-[#c7c8ca]">
                  <td className="py-[8px] px-[16px] text-[14px] leading-[20px]   border !border-[#c7c8ca] align-text-top">
                    {row.feature}
                  </td>
                  <td className="py-[8px] px-[16px] !text-[14px] leading-[20px] text-center  border !border-[#c7c8ca] align-text-top">
                    {getIcon(row.personal)}
                  </td>
                  <td className="py-[8px] px-[16px] !text-[14px] leading-[20px] text-center  border !border-[#c7c8ca] align-text-top">
                    {getIcon(row.vehicle)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-start mt-9.5">
          <div className="relative inline-block group rounded-[4px] overflow-hidden">
            <button className="bg-[#ffd300] !text-[#1d1d1d] font-bold !rounded-[4px] px-[34px] !text-[18px] !leading-[53px] tracking-[.054px] w-full h-full">
              Help me choose
            </button>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:!opacity-20 transition-opacity duration-300 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakdownCoverComparison;
