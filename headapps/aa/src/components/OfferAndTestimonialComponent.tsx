import Image from 'next/image';
import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';
import { useEffect, useState } from 'react';

interface OfferProps {
  heading: string;
  description: string;
  points: string[];
  buttonText: string;
  tickIcon: string;
  testimonial: {
    quote: string;
    author: string;
    date: string;
  };
}

export default function OfferAndTestimonial({
  heading,
  description,
  points,
  buttonText,
  tickIcon,
  testimonial,
}: OfferProps) {
  const device = useResponsiveDevice();
  //set state for DeviceType to avoid hydration issue(will stay same rendering for all devices before useeffect)
  const [deviceType, setDeviceType] = useState<string>(Constant.RESPONSIVE_VARIABLES.DESKTOP);
  useEffect(() => {
    setDeviceType(device);
  }, [device]);
  return (
    <section className="bg-white row">
      <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
        {/* Left Section */}
        <div className="md:!py-[49px] md:pl-[20px] md:pr-[64px] py-[30px] px-[6px]">
          <h2 className="!mb-[8px] md:!mb-4 !text-[#2b2d32] !text-[24px] !leading-[28px] !tracking-[-0.5px] font-newtransport !font-bold">
            {heading}
          </h2>
          <p className="!text-[14px] !leading-[21px] font-arial">{description}</p>
          <div className="max-w-[720px]">
            <ul className="space-y-4 md:!mb-6 !mb-[1.1rem]">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start pt-[16px] !text-[16px] text-[#2b2d32] !font-regular !leading-[1.25] tracking-normal font-newtransport !mb-0"
                >
                  <Image
                    src={tickIcon}
                    alt="tick"
                    width={20}
                    height={20}
                    className="!mx-0 mt-[2px] !mr-[1rem] inline-block !w-[21px] !h-[21px] bg-no-repeat bg-[0_0] bg-transparent"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative md:!left-[-18px]">
            {deviceType === Constant.RESPONSIVE_VARIABLES.MOBILE ? (
              <>
                {' '}
                <Buttons
                  buttons={[
                    {
                      href: 'https://www.beam.co.uk/car-insurance/sales/tiers/your-quote/retrieve',
                      title: 'Retrieve a quote',
                      buttonText: buttonText,
                      buttonType: Constant.BUTTONS.PRIMARY,
                      buttonTextAlign: 'text-center',
                      buttonWidth: 'w-full',
                    },
                  ]}
                ></Buttons>
              </>
            ) : (
              <>
                {' '}
                <Buttons
                  buttons={[
                    {
                      href: 'https://www.beam.co.uk/car-insurance/sales/tiers/your-quote/retrieve',
                      title: 'Retrieve a quote',
                      buttonText: buttonText,
                      buttonType: Constant.BUTTONS.PRIMARY,
                      buttonTextAlign: 'text-left',
                    },
                  ]}
                ></Buttons>
              </>
            )}
          </div>
        </div>

        {/* Right Section (Testimonial) */}
        <div className="md:!py-[49px] py-[30px] px-[6px] md:!px-[4px] lg:px-[0px]">
          <h2 className="block flex-[1_0_100%] !mb-10 text-[#2b2d32] !text-[24px] !leading-[28px] !tracking-[-0.5px] font-newtransport !font-bold"></h2>
          <div className="relative pl-[30px] pt-[4px] before:content-['“'] before:absolute before:top-[5px] before:left-0 before:text-[#ffcc00] before:text-[60px] before:leading-[24px] before:font-newtransport-light before:tracking-[-1.15px]">
            <p className="!text-[20px] !leading-[21px] lg:!text-[26px] text-[#1d1d1d] !tracking-[-.31px] lg:!tracking-[-.5px] !font-light lg:!font-regular lg:!leading-[1.23] lg:!mb-[16px] !mb-[8px]">
              {testimonial.quote}
            </p>
            <p className="text-[16px] leading-[1.5] tracking-[.25px] !font-bold text-[#2b2d32] font-arial !mb-0">
              {testimonial.author}
            </p>
            <p className="text-[16px] leading-[1.5] tracking-[.25px] !font-normal text-[#2b2d32] font-arial">
              {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
