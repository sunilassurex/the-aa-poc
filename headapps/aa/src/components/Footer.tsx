import { useState } from 'react';

type FooterProps = {
  variant?: 'top-links' | 'detailed';
  bottomLinks?: string[][];
};

type FooterSectionProps = {
  title: string;
  items: string[];
};

function FooterSection({ title, items }: FooterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:block">
      <button
        className="w-full flex justify-between items-center py-3 sm:py-0 sm:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="!font-extrabold !text-4xl md:!text-4xl xl:!text-5xl">{title}</span>
        <span className="sm:hidden">{isOpen ? '▲' : '▼'}</span>
      </button>

      <ul className={`${isOpen ? 'block' : 'hidden'} sm:block !space-y-7 mt-4 !pl-0`}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="!text-[18px] md:!text-[18px]  !font-newtransport !font-light xl:!text-[20px]"
          >
            <a
              href="#"
              className="text-white !no-underline hover:!underline transition duration-200"
            >
              <p className="!font-newtransport !font-normal">{item}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ variant = 'top-links', bottomLinks = [] }: FooterProps) {
  const topLinks = [
    'About us',
    'Gender pay gap',
    'Help and support',
    'Apps',
    'Careers',
    'Modern slavery',
    'Terms of use',
    'Privacy notice',
    'Privacy hub',
    'Cookies',
  ];

  return (
    <div className="md:pt-[1.5rem]">
      <footer className="bg-[#303030] text-white text-sm ">
        {/* === Top Links Variant (and optional Bottom Grid) === */}
        {variant === 'top-links' && (
          <div className="bg-[#393a3a] ">
            <div className="md:!max-w-[1160px] md:!px-[2.4rem] md:!pt-[2.4rem] md:!pb-[2.4rem] mx-auto ">
              <ul className="list-none block w-full !text-left !m-0">
                {topLinks.map((item, index) => (
                  <li
                    key={index}
                    className={`md:inline-block relative !text-left text-xl xl:text-[1px] py-[1.75rem] md:!pt-[1.8rem] md:!pb-[1.8rem] !px-[2.4rem] ${
                      index === 0
                        ? '!px-[1.5rem] md:!pr-[1.5rem] md:!pl-0'
                        : '!px-[1.5rem] md:!px-[1.5rem]'
                    } ${
                      index !== topLinks.length - 1
                        ? 'border-b border-[#424242] sm:border-none'
                        : ''
                    }`}
                  >
                    {/* Vertical divider (desktop only) */}
                    {index !== 0 && (
                      <span className="hidden md:inline-block absolute left-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[1.5rem] bg-[#424242]" />
                    )}

                    <a
                      href={'#'} // fallback to '#'
                      className="block text-left  md:!tracking-[0.01em] !font-bold hover:!underline cursor-pointer text-white !text-[1.2rem] md:!text-[14px]"
                      style={{
                        fontFamily: "Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#303030]">
              {/* Full width border on mobile only */}
              <div className="block md:hidden w-full h-[1px] bg-[#424242]" />

              {/* Mobile-only padding */}
              <div className="md:max-w-[1160px] mx-auto md:!tracking-[-0.02em] !text-[14.2px] text-center md:!text-right text-[#afafaf] !py-[1.8rem] !px-[2.4rem] md:!py-[2.2rem] md:!px-[2.4rem]  font-normal">
                <p
                  className="!m-0"
                  style={{
                    fontFamily: "Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif",
                  }}
                >
                  ©{' '}
                  <span className="!text-[14.6px]">
                    Automobile Association Developments Ltd. 2025
                  </span>
                </p>
              </div>
            </div>

            {/* Render bottom links only if provided */}
            {bottomLinks.length > 0 && (
              <div className="bg-[#303030] ">
                <div className="text-white md:!wrapper md:max-w-[1160px] mx-auto !py-[2rem] !px-0 md:!py-[3rem] md:!px-[2.4rem]">
                  <div className="" />

                  <div className="border-t-1 border-gray-600 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 md:!gap-y-0 gap-y-0 gap-x-10 !text-xl md:!text-xl xl:!text-2xl">
                    {bottomLinks.map((pair, idx) => (
                      <div key={idx}>
                        {pair.map((text, i) => (
                          <div key={i} className="">
                            <div
                              className=" font-bold uppercase !text-[14px] md:!tracking-[0.01em] !p-[2rem] md:pl-0 md:!px-0  md:!py-[1.74rem]"
                              style={{
                                fontFamily:
                                  "Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif",
                              }}
                            >
                              <a href="#" className="hover:!underline text-white">
                                {text}
                              </a>
                            </div>

                            {/* Always show divider on mobile, but skip last on desktop */}
                            <div
                              className={`h-[.8px] bg-gray-600 ${
                                i === pair.length - 1 ? 'block md:hidden' : ''
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* === Detailed Footer (Accordion Style) === */}
        {variant === 'detailed' && (
          <div className="bg-[#303030] text-white px-6 py-12">
            <div className="max-w-[1160px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <FooterSection
                  title="Products and services"
                  items={[
                    'Breakdown cover',
                    'European breakdown cover',
                    'Car insurance',
                    'Home insurance',
                    'Buy and sell a car',
                    'Financial services',
                    'Route planner',
                    'Driving lessons',
                    'Car service and MOT',
                  ]}
                />
                <FooterSection
                  title="Existing customers"
                  items={[
                    'Help and support',
                    'Login',
                    'Create an account',
                    'Report a breakdown',
                    'Update your details',
                    'Download the AA App',
                    'Smart Benefits',
                  ]}
                />
                <FooterSection
                  title="Company"
                  items={['About us', 'Careers', 'Gender pay gap', 'Accessibility']}
                />
              </div>

              <hr className="!my-10 border-t border-gray-600" />

              <div className="flex flex-col md:flex-col xl:flex-row justify-between md:justify-start xl:justify-between text-sm text-white gap-y-3">
                <p className="mb-2 sm:mb-0 md:mb-4 xl:mb-0 md:!text-[13px] xl:!text-[16px] !text-[13px] !font-normal">
                  <strong className="!text-white ml-2 mr-1">AA</strong> © Automobile Association
                  Developments Ltd. 2025
                </p>
                <div className="flex flex-wrap justify-start">
                  {[
                    'Terms of use',
                    'Cookies',
                    'Modern slavery statement',
                    'Privacy hub',
                    'Privacy notice',
                  ].map((item, idx, arr) => (
                    <span
                      key={idx}
                      className="flex items-center text-sm pb-2 !font-normal !text-[14px] md:!text-[14px] xl:!text-[18px]"
                    >
                      <a href="#" className="!no-underline hover:!underline px-2 !text-white">
                        {item}
                      </a>
                      {idx < arr.length - 1 && <span className="text-gray-500">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
