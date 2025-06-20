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
    <div className="w-full max-w-[1160px] mx-auto" ref={containerRef}>
      <div
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
        className="cursor-pointer bg-white border border-gray-300 md:rounded shadow-md md:!py-8 md:!px-30 !px-8 !py-5 flex justify-between items-center focus:outline-none"
      >
        {/* Left-aligned label */}
        <span
          className={`text-[18px] font-semibold ${isActive ? 'border-b-2 border-black-400' : ''}`}
        >
          Good to know
        </span>

        {/* Right-aligned arrow */}
        <div className="flex-shrink-0 ml-auto">
          <img
            src="/accordion-arrow-down.png"
            alt="Toggle arrow"
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>

      {/* Content Box */}
      {isOpen && (
        <div className="mt-2 mx-4 xl:!mx-0 mb-4 md:mx-4 bg-white border border-gray-300 rounded shadow-md md:px-30 px-8 py-8 text-[14px] md:text-[16px] text-gray-800">
          <p>
            <sup>†</sup>
            Source: AA Annual Report &amp; Accounts 2024 (c. 2,800 patrols) and Annual Report &amp;
            Financial Statements 2023 (1,600 patrols). Verify at{' '}
            <a
              href="https://theaa.com/Best"
              className="!text-blue-600 hover:!underline"
              target="_blank"
            >
              theaa.com/Best
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
