// components/SafetyAdvice.tsx
import Image from 'next/image';

const safetyTips = [
  {
    icon: '/icon-warning.svg', // Replace with your actual image paths
    text: "If your vehicle's in a dangerous location and drivable, move it somewhere safe now.",
  },
  {
    icon: '/car-lights.svg',
    text: 'Keep your side lights and hazard lights on.',
  },
];

const unsafeAdvice = [
  {
    icon: '/car-exit.svg',
    text: 'Exit carefully using the doors opposite to traffic if possible.',
  },
  {
    icon: '/roadside-icon.svg',
    text: 'Wait away from the road, preferably behind a barrier.',
  },
  {
    icon: '/driver.da.svg',
    text: "If you can't leave the vehicle, wear your seatbelt.",
  },
];

export default function SafetyAdvice() {
  return (
    <>
      <header className="bg-[#ffd600] sticky top-0 z-50 sm:pl-50 !pl-60 py-3 shadow ">
        <div className="flex items-center justify-between w-full max-w-[1160px]  px-4 py-4">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/AA-logo.svg"
              alt="AA Logo"
              width={70}
              height={70}
              className="relative top-[2px]" // Adjust top spacing if needed
            />
          </div>
        </div>
      </header>
      <div className="bg-white ">
        <div className=" xl:!mx-120 mx-4 py-8 !max-w-300 ">
          <h3 className="!text-5xl font-newtransport !font-bold mb-12 mt-5">Safety advice</h3>

          <div className="space-y-8">
            {safetyTips.map((item, idx) => (
              <div key={idx} className="flex items-center  gap-16">
                <div className="relative w-18 h-18 shrink-0">
                  <Image src={item.icon} alt="icon" fill className="object-contain" />
                </div>
                <h5 className="text-gray-800 font-newtransport font-normal !text-3xl">
                  {item.text}
                </h5>
              </div>
            ))}
          </div>

          <h5 className="!mt-10  text-gray-800 font-newtransport !font-bold  !text-3xl">
            It may be unsafe to stay in your vehicle, so:
          </h5>

          <div className="space-y-8 !mt-15">
            {unsafeAdvice.map((item, idx) => (
              <div key={idx} className="flex  !items-start gap-16">
                <div className="relative w-18 h-18 shrink-0">
                  <Image src={item.icon} alt="icon" fill className="object-contain " />
                </div>
                <h5 className="text-gray-800 font-newtransport font-normal !text-3xl">
                  {item.text}
                </h5>
              </div>
            ))}
          </div>

          <button className="!mt-8 bg-[#006c70] text-white !text-3xl font-semibold !py-6 !px-12 sm:w-auto w-full  !rounded-xl hover:bg-[#045f63] transition">
            Report breakdown
          </button>

          <div className="mt-8 bg-gray-100 px-5 py-4 rounded-2xl  sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold text-3xl">Broken down without cover?</p>
            <div className="flex items-start  gap-10">
              <Image src="/roadside.AA.svg" alt="AA Van" width={50} height={50} className="!m-0" />
              <div>
                <p className="text-gray-800 my-0">We can still help.</p>
                <a href="#" className="!text-teal-700 !text-2xl underline !hover:text-teal-900">
                  Get instant breakdown cover.
                </a>
              </div>
            </div>
          </div>

          <p className="text-2xl text-black !mt-6">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="!text-teal-700 underline !text-2xl">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className=" !text-teal-700 underline !text-2xl">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </div>
    </>
  );
}
