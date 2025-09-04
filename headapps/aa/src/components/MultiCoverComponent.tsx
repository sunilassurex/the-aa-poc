'use client';

import React, { useEffect, useState } from 'react';
import Constant from './helpers/Constant/Constant';
import Buttons from './Buttons';
import useResponsiveDevice from './helpers/CustomHelpers/ResponsiveHook';

const services = [
  {
    title: 'Got a flat battery?',
    description:
      'We can recharge your vehicle’s batteries at the roadside – and fit replacement ones if you need them.',
    link: '/car-battery',
    label: 'Replacement battery',
  },
  {
    title: 'Lost your car keys?',
    description: 'If you’re locked out of your vehicle, or just need a spare, we can help.',
    link: '/breakdown-cover/key-assist',
    label: 'Replacement car keys',
  },
  {
    title: 'Put in the wrong fuel?',
    description:
      'If you’ve filled up with the wrong fuel, we’ll get your vehicle back on the road in no time.',
    link: '/breakdown-cover/fuel-assist',
    label: 'Fuel drain service',
  },
];

export default function MultiProduct() {
  const device = useResponsiveDevice();
  //set state for DeviceType to avoid hydration issue(will stay same rendering for all devices before useeffect)
  const [deviceType, setDeviceType] = useState<string>(Constant.RESPONSIVE_VARIABLES.DESKTOP);
  useEffect(() => {
    setDeviceType(device);
  }, [device]);
  return (
    <div className="row">
      <div className="px-0">
        <div className="md:!pb-[2.5rem] !px-[0px] wrapper">
          <h3 className="!my-[1.5rem] !text-[2rem] !leading-[2.7rem] !tracking-[-.005em] md:!mt-[2.9rem] md:!mb-[3.1rem] text-center md:!text-[2.6rem] md:!leading-[3.6rem] md:!tracking-[-0.005em]">
            Text
          </h3>

          {/* Mobile: block | Desktop: table */}
          <div className="block md:table w-full md:table-fixed">
            <div className="block md:table-row">
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`block md:table-cell align-top w-full md:px-[0.5rem] ${
                    index === 0 ? '' : 'pt-[1.4rem] md:!pt-[0px]'
                  }`}
                >
                  <figure className="block w-full !m-0 !p-0 !border-b-0"></figure>
                  <div
                    className="!py-[2rem] !pr-[2rem] !pb-[7.6rem] !pl-[2rem] bg-white md:!pt-[2.3rem] md:!px-[3rem] md:!pb-[9.3rem] border-b border-l border-r border-[#dfdfe0] relative"
                    style={{
                      height:
                        deviceType === Constant.RESPONSIVE_VARIABLES.MOBILE
                          ? ''
                          : deviceType === Constant.RESPONSIVE_VARIABLES.TABLET
                          ? '286px'
                          : '263px',
                    }}
                  >
                    <hgroup>
                      <h2 className="alt !mb-[0.8rem] text-center !text-[2rem] !leading-[2.5rem] !tracking-[0px] !mb-[0.8rem]">
                        {item.title}
                      </h2>
                      <h6 className="!mb-[40px] !tracking-[-.05rem] text-center !text-[1.8rem] !leading-[2.5rem] !tracking-[0.0025em] !mb-[3rem]">
                        {item.description}
                      </h6>
                    </hgroup>
                    <div className="absolute bottom-[25px] left-0 w-full">
                      {deviceType === Constant.RESPONSIVE_VARIABLES.MOBILE ? (
                        <Buttons
                          buttons={[
                            {
                              href: item.link,
                              title: item.label,
                              buttonText: item.label,
                              buttonType: Constant.BUTTONS.PRIMARY,
                              buttonTextAlign: 'text-center',
                              buttonWidth: 'w-full',
                            },
                          ]}
                        />
                      ) : (
                        <Buttons
                          buttons={[
                            {
                              href: item.link,
                              title: item.label,
                              buttonText: item.label,
                              buttonType: Constant.BUTTONS.PRIMARY,
                              buttonTextAlign: 'text-center',
                            },
                          ]}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
