/* eslint-disable react/jsx-key */

import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Constant from './helpers/Constant/Constant';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';
import { useEffect, useState } from 'react';

// import Image from 'next/image'
type PromoGridVariant = 'cards' | 'promo-section';

type ButtonType = {
  label: string;
  variant: 'primary' | 'secondary';
  desktopMinWidth: string;
  mobileMinWidth: string;
};

type PromoCard = {
  title: string;
  description: string;
  backgroundImage?: string;
  buttons: ButtonType[];
  showOn: string;
  desktopMinHeight: string;
  mobileMinHeight: string;
};

interface PromoGridProps {
  variant?: PromoGridVariant;
  promoCards?: PromoCard[]; // Only for 'promo-section'
  richText?: Field<string>;
}

export default function PromoGrid({
  variant = 'cards',
  promoCards = [],
  richText,
}: PromoGridProps) {
  // This function helps us to check the deviceType and set the lat and lng accordingly
  const device = useResponsiveDevice();
  //set state for DeviceType to avoid hydration issue(will stay same rendering for all devices before useeffect)
  const [deviceType, setDeviceType] = useState<string>(Constant.RESPONSIVE_VARIABLES.DESKTOP);
  useEffect(() => {
    setDeviceType(device);
  }, [device]);

  if (variant === 'promo-section') {
    return (
      <>
        <div className="bg-gray-100 space-y-10 !py-[1rem] md:!py-[0rem]">
          <div className="wrapper !px-[1rem] md:!px-[2rem]">
            {promoCards.map((card, index) => (
              <>
                {card.showOn === Constant.CARDS.FIRST ? (
                  <div
                    key={index}
                    style={{
                      minHeight:
                        deviceType == Constant.RESPONSIVE_VARIABLES.MOBILE
                          ? card.mobileMinHeight
                          : card.desktopMinHeight,
                    }}
                    className="row"
                  >
                    <div className="  bg-white text-center  md:max-w-[1120px] mx-auto !pt-[3.9rem] !px-[2.4rem] !pb-[4rem]  md:!px-[12.6rem] md:!pb-[6rem] md:!pt-[5.25rem] flex flex-col justify-center items-center">
                      <h2 className="md:!text-[2.4rem] md:leading-[3.2rem] md:text-[#1d1d1d] md:!tracking-[-.025em] !text-[1.9rem] leading-[2.4rem] !mt-[25px] !mb-[1.3rem] md:mt-0 font-newtransport !font-bold md:!mb-[2.4rem]">
                        {card.title}
                      </h2>
                      <p className="!font-normal text-[#1d1d1d] tracking-[.025em] !mb-[2.4rem]  md:!mb-[2.45rem] md:!text-[1.6rem] !text-[1.8rem] !leading-[2.5rem] md:!leading-[2.19rem]  font-newtransport !font-regular">
                        {card.description}
                      </p>
                      {card.buttons.map((button, index) => (
                        <button
                          key={index}
                          style={{
                            minWidth:
                              deviceType == Constant.RESPONSIVE_VARIABLES.MOBILE
                                ? button.mobileMinWidth
                                : button.desktopMinWidth,
                          }}
                          className="shadow-custom-inset md:w-auto  py-[0.85rem] px-[2rem] !text-[1.8rem] !tracking-[0.015em] md:!pt-[1.27rem] md:!px-[2.7rem] md:!pb-[1.55rem] md:!leading-[2rem] md:!tracking-[0.03em] md:!text-[1.8rem] bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d] border !border-[#ffc400]
          !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] !rounded-[5px]
          hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633] font-semibold"
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className="!py-[1.5rem]"
                    style={{
                      minHeight:
                        deviceType == Constant.RESPONSIVE_VARIABLES.MOBILE
                          ? card.mobileMinHeight
                          : card.desktopMinHeight,
                    }}
                  >
                    <div
                      className=" text-center   md:max-w-[1120px] mx-auto !pt-[3.8rem] px-[2.4rem] pb-[4rem]  md:!px-[12.6rem] md:pb-[6rem] md:!pt-[5.2rem] shadow flex flex-col justify-center md:items-center bg-no-repeat bg-cover bg-[position:right_0]"
                      style={{ backgroundImage: `url(${card.backgroundImage})` }}
                    >
                      <h2 className="md:!text-[2.4rem] md:leading-[3.2rem] md:text-[#1d1d1d] md:!tracking-[-.025em] !text-[1.9rem] leading-[2.4rem] !mt-[25px] !mb-[1.25rem] md:mt-0 font-newtransport !font-bold md:!mb-[2.4rem]">
                        {card.title}
                      </h2>
                      <p className="!font-normal text-[#1d1d1d] tracking-[.025em] !mb-[2.4rem]  md:!mb-[2.35rem] md:!text-[1.6rem] !text-[1.8rem] !leading-[2.5rem] md:!leading-[2.195rem]  font-newtransport !font-regular">
                        {card.description}
                      </p>
                      <div
                        className={`flex ${
                          card.buttons.length === 1
                            ? 'justify-center'
                            : 'justify-center md:!gap-x-[2rem] gap-y-[2rem] '
                        } flex-wrap`}
                      >
                        {card.buttons.map((btn, index) => (
                          <button
                            key={index}
                            className={`md:w-auto w-full md:!min-w-[12rem] font-semibold !px-[2rem] !py-[0.85rem] !tracking-[0.01em] md:!tracking-[.03em] md:!pt-[1.2rem] md:!px-[2.69rem] md:!pb-[1.4rem] !rounded-[5px] transition !text-[1.83rem] md:!text-[1.8rem] leading-[.018em] md:!leading-[2.16rem]  ${
                              btn.variant === 'primary'
                                ? ' bg-gradient-to-b from-[#3d3d3d] md:!ml-[2.8rem]  to-[#161616] text-white border !border-[#151515] !shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)] hover:bg-none hover:!bg-[#3d3d3d]'
                                : 'font-newtransport md:!px-[3rem] md:!mr-[2.8rem] md:!pt-[1.2rem] md:!pb-[1.35rem] !font-bold text-[#1d1d1d] bg-transparent rounded border-[0.2rem] border-[#1d1d1d] md:!text-[1.8rem]  hover:!bg-[#dcddde]'
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        {richText?.value && (
          <div className="bg-gray-100 row">
            <div className="wrapper !px-[1rem]">
              <RichText field={richText}></RichText>
            </div>
          </div>
        )}
      </>
    );
  }

  // Default = 'cards'
  const cards = [
    {
      title: 'Car insurance',
      description:
        "Comprehensive cover for £250 or less – that's what 10% of new customers paid from December 2024 to February 2025.",
      buttonText: 'Get car insurance',
      variant: 'primary',
      backgroundImage: '/large-beam.webp',
    },
    {
      title: 'Book your MOT and service',
      description:
        'All garages are AA approved, parts are guaranteed for 1 year, and you can spread the cost in 4 interest-free instalments.',
      buttonText: 'Book your car in',
      variant: 'secondary',
    },
    {
      title: 'Had an accident?',
      description:
        'Contact us first and we’ll handle everything – from vehicle recovery to making a claim.',
      buttonText: 'More about Accident Assist',
      variant: 'secondary',
    },
    {
      title: 'European breakdown cover',
      description:
        'Peace of mind abroad, with over 60,000 repairers and recovery operators in 44 countries across Europe.',
      buttonText: 'Buy European breakdown cover',
      variant: 'primary',
      backgroundImage: '/large-beam.webp',
    },
  ];

  return (
    <section className="bg-gray-100 md:py-[1.5rem] py-[1rem]">
      <div className="w-full max-w-[1160px] px-[1rem] md:px-[20px] mx-auto">
        <div className="grid grid-cols-1 md:gap-y-12 !shadow-xs   md:grid-cols-2 text-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={` relative w-full flex flex-col justify-center items-center text-black !pt-[4rem] px-[2.4rem] pb-[4rem] md:px-[4.4rem] md:pb-[5.749rem] md:!pt-[5.15rem] min-h-[255px] md:min-h-[302.2px]  ${
                card.backgroundImage ? 'bg-contain bg-no-repeat bg-center' : 'bg-white'
              } ${index % 2 === 1 && index !== cards.length - 1 ? 'mb-[2.1rem] md:mb-0' : ''}
    `}
              style={
                card.backgroundImage
                  ? {
                      backgroundImage: `url('${card.backgroundImage}')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top right', // push the light beam upward
                      backgroundSize: 'cover', // maintain aspect ratio and fill
                    }
                  : {}
              }
            >
              <a href={' '} className="block w-full">
                <div>
                  <h2 className="!mb-[1.3rem] !text-[1.9rem] !leading-[2.4rem] tracking-[0] md:!text-[2.4rem] md:!leading-[3.2rem] md:!tracking-[-.025em] xl:!text-[2.4rem] font-newtransport !font-bold md:!my-[1.98rem] md:!mb-[2rem]">
                    {card.title}
                  </h2>

                  <p className="font-newtransport !font-light !text-[1.8rem] !tracking-[.025em] text-[rgb(29, 29, 29)] !leading-[2.51rem] !mb-[2.4rem] !font-normal md:!leading-[2.22rem] md:!mb-[2.342rem] md:!text-[1.6rem] md:!tracking-[.025em] text-[#1d1d1d]">
                    {card.description}
                  </p>
                </div>
              </a>
              <div className="flex justify-center !w-full md:!w-auto">
                <button
                  className={`!w-full md:w-auto mx-auto font-bold !pt-[0.85rem] !tracking-[0.015em] !pb-[0.8rem] md:!pt-[1.24rem] md:!px-[2.73rem] md:!pb-[1.35rem] !rounded-[5px] transition !text-[1.8rem] md:!text-[1.85rem] leading-[.018em] md:!leading-[2.23rem] md:tracking-[.033em]
    ${
      card.variant === 'primary'
        ? ` !w-full
          bg-gradient-to-b from-[#3d3d3d]  to-[#161616] text-white border !border-[#151515]
          !shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)] md:!shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)]
          hover:bg-none hover:!bg-[#3d3d3d]
        `
        : `
          bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d] border !border-[#ffc400]
          !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] rounded-md
          hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]
        `
    }`}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
