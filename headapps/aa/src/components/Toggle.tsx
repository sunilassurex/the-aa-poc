import { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(true); // controls description box
  const [isActive, setIsActive] = useState(false); // controls underline
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
    <div className="w-full max-w-5xl  mx-auto" ref={containerRef}>
      <div
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
        className="cursor-pointer bg-white border border-gray-300 md:rounded shadow-md md:px-20 px-4 py-3 flex justify-between items-center focus:outline-none"
      >
        <span className={`text-sm font-semibold ${isActive ? 'border-b-2 border-black-400' : ''}`}>
          Good to know
        </span>

        <span className="text-xl text-gray-600">
          {/* <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /> */}
        </span>
      </div>

      {isOpen && (
        <div className="mt-2 mx-4 md:mx-0  bg-white border border-gray-300 rounded shadow-md md:px-20 px-5 py-3 text-sm text-gray-800">
          <p>
            <sup>†</sup>
            <strong>Source:</strong> AA Annual Report &amp; Accounts 2024 (c. 2,800 patrols) and
            Annual Report &amp; Financial Statements 2023 (1,600 patrols). Verify at{' '}
            <a
              href="https://theaa.com/Best"
              className="text-blue-600 hover:underline"
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
