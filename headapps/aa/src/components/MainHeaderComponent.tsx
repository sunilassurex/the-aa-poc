/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const menuData: any = {
  account: [
    'Log in to your account',
    'Create an account',
    'Update your details',
    'Refer a friend',
    'Smart benefits',
    'The AA app',
  ],
  breakdown: [
    'Breakdown cover',
    'Report a breakdown',
    'Personal breakdown cover',
    'Multicar breakdown cover',
    'Family breakdown cover',
    'European breakdown cover',
    'Motorbike breakdown cover',
    'Electric car breakdown cover',
    'Business breakdown cover',
    'Instant breakdown cover',
    'Report an accident',
    'Wrong fuel assistance',
    'Manage your cover',
    'Breakdown guides',
  ],
  insurance: [
    'Car insurance',
    'Van insurance',
    'Home insurance',
    'Travel insurance',
    'Bike insurance',
  ],
  vehicle: ['MOT and servicing', 'Tyres and batteries', 'Diagnostics', 'Mobile mechanic'],
  cars: ['Used cars', 'New cars', 'Car reviews', 'Car valuation'],
  driving: ['Driving lessons', 'Pass Plus', 'Theory test help', 'Instructor training'],
  finance: ['Car finance', 'Loan calculator', 'Personal loans', 'Credit card'],
  travel: ['European travel advice', 'Driving abroad', 'Travel money', 'Travel insurance'],
};

export default function Navbar() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMobileMenu, setSelectedMobileMenu] = useState<string | null>(null);

  const mainItems = ['breakdown', 'insurance', 'vehicle', 'cars', 'driving', 'finance', 'travel'];

  const mainItemsWithAccount = [...mainItems, 'account'];
  const mainItemsWithfirstAccount = ['account', ...mainItems];

  return (
    <div className=" top-0 z-50">
      {/* Desktop Navbar */}
      <div
        className={`md:wrapper transition-colors duration-300 hidden md:block md:pt-[16px] md:pb-[0px] md:h-[134px] ${
          isHovered ? 'bg-white' : 'bg-[rgb(255,211,0)]'
        }`}
      >
        {/* Top Bar */}
        <div className="md:px-[2rem] md:mb-[12px] max-w-[1160px] mx-auto text-black !font-newtransport !font-normal !text-[16px] flex justify-between">
          <span className="relative float-left md:text-[14px] md:leading-[21px] text-[#21252d] md:py-[5px]">
            Are you a
            <a
              href="#"
              className="md:!text-[14px] md:leading-[1.17rem] md:inline-block md:px-[6px] md:py-[4px] !font-normal !text-[#1d1d1d] !underline hover:!text-black"
            >
              business customer?
            </a>
          </span>
          <div className="float-right md:py-[5px]">
            <a
              href="#"
              className="md:!text-[14px] md:leading-[24px] md:pr-[14px] md:pl-[6px] !font-normal !text-[#1d1d1d] hover:!underline !no-underline"
            >
              Broken down?
            </a>
            <span className="text-[19px] top[-3px] absolute !font-[ui-sans-serif]">|</span>
            <a
              href="#"
              className="md:!text-[14px] md:leading-[24px] md:px-[14px] !font-normal !text-[#1d1d1d] hover:!underline  !no-underline"
            >
              Had an accident?
            </a>
            <span className="text-[19px] top[-3px] absolute !font-[ui-sans-serif]">|</span>
            <a
              href="#"
              className="md:!text-[14px] md:leading-[24px] md:pl-[14px] md:px-[6px] !font-normal !text-[#1d1d1d] hover:!underline !no-underline"
            >
              Help and support
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="md:px-[2rem] max-w-[1160px] mx-auto justify-between items-center pb-2 hidden xl:flex">
          <div className="absolute top-[48px] mt-[-12px]">
            <div className="inline float-left !max-w-[104px] pr-[36px] mt-[0px]">
              <a href="/" title="The AA | Home" className="px-[6px] py-[4px]">
                <img
                  src="/AA-logo.svg"
                  className="w-[70px] h-[48px] object-contain"
                  alt="AA Logo"
                />
              </a>
            </div>

            <nav className="flex mt-[50px]">
              {mainItemsWithAccount.map((key: string) => (
                <div
                  key={key}
                  className="relative py-[4px] px-[12px] text-[18px] leading-[1.33px] text-[#2b2d32] group"
                >
                  <div
                    onMouseEnter={() => setIsHovered(key)}
                    onMouseLeave={() => setIsHovered(null)}
                    className=" pb-[160px] relative z-30 "
                  >
                    {key === 'account' ? (
                      <div className="flex">
                        <span className="text-[26px] top[-3px] absolute !font-[ui-sans-serif] !pr-[36px]">
                          |
                        </span>
                        <img
                          src="/driver.da.svg"
                          className="!h-[24px] w-[24px] absolute left-[25px] top-[-4px]"
                          alt="Driver Icon"
                        />
                        <button className="relative pl-[54px]">Account</button>
                      </div>
                    ) : (
                      <button className="relative">
                        {key === 'vehicle'
                          ? 'Vehicle maintenance'
                          : key === 'cars'
                          ? 'New and used cars'
                          : key === 'driving'
                          ? 'Driving school'
                          : key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    )}
                  </div>
                  {isHovered === key && (
                    <div className="absolute top-[45px] left-0 w-full h-[4px] bg-black z-50 rounded-t-sm" />
                  )}
                  {isHovered === key && (
                    <ul
                      onMouseEnter={() => setIsHovered(key)}
                      onMouseLeave={() => setIsHovered(null)}
                      className={`absolute top-[38px] border-t-1 border-[#a7a9ac] rounded-bl-[8px]
                        !py-[40px] !pr-[42px] !pl-[40px]  ${
                          ['finance', 'travel'].includes(key) ? 'right-0 left-auto' : 'left-0'
                        } !mt-4 shadow-lg z-50 bg-white min-w-max grid
                      [&:nth-child(3n)]:rounded-br-[8px]  [&:nth-child(3n)]:p-[40px_88px_40px_40px]
                      [&:nth-child(5)]:!left-auto [&:nth-child(5)]:!right-[-307px]
                      [&:nth-child(6)]:!left-auto [&:nth-child(6)]:!right-[-222px]
                      [&:nth-child(7)]:!left-auto [&:nth-child(7)]:!right-[-153px]
        ${menuData[key].length <= 6 ? 'grid-cols-2' : 'grid-cols-3'}
        !gap-x-40 !gap-y-6
        ${key === 'account' ? '!bg-black !grid-cols-1 min-w-[200px] hover:!underline' : ''}`}
                    >
                      {menuData[key].map((item: any, i: number) => (
                        <li key={i} className="whitespace-nowrap mb-[16px] ">
                          <a
                            href="#"
                            className={`block text-[16px] leading-[1.25px] tracking-[0.25px] px-[8px] py-[0px] !font-normal !no-underline hover:!underline ${
                              key === 'account' ? 'text-white' : 'text-black '
                            }`}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navbar */}
      <div className="xl:hidden bg-[rgb(255,211,0)] p-4 flex justify-between items-center">
        <img src="/AA-logo.svg" className="h-8 m-0" alt="AA Logo" />
        <button onClick={() => setMobileOpen(true)} className="!text-[16px] font-bold">
          Menu ☰
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white z-50 overflow-y-auto p-4 !transition-transform !duration-300 !ease-in-out !transform-gpu ${
            mobileOpen ? '!translate-x-0' : '!-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <img src="/AA-logo.svg" className="h-8 m-0" alt="AA Logo" />
            <button
              onClick={() => {
                setMobileOpen(false);
                setSelectedMobileMenu(null);
              }}
              className="text-[16px] font-bold"
            >
              Close X
            </button>
          </div>

          {!selectedMobileMenu ? (
            <ul className="space-y-4">
              {mainItemsWithfirstAccount.map((key) => (
                <li
                  key={key}
                  className="flex justify-between items-center py-3 border-b border-gray-300"
                  onClick={() => setSelectedMobileMenu(key)}
                >
                  <span className="text-[16px] font-bold">
                    {key === 'vehicle'
                      ? 'Vehicle maintenance'
                      : key === 'cars'
                      ? 'New and used cars'
                      : key === 'driving'
                      ? 'Driving school'
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <span className="text-gray-600 text-[14px]">
                    <img src="/arrow-right-dark.png" alt="" />
                  </span>
                </li>
              ))}

              <li className="text-[16px] font-bold  py-3 border-b border-gray-300">Broken down?</li>
              <li className="text-[16px] font-bold py-3 border-b border-gray-300">
                Had an accident?
              </li>
              <li className="text-[16px] font-bold py-3 border-b border-gray-300">
                Help and support
              </li>
            </ul>
          ) : (
            <div>
              <button
                className="text-[16px] text-[#06757f] font-semibold mb-4 flex items-center gap-1"
                onClick={() => setSelectedMobileMenu(null)}
              >
                &lt; Back
              </button>
              <ul className="space-y-3">
                {menuData[selectedMobileMenu].map((item: string, i: number) => (
                  <li key={i} className="text-[16px] text-gray-800 border-b border-gray-300 !py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center mt-6 text-[14px]">
            Are you a{' '}
            <a href="#" className="!text-[#06757f] font-semibold hover:!underline">
              business customer?
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
