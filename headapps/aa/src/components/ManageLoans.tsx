// components/ManageMoney.js
import Image from 'next/image';
import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';

export default function ManageMoney() {
  return (
    <div className="pt-[24px] pb-[16px] bg-white">
      <div className="max-w-[1152px] mx-auto px-[16px] flex flex-col md:flex-row items-stretch ">
        {/* Left - Mobile mockup image */}
        <div className="relative md:w-[362px] w-full md:mr-[16px] md:mb-0 mb-[17px] flex-shrink-0">
          <Image
            src="/loans-manage.webp"
            alt="Manage your loan"
            width={724}
            height={560}
            className="object-contain w-full"
          />
        </div>
        {/* Right - Text & button */}
        <div className="flex-1 xl:mt-[50px]">
          <h2 className="!text-[32px] !leading-[40px] font-aa-sans !font-normal text-[#1d1d1b] !mb-[16px]">
            Manage your money online
          </h2>
          <p className="text-gray-700 text-[16px] leading-[24px] !mb-[24px]">
            You’re in the driving seat when it comes to your loan. Log into your account to:
          </p>

          {/* Features list */}
          <ul className="space-y-[8px] mb-8">
            {[
              'Check your balance quickly',
              'Download a statement',
              'Make extra payments on your loan',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-[4px] h-[24px] rounded-[2px] bg-[#ffd300] mr-[8px]"></span>
                <span className="text-gray-800 text-[16px] leading-[24px]">{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className=" ">
            <Buttons
              buttons={[
                {
                  href: '...',
                  title: 'Retrieve a quote',
                  buttonText: 'Manage your loan',
                  buttonType: Constant.BUTTONS.PRIMARY,
                  buttonTextAlign: 'text-left',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
