/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const menuData: any = {
  account: [
    [
      'Log in to your account',
      'Create an account',
      'Update your details',
      'Refer a friend',
      'Smart benefits',
      'The AA app',
    ],
  ],
  breakdown: [
    [
      'Breakdown cover',
      'Report a breakdown',
      'Personal breakdown cover',
      'Multicar breakdown cover',
      'Family breakdown cover',
    ],
    [
      'European breakdown cover',
      'Motorbike breakdown cover',
      'Electric car breakdown cover',
      'Business breakdown cover',
      'Caravan and motorhome breakdown cover',
    ],
    [
      'Instant breakdown cover',
      'Report an accident',
      'Wrong fuel assistance',
      'Manage your cover',
      'Breakdown guides',
    ],
  ],
  insurance: [
    [
      'Car insurance',
      'Multi-Car Discount',
      'Van insurance',
      'Electric car insurance',
      'Short term car insurance',
      'Motorbike insurance',
      'Car insurance guides',
    ],
    [
      'Home insurance',
      'Buildings insurance',
      'Contents insurance',
      'Home insurance guides',
      'Travel insurance',
      'All insurance products',
    ],
    ['Car insurance claim', 'Home insurance claim', 'Manage your policy'],
  ],
  vehicle: [
    [
      'MOTs',
      'Car servicing',
      'Mobile mechanics',
      'Diagnostics',
      'Vehicle health check',
      'Car battery replacement',
      'Car key replacement',
      'A/C recharge',
    ],
    ['Wrong fuel assistance', 'Car warranty', 'Car servicing guides', 'MOT guides'],
  ],
  cars: [
    [
      'Used cars for sale',
      'New cars to lease',
      'AA cars and vans',
      'Car history check',
      'Car warranty',
      'Car finance',
      'Sell your car',
      'Vehicle inspection',
      'Vehicle delivery',
    ],
    ['Car reviews', 'Car buying guides'],
  ],
  driving: [
    [
      'Driving lessons',
      'Driving instructor training',
      'Driving school franchise',
      'EV driving school franchise',
      'Refresher driving lessons',
      'Learner driver insurance',
    ],
    ['AA Driving Theory app', 'Manage your lessons', 'Driving school', 'Learner driving advice'],
  ],
  finance: [
    ['Loans', 'Savings accounts', 'Car loans', 'Car warranty', 'All finance products'],
    ['Finance guides'],
  ],
  travel: [
    [
      'Route planner',
      'Traffic news',
      'Mileage calculator',
      'Fuel price report',
      'European breakdown cover',
      'Travel insurance',
      'Atlases, travel guides and driving kits',
    ],
    ['Driving advice'],
  ],
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
            Are you a{' '}
            <a
              href="#"
              className="md:!text-[14px] md:leading-[1.17rem] md:inline-block md:pl-[2px] md:pr-[6px] md:py-[4px] !font-normal !text-[#1d1d1d] !underline hover:!text-black"
            >
              business customer?
            </a>
          </span>
          <div className="float-right">
            <a
              href="#"
              className="md:!text-[14px] md:leading-[24px] md:pr-[13px] md:pl-[6px] !font-normal !text-[#1d1d1d] hover:!underline !no-underline"
            >
              Broken down?
            </a>
            <span className="relative left-[0.5px] text-[19px] !font-[ui-sans-serif] text-[#2b2929]">
              |
            </span>
            <a
              href="#"
              className="relative left-[0.3px] md:!text-[14px] md:leading-[24px] md:px-[14px] !font-normal !text-[#1d1d1d] hover:!underline !no-underline"
            >
              Had an accident?
            </a>
            <span className="text-[19px] !font-[ui-sans-serif] text-[#2b2929]">|</span>
            <a
              href="#"
              className="md:!text-[14px] md:pr-[0px] md:leading-[24px] md:pl-[14px] md:pl-[6px] !font-normal !text-[#1d1d1d] hover:!underline !no-underline"
            >
              Help and support
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="md:px-[2rem] max-w-[1160px] mx-auto justify-end mt-[41px] items-center pb-2 hidden xl:flex">
          <div className="">
            <div className="absolute top-[48px] left-[112px] max-w-[104px] pr-[36px] mt-[4px]">
              <a
                href="/"
                title="The AA | Home"
                className="font-normal rounded-[4px] inline-block px-[6px] py-[4px] tracking-[0] whitespace-nowrap shadow-[inset_0_0_0_2px_transparent] font-newtransport"
              >
                <span className="svg-desktop inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="48"
                    viewBox="0 0 70 48"
                    fill="none"
                  >
                    <path
                      d="M68.2519 0H57.3789C56.8758 0 56.4121 0.279554 56.1668 0.730713L38.0168 34.1737V0.949372C38.0168 0.425327 37.6025 0 37.0922 0H26.2192C25.716 0 25.2524 0.279554 25.0071 0.730713L0.118151 46.5884C-0.225083 47.2213 0.220581 48 0.925918 48H9.43849C9.94615 48 10.4134 47.7149 10.6569 47.2573L15.0165 39.0414H27.7099V47.0506C27.7099 47.5747 28.1241 48 28.6344 48H40.5991C41.1068 48 41.574 47.7149 41.8175 47.2573L46.1771 39.0414H58.8705V47.0506C58.8705 47.5747 59.2847 48 59.795 48H68.2519C68.7623 48 69.1765 47.5747 69.1765 47.0506V0.949372C69.1765 0.425327 68.7623 0 68.2519 0ZM27.7099 29.2792H20.1964L27.275 15.9382C27.39 15.7223 27.709 15.8053 27.709 16.0517L27.7099 29.2792ZM58.8696 29.2792H51.3562L58.4347 15.9382C58.5497 15.7223 58.8687 15.8053 58.8687 16.0517L58.8696 29.2792Z"
                      fill="#00081C"
                    ></path>
                  </svg>
                </span>
                {/* <span className="svg-mobile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="32"
                    viewBox="0 0 48 32"
                    fill="none"
                  >
                    <path
                      d="M47.3564 0H39.8121C39.4617 0 39.1399 0.183381 38.9683 0.486666L26.3753 22.7745V0.63478C26.3753 0.282124 26.0893 0 25.7317 0H18.1874C17.837 0 17.5152 0.183381 17.3436 0.486666L0.0810616 31.0478C-0.154922 31.471 0.152572 31.9859 0.638841 31.9859H6.55273C6.90313 31.9859 7.23208 31.7955 7.39655 31.4922L10.4214 26.019H19.2243V31.3582C19.2243 31.7108 19.5104 31.9929 19.8679 31.9929H28.1702C28.5206 31.9929 28.8496 31.8025 29.0141 31.4992L32.0389 26.026H40.8418V31.3652C40.8418 31.7179 41.1279 32 41.4854 32H47.3564C47.714 32 48 31.7179 48 31.3652V0.63478C48 0.282124 47.714 0 47.3564 0ZM19.2243 19.516H14.0112L18.924 10.622C19.0026 10.4809 19.2243 10.5374 19.2243 10.6996V19.516ZM40.8418 19.516H35.6287L40.5415 10.622C40.6202 10.4809 40.8418 10.5374 40.8418 10.6996V19.516Z"
                      fill="#00081C"
                    ></path>
                  </svg>
                </span> */}
              </a>
            </div>

            <nav className="flex gap-x-6 relative left-[-8.5px]">
              {mainItemsWithAccount.map((key: string, index: number) => (
                <div
                  key={key}
                  className="relative py-[4px] px-[2.5px] ml-[2px] text-[18px] leading-[1.33px] tracking-[0.15px] text-[#2b2d32]"
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="pb-[50px] relative z-30">
                    {key === 'account' ? (
                      <div className="flex">
                        <span className="text-[#58595b] text-[26px] top-[-2px] left-[7px] absolute !font-[ui-sans-serif] !pr-[36px]">
                          |
                        </span>
                        <img
                          src="/user-icon.svg"
                          className="!h-[24px] w-[24px] absolute left-[25px] top-[-15px]"
                          alt="user Icon"
                        />
                        <button className="relative pl-[54px] left-[11px]">Account</button>
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

                  {/* Active tab underline */}
                  {isHovered === key && (
                    <div
                      className={`absolute top-[42px] h-[4px] bg-black z-50 rounded-t-sm ${
                        key === 'account' ? '!left-[27px] !w-[105px]' : 'left-0 w-full'
                      }`}
                    />
                  )}

                  {/* Multi-column dropdown */}
                  {isHovered === key && Array.isArray(menuData[key]?.[0]) && (
                    <div
                      className={`absolute top-[42px] mt-[4px] z-50 shadow-lg border-t border-[#a7a9ac] rounded-bl-[8px] px-[40px] py-[40px] flex gap-[60px] min-w-max ${
                        index === 7
                          ? 'right-0 left-auto'
                          : index === 6
                          ? 'right-[-153px] left-auto'
                          : index === 5
                          ? 'right-[-222px] left-auto'
                          : index === 4
                          ? 'right-[-307px] left-auto'
                          : 'left-0'
                      } ${
                        key === 'account'
                          ? 'bg-[#2b2d32] !left-[10px] rounded-bl-none rounded-br-none rounded-b-[8px]'
                          : 'bg-white'
                      }`}
                    >
                      {menuData[key].map((column: string[], colIndex: number) => (
                        <ul
                          key={colIndex}
                          className={`flex flex-col gap-[16px] min-w-[200px] ${
                            colIndex === menuData[key].length - 1 ? 'pr-[40px]' : ''
                          }`}
                        >
                          {column.map((item: string, i: number) => (
                            <li key={i} className="whitespace-nowrap">
                              <a
                                href="#"
                                className={`block text-[16px] font-newtransport !font-normal leading-[1.25] tracking-[0.25px] px-[8px] hover:!underline ${
                                  key === 'account' ? 'text-white' : 'text-black'
                                }`}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navbar */}
      <div className="xl:hidden bg-[rgb(255,211,0)] pr-[8px] flex justify-between items-center h-[64px]">
        {/* <img src="/AA-logo.svg" className="h-8 m-0" alt="AA Logo" /> */}
        <div className="left relative left-[16px]">
          <a href="/" title="The AA | Home">
            <span className="svg-mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="32"
                viewBox="0 0 48 32"
                fill="none"
              >
                <path
                  d="M47.3564 0H39.8121C39.4617 0 39.1399 0.183381 38.9683 0.486666L26.3753 22.7745V0.63478C26.3753 0.282124 26.0893 0 25.7317 0H18.1874C17.837 0 17.5152 0.183381 17.3436 0.486666L0.0810616 31.0478C-0.154922 31.471 0.152572 31.9859 0.638841 31.9859H6.55273C6.90313 31.9859 7.23208 31.7955 7.39655 31.4922L10.4214 26.019H19.2243V31.3582C19.2243 31.7108 19.5104 31.9929 19.8679 31.9929H28.1702C28.5206 31.9929 28.8496 31.8025 29.0141 31.4992L32.0389 26.026H40.8418V31.3652C40.8418 31.7179 41.1279 32 41.4854 32H47.3564C47.714 32 48 31.7179 48 31.3652V0.63478C48 0.282124 47.714 0 47.3564 0ZM19.2243 19.516H14.0112L18.924 10.622C19.0026 10.4809 19.2243 10.5374 19.2243 10.6996V19.516ZM40.8418 19.516H35.6287L40.5415 10.622C40.6202 10.4809 40.8418 10.5374 40.8418 10.6996V19.516Z"
                  fill="#00081C"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="relative top-[-13px] !text-[16px] !leading-[20px] !mt-[16px] !tracking-[0.25px] !mr-[16px] font-newtransport !font-bold"
        >
          <span className="pr-[24px]">Menu</span>
          <span
            className="
              relative after:content-[''] after:absolute after:right-0 after:top-[4px]
              after:w-[1em] after:h-[0.15em] after:bg-black
              after:[box-shadow:0_6px_0_0_black,0_12px_0_0_black]
            "
          ></span>
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white z-50 overflow-y-auto pt-[16px] !transition-transform !duration-300 !ease-in-out !transform-gpu ${
            mobileOpen ? '!translate-x-0' : '!-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center pl-[16px] pb-[22px]">
            <img src="/AA-logo.svg" className="h-8 m-0" alt="AA Logo" />
            <button
              onClick={() => {
                setMobileOpen(false);
                setSelectedMobileMenu(null);
              }}
              className="relative flex items-center justify-end w-full px-4 py-2 text-[16px] font-newtransport font-bold pr-[40px] text-black"
            >
              <span className="mr-[25px] !text-[16px] font-newtransport !font-bold !leading-[1.33px] !tracking-[0.15px]">
                Close
              </span>
              <span
                className="
      absolute right-[16px] top-[-2px] w-[24px] h-[24px]
      after:content-[''] after:absolute after:inset-0
      after:[background-image:url(/close-icon.webp)]
      after:bg-no-repeat after:bg-right-top after:[background-size:16px]
    "
              ></span>
            </button>
          </div>

          {!selectedMobileMenu ? (
            <ul className="space-y-4 !mx-[16px]">
              {mainItemsWithfirstAccount.map((key) => (
                <li
                  key={key}
                  className={`flex justify-between items-center py-[16px] !mb-[0px] border-t border-[#dcddde] ${
                    key === 'account' && 'h-[53px]'
                  } `}
                  onClick={() => setSelectedMobileMenu(key)}
                >
                  {key === 'account' && (
                    <>
                      <span>
                        {' '}
                        <img
                          src="/user-icon.svg"
                          className="!inline !h-[24px] w-[24px] relative left-[0px] top-[0px]"
                          alt="user Icon"
                        />
                        <span
                          className={`text-[16px] font-bold leading-[20px] tracking-[0.25px] ${
                            key === 'account' ? 'relative top-[2px] left-[4.5px]' : ''
                          } `}
                        >
                          {' '}
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                      </span>
                    </>
                  )}
                  {key != 'account' && (
                    <span className={`text-[16px] font-bold leading-[20px] tracking-[0.25px]  `}>
                      {key === 'vehicle'
                        ? 'Vehicle maintenance'
                        : key === 'cars'
                        ? 'New and used cars'
                        : key === 'driving'
                        ? 'Driving school'
                        : key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  )}

                  <span className="text-[#2b2d32] text-[14px] relative top-[0px]">
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
            <div className="border-t border-[#a7a9ac]">
              {/* Submenu Items */}
              <ul className="!mx-[16px]">
                <button
                  className="relative top-[5px] left-[-6px] !text-[16px] text-[#07818c] !leading-[20px] !tracking-[0.25px] font-newtransport !font-bold mb-4 flex items-center gap-[5px] ml-[16px]"
                  onClick={() => setSelectedMobileMenu(null)}
                >
                  <img
                    src="/arrow-left.svg"
                    alt="Back"
                    className="!inline w-[24px] h-[24px] !pl-[0px]"
                  />
                  <span className="inline relative top-[0px] left-[1px]">Back</span>
                </button>

                {/* Section Title with Icon (for 'account' only) */}
                <div className="flex gap-2 h-[68px] relative pt-[7px] top-[0px] !left-[0px]">
                  {selectedMobileMenu === 'account' && (
                    <img
                      src="/user-icon.svg"
                      alt="Account Icon"
                      className="!mx-[0px] w-[24px] !h-[24px] relative top-[17px] !left-[0px]"
                    />
                  )}
                  <h2
                    className={`!text-[24px] !mb-[0px] font-newtransport !font-bold !leading-[28px] !tracking-[-0.5px] py-[18px] !pl-[10px] ${
                      selectedMobileMenu === 'account' && 'relative top-[-3px] left-[1px]'
                    }`}
                  >
                    {' '}
                    {selectedMobileMenu === 'vehicle'
                      ? 'Vehicle maintenance'
                      : selectedMobileMenu === 'cars'
                      ? 'New and used cars'
                      : selectedMobileMenu === 'driving'
                      ? 'Driving school'
                      : selectedMobileMenu.charAt(0).toUpperCase() + selectedMobileMenu.slice(1)}
                  </h2>
                </div>
                {menuData[selectedMobileMenu].flat().map((item: string, i: number) => (
                  <li key={i} className="!h-[52px] !py-[16px]  text-gray-800 border-t border-[#dcddde]">
                    <a className="font-newtransport !font-bold !tracking-[0.25px] !text-[16px] !leading-[1.25px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
