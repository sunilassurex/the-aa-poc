import { useState } from 'react';
import Link from 'next/link';

export default function BeamHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Car insurance', href: '/car-insurance' },
    { label: 'Claims', href: '/car-insurance/claims' },
    { label: 'Manage your policy', href: '/car-insurance/existing-customers' },
    { label: 'Contact us', href: '/contact-us' },
  ];

  return (
    <header id="beam-header" className="md:h-[95px] h-[64px] bg-white block">
      <div className="md:max-w-[116rem] md:!mx-auto md:px-[2rem] block relative px-[10px]">
        {/* Logo Block */}
        <div className="float-left">
          <Link
            href="/"
            title="Beam | Home"
            className="md:!mt-[26px] mt-[20px] relative md:left-[8px] md:top-[2px] left-[6px] top-[0px] inline-block font-newtransport !font-regular"
          >
            {/* Desktop Logo */}
            <span className="hidden md:block svg-desktop md:px-[6px] md:py-[4px] font-newtransport !font-regular">
              <svg width="271" height="32" viewBox="0 0 271 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="#2B2929" fill-rule="evenodd">
                  <text className="font-newtransport !font-light text-[16px]">
                    <tspan x="167" y="22">
                      FROM THE
                    </tspan>
                    <tspan x="245.592" y="22" className="font-newtransport !font-normal">
                      {' '}
                    </tspan>
                    <tspan
                      x="249.436"
                      y="22"
                      fontWeight="bold"
                      fontFamily="NewTransport-Bold, Arial, Helvetica, sans-serif"
                      className="font-newtransport !font-bold"
                    >
                      AA
                    </tspan>
                  </text>
                  <path d="M19.82 14.766c2.51-1.281 4.018-3.932 4.018-6.4C23.838 3.29 19.408 0 13.837 0H0v32h13.928c7.125 0 11.326-4.069 11.326-9.463 0-4.846-3.334-7.04-5.435-7.771zM6.53 5.577h5.983c2.877 0 4.611 1.555 4.611 3.703 0 2.103-1.734 3.657-4.611 3.657H6.53v-7.36zm6.53 20.89H6.53v-8.273h6.485c3.197 0 5.48 1.371 5.48 4.16 0 2.56-2.054 4.114-5.434 4.114zM31.097 0v32H53.7v-5.806H37.628v-7.68H50.46v-5.577H37.628V5.851h15.617V.001zM67.507 0 57.415 32h6.94l1.874-6.492h11.279L79.38 32h7.308L76.595 0h-9.088zm4.34 6.217h.09l4.017 13.99h-8.172l4.064-13.99zM115.672 10.998l.01 21.002h-9.363l-9.966-21.002L96.364 32h-6.333V0h8.478l10.84 22.923V0h8.48L133 32h-7.362zM149 0h2v32h-2z"></path>
                </g>
              </svg>
            </span>
            {/* Mobile Logo */}
            <span className="svg-mobile px-[6px] py-[4px] block md:hidden">
              <svg width="162" height="16" viewBox="0 0 162 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#2B2929" fill-rule="evenodd">
                  <text className="!text-[12px] font-newtransport !font-light">
                    <tspan x="84" y="13" className="!text-[12px] font-newtransport !font-light">
                      FROM THE
                    </tspan>
                    <tspan x="142.944" y="13">
                      {' '}
                    </tspan>
                    <tspan x="145.827" y="13" className="text-[12px] font-newtransport !font-bold">
                      AA
                    </tspan>
                  </text>
                  <path d="M9.984 7.383c1.265-.64 2.024-1.966 2.024-3.2C12.008 1.646 9.777 0 6.97 0H0v16h7.016c3.59 0 5.706-2.034 5.706-4.732 0-2.422-1.68-3.52-2.738-3.885zM3.29 2.789h3.013c1.45 0 2.324.777 2.324 1.85 0 1.053-.874 1.83-2.324 1.83H3.29v-3.68zm3.29 10.445H3.29V9.097h3.267c1.61 0 2.76.686 2.76 2.08 0 1.28-1.035 2.057-2.738 2.057zM15.665 0v16h11.387v-2.903h-8.097v-3.84h6.465V6.468h-6.465V2.926h7.868V0zM34.007 0l-5.084 16h3.497l.943-3.246h5.682L39.99 16h3.68L38.586 0h-4.578zm2.186 3.108h.046l2.024 6.995h-4.117l2.047-6.995zM58.271 5.5l.005 10.5H53.56L48.54 5.5l.005 10.5h-3.19V0h4.271l5.46 11.461V0h4.272L67 16h-3.709zM75 0h1v16h-1z"></path>
                </g>
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden float-right pr-4 pt-1 md:mt-[22px] md:mr-[6px] tracking-[0.25px] mt-[18px] mr-[-4px]">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-[#2b2d32] font-newtransport !font-bold !text-[16px]"
          >
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block main-nav">
          <ul className="float-right md:h-[95px] flex flex-nowrap m-0 p-0">
            {navItems.map(({ label, href }) => (
              <li key={label} className="relative  md:pl-[0px] md:pr-[0px]">
                <Link
                  href={href}
                  className="group border-2 border-transparent whitespace-nowrap block md:!text-[18px] !leading-[1.33px] text-[#2b2d32] md:!py-[45px] md:!px-[12px] font-newtransport !font-normal hover:!no-underline"
                >
                  <span className="relative inline-block after:absolute after:top-[45px] after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:bg-[#1d1d1d] after:w-0 after:opacity-0 group-hover:after:opacity-100 group-hover:after:w-full after:transition-all after:duration-300">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden overflow-auto">
            <div className="flex justify-between items-center pl-[16px] pb-[16px] mt-[23px] !mx-auto">
              <Link href="/">
                <svg
                  width="162"
                  height="16"
                  viewBox="0 0 162 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#2B2929" fill-rule="evenodd">
                    <text className="!text-[12px] font-newtransport !font-light">
                      <tspan x="84" y="13">
                        FROM THE
                      </tspan>
                      <tspan x="142.944" y="13">
                        {' '}
                      </tspan>
                      <tspan
                        x="145.827"
                        y="13"
                        font-family="NewTransport-Bold, Arial, Helvetica, Verdana, sans-serif"
                        font-weight="bold"
                        className="!text-[12px] font-newtransport !font-bold"
                      >
                        AA
                      </tspan>
                    </text>
                    <path d="M9.984 7.383c1.265-.64 2.024-1.966 2.024-3.2C12.008 1.646 9.777 0 6.97 0H0v16h7.016c3.59 0 5.706-2.034 5.706-4.732 0-2.422-1.68-3.52-2.738-3.885zM3.29 2.789h3.013c1.45 0 2.324.777 2.324 1.85 0 1.053-.874 1.83-2.324 1.83H3.29v-3.68zm3.29 10.445H3.29V9.097h3.267c1.61 0 2.76.686 2.76 2.08 0 1.28-1.035 2.057-2.738 2.057zM15.665 0v16h11.387v-2.903h-8.097v-3.84h6.465V6.468h-6.465V2.926h7.868V0zM34.007 0l-5.084 16h3.497l.943-3.246h5.682L39.99 16h3.68L38.586 0h-4.578zm2.186 3.108h.046l2.024 6.995h-4.117l2.047-6.995zM58.271 5.5l.005 10.5H53.56L48.54 5.5l.005 10.5h-3.19V0h4.271l5.46 11.461V0h4.272L67 16h-3.709zM75 0h1v16h-1z"></path>
                  </g>
                </svg>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2b2d32] font-bold !text-[16px] leading-[20px] tracking-[0.25px] font-newtransport !font-bold"
              >
                <span className="relative right-[44px] top-[-2px]">Close</span>
                <span className="absolute right-[0px] top-[25px] !mr-[16px] w-[24px] h-[24px] after:content-[''] after:absolute after:inset-0 after:[background-image:url(/close-icon.webp)] after:bg-no-repeat after:bg-right-top after:[background-size:16px]"></span>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="px-4 pb-4 relative top-[4px] left-[1px]">
              {navItems.map(({ label, href }) => (
                <div
                  key={label}
                  className={`py-[18px] border-t-[1px] !border-t-[#dcddde] border-solid'
                  }`}
                >
                  <Link
                    href={href}
                    className="block text-[#2b2d32] font-newtransport !font-bold text-[16px] leading-[20px] tracking-[0.25px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
