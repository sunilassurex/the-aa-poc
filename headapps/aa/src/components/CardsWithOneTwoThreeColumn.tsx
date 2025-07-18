// components/ContactGrid.tsx

import React, { useEffect, useState } from 'react';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';
import Constant from './helpers/Constant/Constant';

type ContactItem = {
  title: string;
  phone: string;
  description: string;
  cta: string;
  tabletMinHeight: string;
  desktopMinHeight: string;
};

type Props = {
  contacts: ContactItem[];
};

const CardsWithOneTwoThreeColumn: React.FC<Props> = ({ contacts }) => {
  const columns =
    contacts.length === 3
      ? 'md:grid-cols-3 md:grid-cols-2 grid-cols-1'
      : 'md:grid-cols-2 grid-cols-1';

  const device = useResponsiveDevice();
  const [deviceType, setDeviceType] = useState<string>(Constant.RESPONSIVE_VARIABLES.DESKTOP);

  useEffect(() => {
    setDeviceType(device);
  }, [device]);

  if (contacts.length === 1) {
    return (
      <div className="bg-[#f6f6f6] md:py-[1.5rem]">
        <div className="wrapper mx-auto !px-[2.1rem] md:!px-[1.1rem] lg:!px-[2rem]">
          <div className="lg:max-w-[106rem] lg:mx-auto lg:px-[2rem] grid">
            {contacts.map((item, index) => (
              <div
                key={index}
                className="bg-white block md:px-[1.1rem] lg:!px-[4rem] lg:!pt-[2.5rem] lg:!pb-[2.1rem] px-[2rem] pt-[2rem] pb-[1.1rem] md:!pt-[2.1rem] md:!pb-[2rem]"
              >
                <div className="mb-[2.2rem] md:mb-[0px]">
                  <div className="">
                    <div className="md:!float-left md:w-[33%] md:pr-[3rem] md:mr-[.4%]">
                      <h5 className="lg:!mb-[0.4rem] md:!mb-[.6rem] lg:!text-[1.6rem] lg:!leading-[2.2rem] !leading-[2rem] !mb-[1.1rem] md:!pr-[0px] pr-[9rem] !tracking-[0px] md:!tracking-[.025em] md:!text-[15px]">
                        {item.title}
                      </h5>
                      <h3 className="lg:!mb-[0rem] !mb-[0.9rem] !text-[2rem] !leading-[2.7rem] !tracking-[-.005em] md:!leading-[2.4rem] md:!text-[1.9rem] lg:!text-[2.6rem] lg:!tracking-[-.005em] lg:!leading-[3.6rem]  md:!mb-[1.1rem]">
                        {item.phone}
                      </h3>
                    </div>
                    <div className="w-auto !mb-[1.4rem] md:!mb-[0px] md:float-left md:w-[60%]">
                      <p className="lg:!leading-[2.2rem] !leading-[2.2rem] md:!m-0 !text-[1.4rem] !mb-[1.4rem] !font-a !font-[Arial,Helvetica,Verdana,sans-serif] lg:!font-[NewTransport,sans-serif] lg:!text-[14px] md:!text-[13px] md:!leading-[1.9rem] md:!m-[0px]">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <button
                        className="block md:hidden text-[1.4rem] leading-[1.2rem] !min-w-[22rem] text-center bg-gradient-to-b from-[#ffcc00] to-[#f9b800] border border-[#ffc400] 
                     shadow-[inset_0_1px_0_#fff0b3,0_0_10px_rgba(0,0,0,0.2)] text-[#1d1d1d] !text-[1.8rem] !tracking-[0.015em]  transform scale-100
                     !rounded-[5px] !px-[2rem] !py-[0.9rem] mx-auto !mb-[1.4rem] !border-[0.1rem] !border-[#ffc400] !leading-[2rem]"
                      >
                        <a href={`tel:${item.phone.replace(/\s+/g, '')}`}>{item.cta}</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Existing layout for 2 or 3 items
  return (
    <div className="bg-[#f6f6f6]">
      <div className="wrapper mx-auto !px-[2.1rem] md:!px-[1.1rem] lg:!px-[2rem]">
        <div className={`grid ${columns}`}>
          {contacts.map((item, index) => (
            <div key={index} className="block md:px-[1.1rem] lg:!px-[1rem]">
              <div
                className="bg-white mb-[2.2rem] md:mb-[0px]"
                style={{
                  boxShadow: '0 5px 10px rgba(192, 195, 195, 0.2)',
                  minHeight:
                    deviceType == Constant.RESPONSIVE_VARIABLES.TABLET
                      ? item.tabletMinHeight
                      : deviceType == Constant.RESPONSIVE_VARIABLES.DESKTOP
                      ? item.desktopMinHeight
                      : '',
                }}
              >
                <div className="lg:!pt-[2.5rem] lg:px-[4rem] lg:!pb-[2.4rem] px-[2rem] pt-[2rem] pb-[1.1rem] md:!pt-[2.1rem] md:!pb-[2rem]">
                  <div>
                    <h5 className="lg:!mb-[.4rem] md:!mb-[.6rem] lg:!text-[1.6rem] lg:!leading-[2.2rem] !leading-[2rem] !mb-[1.1rem] md:!pr-[0px] pr-[9rem] !tracking-[0px] md:!tracking-[.025em] md:!text-[15px]">
                      {item.title}
                    </h5>
                    <h3 className="lg:!mb-[1.4rem] !mb-[0.9rem] !text-[2rem] !leading-[2.7rem] !tracking-[-.005em] md:!leading-[2.4rem] md:!text-[1.9rem] lg:!text-[2.6rem] lg:!tracking-[-.005em] lg:!leading-[3.6rem]  md:!mb-[1.1rem]">
                      {item.phone}
                    </h3>
                  </div>
                  <div className="w-auto !mb-[1.4rem] md:!mb-[0px]">
                    <p className="lg:!leading-[2.2rem] !leading-[2.2rem] md:!m-0 !text-[1.4rem] !mb-[1.4rem] !font-a !font-[Arial,Helvetica,Verdana,sans-serif] lg:!font-[NewTransport,sans-serif] lg:!text-[14px] md:!text-[13px] md:!leading-[1.9rem] md:!m-[0px]">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <button
                      className="block md:hidden text-[1.4rem] leading-[1.2rem] !min-w-[22rem] text-center bg-gradient-to-b from-[#ffcc00] to-[#f9b800] border border-[#ffc400] 
                     shadow-[inset_0_1px_0_#fff0b3,0_0_10px_rgba(0,0,0,0.2)] text-[#1d1d1d] !text-[1.8rem] !tracking-[0.015em]  transform scale-100
                     !rounded-[5px] !px-[2rem] !py-[0.9rem] mx-auto !mb-[1.4rem] !border-[0.1rem] !border-[#ffc400] !leading-[2rem]"
                    >
                      <a href={`tel:${item.phone.replace(/\s+/g, '')}`}>{item.cta}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsWithOneTwoThreeColumn;
