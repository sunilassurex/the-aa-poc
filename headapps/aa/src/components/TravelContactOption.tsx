// components/ContactHelp.tsx

import Image from 'next/image';
import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';

export default function ContactHelp() {
  const deviceType = useResponsiveDevice();
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className="xl:max-w-[1160px] md:max-w-[74.6rem] mx-auto xl:px-[2rem] px-[1.1rem]">
        <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between bg-white rounded-[15px] shadow-sm p-[24px] md:pt-[40px] md:pb-[25px] md:px-[80px]">
          {/* Mobile Image (top-left only on small screens) */}
          {deviceType === Constant.RESPONSIVE_VARIABLES.MOBILE && (
            <div className="block md:hidden mb-[24px]">
              <Image
                src="/help-support-sign-posting.svg"
                alt="Contact Icon"
                width={48}
                height={48}
              />
            </div>
          )}
          <div className="flex-1 md:pr-4">
            <h2 className="!text-[22px] md:!text-[24px] md:!leading-[20px] !leading-[24px] font-aa-sans !font-bold text-black !mb-[16px]">
              Find help or contact options
            </h2>
            <p className="text-[#1d1d1d] md:text-[16px] text-[14px] leading-[20px] mb-[24px]  md:mb-[30px]">
              We’ve got online solutions, account log in, live chat and more – so you can complete
              your task or get support.
            </p>
            <div className="ml-[-20px] mt-[-5px]">
              <Buttons
                buttons={[
                  {
                    href: '...',
                    title: 'Retrieve a quote',
                    buttonText: 'Contact us',
                    buttonType: Constant.BUTTONS.PRIMARY,
                    buttonTextAlign: 'text-left',
                  },
                ]}
              />
            </div>
          </div>

          {/* Desktop Image (right side on md and above) */}
          <div className="hidden md:block flex-shrink-0 xl:ml-0 md:ml-[50px] md:mb-[16px]">
            <Image src="/help-support-sign-posting.svg" alt="Contact Icon" width={96} height={96} />
          </div>
        </div>
      </div>
    </div>
  );
}
