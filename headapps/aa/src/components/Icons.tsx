/* eslint-disable prettier/prettier */
'use client';
import { useEffect, useState } from 'react';

type IconItem = {
  height: number;
  width: number;
  mobileHeight?: number;
  mobileWidth?: number;
  img?: string;
  label: string;
  button?: string;
};
type IconsProps = {
  variant?: 'default' | 'horizontal';
};

export default function Icons({ variant = 'default' }: IconsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize(); // initial check
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return;
  }, []);

  const defaultOptions: IconItem[] = [
    {
      img: '/report-danger-breakdown.svg',
      label: 'Report a breakdown',
      height: 0,
      width: 0,
    },
    {
      img: '/login.svg',
      label: 'Log in',
      height: 0,
      width: 0,
    },
    {
      img: '/chat-to-us.svg',
      label: 'Chat to us',
      height: 0,
      width: 0,
    },
  ];

  const horizontalOptions: IconItem[] = [
  {
    img: '/shield.svg',
    label: 'Complimentary 24/7 claims support service',
    width: 40,
    height: 42,
    mobileWidth: 43,
    mobileHeight: 40,
  },
  {
    img: '/quality.png',
    label: 'Quality care for you and your vehicle',
    width: 48,
    height: 49,
    mobileWidth: 48,
    mobileHeight: 49,
  },
  {
    img: '/your-side.webp',
    label: 'Independent service that’s on your side',
    width: 49,
    height: 51,
    mobileWidth: 48,
    mobileHeight: 48,
  },
];

  const options = variant === 'horizontal' ? horizontalOptions : defaultOptions;

  return (
    <div
      className={`flex ${
        variant === 'horizontal'
          ? 'pl-[3px] md:!flex-row !flex-col pt-[30px] pb-[8px] md:py-[17px] md:max-w-[1080px] mx-auto justify-center items-start md:!gap-[16.2px]'
          : 'md:py-[1.5rem] py-[1rem] flex-wrap justify-center items-start md:!gap-7 !gap-9'
      }`}
    >
      {options.map((item, index) => (
        <div
          key={index}
          className={
            variant === 'horizontal'
              ? 'flex xl:!h-[88px] md:!h-[108px] h-auto md:max-w-[349px] items-center mb-[23px] md:mb-0 md:py-[24px] px-[16px]'
              : 'md:!w-65 w-30 flex flex-col items-center text-center'
          }
        >
          {item.img ? (
            <p className={`m-0 ${variant === 'horizontal' ? 'md:pl-2 pl-[3px] md:pt-0 pt-[1px]' : ''}`}>
              <img
                src={item.img}
                alt={item.label}
                className="object-contain mx-auto md:mx-0"
                style={
  variant === 'horizontal'
    ? {
        width: isMobile
          ? `${item.mobileWidth ?? item.width}px`
          : `${item.width}px`,
        height: isMobile
          ? `${item.mobileHeight ?? item.height}px`
          : `${item.height}px`,
      }
    : undefined
}
              />
            </p>
          ) : item.button ? (
            <button
              type="button"
              className="px-4 py-2 bg-[#ffcc00] text-black rounded-md transition"
            >
              {item.button}
            </button>
          ) : null}

          <p
            className={`${
              variant === 'horizontal'
                ? 'md:text-[16px] text-[16px] leading-[20px] md:leading-[20px] !tracking-[.25px] md:!tracking-[0px] md:pl-[8px] pl-6.5 m-0 text-gray-900'
                : 'text-[14px] md:text-[18px] m-0 !font-newtransport !font-normal text-gray-900 break-words leading-[21.6px] mt-[4px]'
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
