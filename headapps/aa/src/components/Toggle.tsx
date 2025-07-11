import { useState, useEffect, useRef } from 'react';

interface ToggleProps {
  initiallyOpen?: boolean; // variant: true = open by default, false = closed
}

export default function Toggle({ initiallyOpen = true }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen); // controls description box
  const [isActive, setIsActive] = useState(initiallyOpen); // controls underline
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle outside click for removing underline only
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false); // remove underline
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle open and underline together on click
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setIsActive(true);
  };

  return (
    <div
      className="w-full max-w-[1160px] mx-auto py-[1rem] md:!px-[2rem] md:py-[1.5rem]"
      ref={containerRef}
    >
      <div
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
        className="cursor-pointer bg-white mb-[1.4rem] md:!mb-[1.5rem] md:!py-[1.5rem] md:!px-[9.5rem] !px-[2.5rem] !py-[1.2rem] flex justify-between items-center focus:outline-none shadow-[0_5px_10px_rgba(192,195,195,0.2)] h-[50px] md:h-[50px]"
      >
        {/* Left-aligned label */}
        <span
          className={`block bg-white cursor-pointer relative mt-0 py-[1.4rem] md:py-[1.4rem] text-[1.8rem] md:text-[1.6rem] leading-[2.2rem] tracking-[0.025em] font-newtransport !font-bold h-[50px] ${
            isActive ? 'underline decoration-1 underline-offset-[0.5px]' : ''
          }`}
        >
          Good to know
        </span>

        {/* Right-aligned arrow */}
        <div className="flex-shrink-0 ml-auto">
          <img
            src="/accordion-arrow-down.png"
            alt="Toggle arrow"
            className={`md:!w-[16px] md:!h-[11px] !w-[9px] !h-[10px] relative right-[1px] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      {/* Content Box */}
      {isOpen && (
        <div className="md:mb-[2rem]">
          <div className="bg-white border shadow-[0_5px_10px_rgba(192,195,195,0.2)] border-gray-300 md:py-[3rem] px-[2.5rem] py-[3rem] md:mx-0 mx-[1rem] md:px-[9.5rem] text-[14px] md:text-[16px] text-gray-800 ">
            <div className="md:!mb-[0px] md:!text-[14px] text-[1.4rem] !leading-[2.195rem] md:!leading-[21px] ">
              {/* <sup>†</sup>
            Source: AA Annual Report &amp; Accounts 2024 (c. 2,800 patrols) and Annual Report &amp;
            Financial Statements 2023 (1,600 patrols). Verify at{' '}
            <a
              href="https://theaa.com/Best"
              className="!text-blue-600 hover:!underline"
              target="_blank"
            >
              theaa.com/Best
            </a>
             */}

              <p
                className="!mb-[0px]"
                style={{
                  fontFamily: `Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif !important`,
                }}
              >
                You will be entered into our prize draw to win a Jurassic World Rebirth holiday when
                you take out a new breakdown membership with At Home, National Recovery or Onward
                Travel.
              </p>

              <p
                className="!my-[1.5rem]"
                style={{
                  fontFamily: `Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif !important`,
                }}
              >
                The prize includes an adventure holiday for 2 adults and 2 children in this prize
                draw, which includes: (i) airfare (roundtrip flights from London, UK to Lyon,
                France); (ii) car hire: For 5 days, to be collected/dropped off at Lyon airport
                (incl. GPS hire); (iii) accommodation: 4 nights’ safari tent glamping accommodation
                in Ardeche, based on sharing a double occupancy space with self-catering and
                bathroom facilities; (iv) canoe tour (1.5 hours) which includes instruction and
                rental of canoes/kayaks, life jackets, paddles, watertight containers, neoprene
                suits and windbreaks; (v) admission and tour of The Grotte Chauvet 2 (UNESCO World
                Heritage listed, the largest cave replica in the world); (vi) spending money: £1,000
                in total (for the winner only); and (vii) travel insurance.
              </p>

              <p
                className="my-[1.5rem]"
                style={{
                  fontFamily: `Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif !important`,
                }}
              >
                The Jurassic World Rebirth prize draw promotion starts on 1 July 2025 and ends at
                11.59 pm on 16 July 2025. (1) is for new AA breakdown customers only who are UK
                residents, and not existing AA breakdown members or at renewal; (2) does not apply
                when only Roadside Assistance is purchased, or to Parts &amp; Garage Cover, Key
                Cover or to Commercial Use; (3) is not available in conjunction with any other
                offer, discount or promotion or in a breakdown situation; and (4) there’s no cash
                alternative, and the AA reserves the right to withdraw or alter this promotion
                without prior notice at any time. For further information and full terms and
                conditions please visit{' '}
                <a
                  href="https://www.theaa.com/terms-and-conditions/jurassic-world-prize-draw"
                  className="!text-[#07818c] font-bold no-underline"
                >
                  theAA.com/prizedraw
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
