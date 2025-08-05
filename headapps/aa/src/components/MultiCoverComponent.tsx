'use client';

import React from 'react';
import Constant from './helpers/Constant/Constant';
import Buttons from './Buttons';

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
  return (
    <div className="row">
      <div className="cf">
        <div className="!pb-[2.5rem] !px-[0px] wrapper">
          <h3 className="!mt-[2.9rem] !mb-[3.1rem] text-center">Text</h3>

          {/* Mobile: block | Desktop: table */}
          <div className="block lg:table w-full lg:table-fixed">
            <div className="block lg:table-row">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="block lg:table-cell align-top w-full px-[0.5rem] multi-product"
                >
                  <figure className="block w-full !m-0 !p-0 !border-b-0"></figure>
                  <div
                    className="bg-white !pt-[2.3rem] !px-[3rem] !pb-[9.3rem] border-b border-l border-r border-[#dfdfe0] relative"
                    style={{ height: '263px' }}
                  >
                    <hgroup>
                      <h2 className="alt !mb-[0.8rem] text-center">{item.title}</h2>
                      <h6 className="!mb-[40px] !tracking-[-.05rem] text-center">
                        {item.description}
                      </h6>
                    </hgroup>
                    <div className="absolute bottom-[25px] left-0 w-full">
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
