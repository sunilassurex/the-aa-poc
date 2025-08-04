import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: 'helpline.svg',
    prefix: '',
    suffix: '24/7 English-speaking helpline',
  },
  {
    icon: '5-star-rating.svg',
    prefix: '',
    suffix: '5-star rated by Defaqto',
  },
  {
    icon: 'parts-and-garage-cover.svg',
    prefix: '',
    suffix: 'On average customers save around £650 in repair and recovery',
    multiline: true,
  },
];

export default function FeaturesPanel() {
  return (
    <div className="bg-[#f6f6f6] py-[1.5rem] ">
      <div className="xl:max-w-[1160px] md:max-w-[74.6rem] px-[1.1rem] mx-auto xl:px-[2rem]">
        <div className=" grid md:grid-cols-3 md:min-h-[108px] xl:min-h-[88px] xl:gap-6 gap-[8px] my-[17px] text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white  xl:py-[24px] py-[14px] px-[16px] flex items-center   rounded-md"
            >
              <div className="shrink-0 xl:self-start">
                <Image
                  src={feature.icon}
                  alt={`feature-icon-${idx}`}
                  width={40}
                  height={40}
                  className="object-contain "
                />
              </div>

              <p className="text-[16px] text-left m-0 text-black pl-[8px] xl:leading-[20px] leading-[20px]">
                {
                  <>
                    <span className=" font-[16px]">{feature.suffix}</span>
                  </>
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
