/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import Image from 'next/image';
import useResponsiveDevice from 'components/helpers/CustomHelpers/ResponsiveHook'; // Make sure path is correct
import Constant from 'components/helpers/Constant/Constant';

const { MOBILE } = Constant.RESPONSIVE_VARIABLES;

type AppPromoVariant = 'default' | 'centered';

type AppPromoProps = {
  title: string;
  points: string[];
  desktopImageUrl: string;
  mobileImageUrl: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  variant?: AppPromoVariant;
};

const AppPromo: React.FC<AppPromoProps> = ({
  title,
  points,
  desktopImageUrl,
  mobileImageUrl,
  googlePlayUrl,
  appStoreUrl,
}) => {
  const deviceType = useResponsiveDevice(); // 👈 Get device type from the hook

  // Decide which image to use based on device
  const isMobile = deviceType === MOBILE;
  const appImage = isMobile ? mobileImageUrl : desktopImageUrl;
  const imageWidth = isMobile ? 360 : 352;
  const imageHeight = isMobile ? 451 : 414;

  return (
    <section className="bg-[#f3f4f6] py-[1rem] md:py-[1.5rem]">
      <div className="max-w-[1160px] px-[1rem] md:px-[2rem] md:my-[9px] mx-auto">
        <div className="flex flex-col mx-[16px] my-[14px] md:mx-0 md:my-0 md:px-[2.2rem] xl:px-[2rem] md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-auto flex justify-center flex-shrink-0">
            <Image
              src={appImage}
              alt="App Preview"
              width={imageWidth}
              height={imageHeight}
              className="object-contain"
              style={{
                maxWidth: 'none', // prevent shrinking
                height: 'auto', // maintain aspect ratio
              }}
            />
          </div>

          {/* Text */}
          <div className="w-full relative m-auto text-left px-[1.6rem] py-[1.6rem] xl:py-0 xl:px-[3.45rem]">
            <h2
              className="xl:!text-[2rem] md:!leading-[1.9rem] !leading-[2rem] xl:!leading-[2.8rem] !font-newtransport !mb-[2.1rem] md:!mb-[2.2rem] xl:pb-[2.2rem] xl:!mb-0 text-black !text-[1.6rem]"
              style={{ fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif' }}
            >
              {title}
            </h2>
            <ul className="xl:!text-[1.6rem] md:!text-[1.3rem] !pl-[2rem] !-mt-[.6rem] md:!pl-[2.4rem] !tracking-[0.025em] text-[#2b2d32] !mb-[2rem] !list-disc !text-[1.4rem]">
              {points.map((point, index) => (
                <li className="!leading-[2.1rem]" key={index}>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex gap-[23.5px] md:mt-[40px] justify-start flex-wrap">
              <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/android-app.png"
                  alt="Google Play"
                  // Mobile size
                  width={87}
                  height={30}
                  className="xl:!w-[139px] md:!w-[78px] md:!h-[23px] xl:!h-[41px]" // Desktop size overrides
                />
              </a>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ios-app.png"
                  alt="App Store"
                  // Mobile size
                  width={87}
                  height={30}
                  className="xl:!w-[139px] md:!w-[78px] md:!h-[23px] xl:!h-[41px]" // Desktop size overrides
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;

