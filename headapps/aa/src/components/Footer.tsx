export default function FooterWithBottom() {
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
      {/* Top Link Row */}
      <div className="bg-[#303030] flex flex-col sm:flex-row flex-wrap justify-center py-13 px-4 border-b border-gray-700">
        {topLinks.map((item, index) => (
          <div key={index} className="relative px-4 md:pb-0 pb-5 sm:text-left">
            <span className="hover:underline cursor-pointer ">{item}</span>

            {/* Vertical divider on desktop */}
            {index !== topLinks.length - 1 && (
              <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-gray-500" />
            )}

            {/* Horizontal divider on mobile */}
            {index !== topLinks.length - 1 && (
              <div className="block sm:hidden mt-5 border-t border-gray-600" />
            )}
          </div>
        ))}
      </div>

      {/* Copyright Text Between Sections */}
      <div className="bg-[#1a1a1a] text-center md:text-right md:pr-45  text-gray-400 py-8 text-sm font-medium">
        © Automobile Association Developments Ltd. 2025
      </div>

      {/* Bottom Grid Section */}
      <div className="bg-[#1a1a1a] text-white py-10 px-0 sm:px-10 lg:px-45">
        {/* Top Divider Line with side margins */}
        <div className="border-t border-gray-700 mx-0 sm:mx-1 lg:mx-1 mb-5" />

        {/* Bottom Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-y-12 gap-y-0 gap-x-10  text-xs ">
          {bottomLinks.map((pair, idx) => (
            <div key={idx}>
              {pair.map((text, i) => (
                <div key={i} className="mb-0 md:mb-3">
                  <div className="font-bold text-sm uppercase px-4 md:px-0 md:mb-4 my-5">
                    {text}
                  </div>
                  <div className="h-px  bg-gray-600" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
