'use client';

import { useEffect, useState } from 'react';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';
import Constant from './helpers/Constant/Constant';

interface BeamHeroBannerProps {
  mobileImageUrl: string;
  desktopImageUrl: string;
  headingText: string;
}

export default function BeamHeroBanner({
  mobileImageUrl,
  desktopImageUrl,
  headingText,
}: BeamHeroBannerProps) {
  // This function helps us to check the deviceType and set the lat and lng accordingly
  const device = useResponsiveDevice();
  //set state for DeviceType to avoid hydration issue(will stay same rendering for all devices before useeffect)
  const [deviceType, setDeviceType] = useState<string>(Constant.RESPONSIVE_VARIABLES.DESKTOP);
  useEffect(() => {
    setDeviceType(device);
  }, [device]);

  return (
    <div className="md:!py-[1.5rem] pt-[1rem]">
      <div className="relative w-full !max-w-[192rem] md:!mx-auto">
        <div
          className="relative overflow-hidden md:!mt-[-15px] !mt-[-10px] h-[230px] md:h-[380px] bg-no-repeat bg-cover xl:bg-center md:bg-[68%_top] lg:bg-[81%_top]"
          style={{
            backgroundImage: `url(${
              deviceType == Constant.RESPONSIVE_VARIABLES.MOBILE ? mobileImageUrl : desktopImageUrl
            })`,
          }}
        >
          <div className="md:!pl-[6px] lg:!pl-[16px] relative z-10 h-full w-full  md:!max-w-[74.6rem] lg:!max-w-[116rem] md:!mx-auto lg:!mx-[0px] lg:!my-[0px] xl:!my-[0px] xl:!mx-auto md:!flex md:!flex-wrap md:!items-center justify-center md:justify-start !px-[16px] md:!px-[40px] xl:!pl-[27px] table">
            <div className="xl:!max-w-[636px] md:!max-w-[460px] md:!flex align-middle md:!text-left text-center table-cell max-w-none">
              <h1 className="font-newtransport !font-bold !text-[28px] !leading-[32px] !mb-[16px] xl:!text-[64px] xl:!leading-[72px] !tracking-[0px] text-[#1d1d1d] xl:!mb-[24px] !normal-case md:!text-[48px] md:!leading-[54px] md:!mb-[16px]">
                {headingText}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
