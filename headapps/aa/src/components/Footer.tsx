import { useState } from 'react';

type FooterProps = {
  variant?: 'top-links' | 'footer-with-bottom' | 'detailed';
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
        <span className="!font-extrabold !text-4xl md:!text-3xl xl:!text-5xl">{title}</span>
        <span className="sm:hidden">{isOpen ? '▲' : '▼'}</span>
      </button>
      <ul className={`${isOpen ? 'block' : 'hidden'} sm:block !space-y-7 mt-4 !pl-0`}>
        {items.map((item, idx) => (
          <li key={idx} className="!text-[18px] md:!text-[16px] md:!font-light xl:!text-[18px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ variant = 'top-links' }: FooterProps) {
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

  const bottomLinks = [
    ['BREAKDOWN COVER', 'AA CARS'],
    ['ROUTE PLANNER', 'DRIVING'],
    ['INSURANCE', 'CAR SERVICE & MOT'],
    ['FINANCIAL SERVICES', 'KEY WORKERS'],
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white text-sm font-bold">
      {/* === Top Links Variant === */}
      {variant === 'top-links' && (
        <>
          <div
            className="bg-[#303030] flex flex-wrap flex-col sm:flex-row 
  justify-center md:justify-start xl:justify-center !gap-y-8
  !py-25 !px-8 border-b border-gray-700 "
          >
            {topLinks.map((item, index) => (
              <div
                key={index}
                className="relative px-4 pb-0  xl:pb-0  sm:text-left text-xl xl:text-2xl"
              >
                <span className="hover:underline cursor-pointer ">{item}</span>

                {/* Vertical divider on desktop */}
                {index !== topLinks.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-gray-500" />
                )}

                {/* Horizontal divider on mobile */}
                {index !== topLinks.length - 1 && (
                  <div className="block sm:hidden mt-4  border-t border-gray-600" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#1a1a1a] text-center md:!text-right md:pr-10 xl:pr-50  text-gray-400 py-8 text-xl font-normal">
            © Automobile Association Developments Ltd. 2025
          </div>
        </>
      )}

      {/* === Footer with Bottom Grid Links === */}
      {variant === 'footer-with-bottom' && (
        <>
          <div
            className="bg-[#303030] flex flex-wrap flex-col sm:flex-row 
  justify-center md:justify-start xl:justify-center !gap-y-8
  !py-25 !px-8 border-b border-gray-700 "
          >
            {topLinks.map((item, index) => (
              <div
                key={index}
                className="relative px-4 pb-0  xl:pb-0  sm:text-left text-xl xl:text-2xl"
              >
                <span className="hover:underline cursor-pointer ">{item}</span>

                {/* Vertical divider on desktop */}
                {index !== topLinks.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-gray-500" />
                )}

                {/* Horizontal divider on mobile */}
                {index !== topLinks.length - 1 && (
                  <div className="block sm:hidden mt-4  border-t border-gray-600" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#1a1a1a] text-center md:!text-right md:pr-10 xl:pr-50  text-gray-400 py-8 text-xl font-normal">
            © Automobile Association Developments Ltd. 2025
          </div>

          <div className="bg-[#1a1a1a] text-white !py-10 !px-0 sm:!px-10 lg:!px-53">
            {/* Top Divider Line with side margins */}
            <div className="border-t border-gray-700 mx-0 sm:mx-1 lg:mx-1 mb-4" />

            {/* Bottom Link Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-y-12 gap-y-0 gap-x-10 !text-xl md:!text-xl  xl:!text-2xl ">
              {bottomLinks.map((pair, idx) => (
                <div key={idx}>
                  {pair.map((text, i) => (
                    <div key={i} className="mb-0 md:mb-3">
                      <div className="font-bold uppercase pl-4 md:pl-0  md:px-0 md:mb-4 my-5">
                        {text}
                      </div>
                      <div className="h-px  bg-gray-600" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* === Detailed Footer (Accordion style) === */}
      {variant === 'detailed' && (
        <div className="bg-[#1d1d1d] text-white px-6 py-12">
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

            <div className="flex flex-col md:flex-col xl:flex-row  justify-between md:justify-start xl:justify-between  text-sm text-white gap-y-3">
              <p className="mb-2 sm:mb-0 md:mb-4 xl:mb-0 md:!text-[13px] xl:!text-[16px] !text-[13px] !font-normal">
                <strong className="!text-white ml-2 mr-1 ">AA</strong> © Automobile Association
                Developments Ltd. 2025
              </p>
              <div className="flex flex-wrap justify-start  ">
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
