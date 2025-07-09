// components/SafetyAdvice.tsx
import Image from 'next/image';

const safetyTips = [
  {
    icon: '/icon-warning.svg',
    text: "If your vehicle's in a dangerous location and drivable, move it somewhere safe now.",
    width: 33.33,
    height: 33.33,
  },
  {
    icon: '/car-lights.svg',
    text: 'Keep your side lights and hazard lights on.',
    width: 47.5,
    height: 27,
  },
];

const unsafeAdvice = [
  {
    icon: '/car-exit.svg',
    text: 'Exit carefully using the doors opposite to traffic if possible.',
    width: 33.33,
    height: 45,
  },
  {
    icon: '/roadside-icon.svg',
    text: 'Wait away from the road, preferably behind a barrier.',
    width: 30.5,
    height: 30.5,
  },
  {
    icon: '/driver.da.svg',
    text: "If you can't leave the vehicle, wear your seatbelt.",
    width: 19.5,
    height: 33.15,
  },
];

export default function SafetyAdvice() {
  return (
    <>
      <header className="bg-[#ffd600] sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-[112.2rem] min-h-[64px] md:min-h-[80px] mx-[15px] md:mx-auto py-[1.65rem]">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/AA-logo.svg"
              alt="AA Logo"
              width={48} // mobile size
              height={49} // mobile size
              className="relative top-[-1px] sm:w-[71.5px] sm:h-[72px]" // larger size from small screen upwards
            />
          </div>
        </div>
      </header>
      <div className="bg-white ">
        <div className=" md:max-w-[93rem]  mx-auto md:pt-[2.5rem] md:pb-[1rem] ">
          <div className="md:w-[61.5rem] px-[1.5rem] md:px-0 py-[2.7rem] md:py-0">
            <h2 className="!text-[22px] !font-aasans  !font-bold md:!mb-[2.8rem] !mb-[2.6rem]">Safety advice</h2>

            <div className="ml-[-7px]">
              {safetyTips.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[38px]  min-h-[55px] " // smaller gap for tighter look
                >
                  {/* Fixed size container for icon */}
                  <div className="flex items-center justify-center w-[48px] h-[40px] shrink-0">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={item.width}
                      height={item.height}
                      className="object-contain md:!pb-0 pb-1 flex items-center"
                    />
                  </div>

                  <h5 className="text-gray-800 !tracking-[-0.000em]   font-newtransport mb-0 font-normal text-[16px] !leading-[2.4rem] flex items-center">
                    <p className="m-0 md:!pt-[6.5px] !pt-[3px]">{item.text}</p>
                  </h5>
                </div>
              ))}
            </div>
            <div className="!font-bold min-h-[55px]  flex !leading-[20px] items-center">
              <p className="!font bold md:pt-2 pl-[1px] !font-newtramsport text-[16px] m-0">
                It may be unsafe to stay in your vehicle, so:
              </p>
            </div>

            <div className="ml-[-6px]">
              {unsafeAdvice.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[37px] min-h-[55px]" // smaller gap for tighter look
                >
                  {/* Fixed size container for icon */}
                  <div className="flex items-center justify-center w-[48px] h-[42px] shrink-0">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={item.width}
                      height={item.height}
                      className="object-contain pt-[3px]  flex items-center "
                    />
                  </div>

                  <h5 className="text-gray-800 !tracking-[-0.000em]   font-newtransport mb-0 font-normal text-[16px] !leading-[2.4rem] flex items-center">
                    <p className="m-0 md:!pt-[6.5px]">{item.text}</p>
                  </h5>
                </div>
              ))}
            </div>

            <button className="!mt-[8px] md:!mt-[11.5px] !ml-[1px]  bg-[#06757f] text-white !text-[18.2px] font-semibold !py-[1.35rem] !px-[20px] md:!px-[32.3px] leading-[1.222rem] sm:w-auto w-full  !rounded-[6px] hover:bg-[#045f63] transition">
              Report breakdown
            </button>

            <div className="!mt-[2.4rem] bg-gray-100 !px-[1.7rem] !pt-[1.9rem] !pb-[2.3rem] !rounded-[1rem]  sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-[20px] mb-3">Broken down without cover?</p>
              <div className="flex items-start  gap-[2.5rem]">
                <Image
                  src="/roadside.AA.svg"
                  alt="AA Van"
                  width={47}
                  height={47}
                  className="!mt-[4px] mx-0"
                />
                <div>
                  <p className="  text-[16px] mt-2 !mb-[3px]">We can still help.</p>
                  <a
                    href="#"
                    className="!text-teal-700 !font-normal  !text-[16px] !underline !hover:text-teal-900"
                  >
                    Get instant breakdown cover.
                  </a>
                </div>
              </div>
            </div>

            <p className="text-2xl text-black !ml-[1px] !mt-[2.6rem]">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="#" className="!text-teal-700 !underline !font-normal  !text-[16px]">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className=" !text-teal-700 !underline !font-normal  !text-[16px]">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
