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
    <footer className="bg-[#303030] text-white text-sm font-bold md:!mt-[1.5rem]">
      {/* === Top Links Variant (and optional Bottom Grid) === */}
      {variant === 'top-links' && (
        <div className="bg-[#393a3a]">
          <div
            className=" md:max-w-[1160px] md:!py-[2.6rem] md:!px-[0px] mx-auto flex flex-wrap flex-col sm:flex-row 
            justify-evenly md:justify-evenly md:!gap-0
            !py-18 !px-8"
          >
            {topLinks.map((item, index) => (
              <div
                key={index}
                className="relative md:!py-[2rem] px-4 pb-0 xl:pb-0 sm:text-left text-xl xl:text-[17px]"
              >
                <span className="font-newtransport !font-bold hover:underline cursor-pointer md:text-[14px]">
                  {item}
                </span>

                {/* Vertical divider on desktop */}
                {index !== topLinks.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[1.1rem] bg-[#424242]" />
                )}

                {/* Horizontal divider on mobile */}
                {index !== topLinks.length - 1 && (
                  <div className="block sm:hidden mt-4 border-t border-gray-600" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#303030]">
            <div className="md:max-w-[1160px] mx-auto text-center md:!text-right md:!py-[2.2rem] md:!px-[2.4rem] text-[#afafaf] py-10 text-2xl font-normal">
              © Automobile Association Developments Ltd. 2025
            </div>
          </div>

          {/* Render bottom links only if provided */}
          {bottomLinks.length > 0 && (
            <div className="bg-[#303030]">
              <div className="text-white md:!wrapper md:max-w-[1160px] mx-auto md:py-[3rem] md:px-[2rem]">
                <div className="border-t border-gray-700 mx-0 sm:mx-1 lg:mx-1 mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-y-12 gap-y-0 gap-x-10 !text-xl md:!text-xl xl:!text-2xl">
                  {bottomLinks.map((pair, idx) => (
                    <div key={idx}>
                      {pair.map((text, i) => (
                        <div key={i} className="mb-0 md:mb-2">
                          <div className="font-bold uppercase pl-4 md:pl-0 md:px-0 md:mb-4 my-4">
                            {text}
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
  );
}
