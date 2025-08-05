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
        <div className="!pb-[2.5rem] wrapper">
          <h3 className="!mt-[2.9rem] !mb-[3.1rem]">Text</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((item, index) => (
              <article
                key={index}
                className="px-[0.5rem] align-top multi-product w-full sm:w-[48%] lg:w-[30%] bg-white"
              >
                <figure className="block w-full"></figure>
                <div
                  className="bg-white pt-[2.3rem] px-[3rem] pb-[9.3rem] border-b border-l border-r border-[#dfdfe0] relative "
                  style={{ height: '263px' }}
                >
                  <hgroup>
                    <h2 className="alt !mb-[0.8rem]">{item.title}</h2>
                    <h6 className="mb-[40px] tracking-[-.05rem]">{item.description}</h6>
                  </hgroup>
                  <div className="absolute bottom-[40px] w-full">
                    <Buttons
                      buttons={[
                        {
                          href: item.link,
                          title: item.label,
                          buttonText: item.label,
                          buttonType: Constant.BUTTONS.PRIMARY,
                        },
                      ]}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
