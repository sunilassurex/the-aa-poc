// components/BusinessLinks.tsx
import { useEffect, useState } from 'react';
type LinkGroup = {
  title: string;
  columns: string[][];
};

const businessData: LinkGroup[] = [
  {
    title: 'Explore our business services',
    columns: [
      [
        'Business breakdown cover',
        'Vehicle rental',
        'Fleet risk solutions',
        'Hotel Services – hotel and B&B ratings',
      ],
      [
        'Event signs',
        'Event traffic management',
        'Driver licence checking',
        'Vixa Pro – vehicle health insights',
      ],
      ['Driver training', 'Driver assessments', 'Free resources'],
    ],
  },
  {
    title: 'Business news and support',
    columns: [
      ['Fuels and the environment', 'London congestion charge', 'Motoring costs'],
      ['Latest crash test results', 'Hotel and restaurant industry awards'],
    ],
  },
];

export default function BusinessLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="bg-white sm:max-w-[1130px] mx-4  space-y-10 my-4 sm:!mx-auto">
      {businessData.map((block, index) => (
        <div key={index} className="border border-gray-200 p-12">
          <h2 className="!text-[17px] !text-gray-700 mb-4 !font-normal">{block.title}</h2>
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: isMobile
                ? 'repeat(1, minmax(0, 1fr))'
                : `repeat(${block.columns.length}, minmax(0, 1fr))`,
            }}
          >
            {block.columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`
              space-y-6
              pr-6
              ${colIdx !== 0 ? 'md:border-l md:pl-14' : ''}
              ${
                colIdx !== block.columns.length - 1
                  ? 'border-b md:border-b-0 pb-6  md:pb-0 md:mb-0'
                  : ''
              }
              border-gray-300
            `}
              >
                {col.map((item, itemIdx) => (
                  <a
                    href="#"
                    key={itemIdx}
                    className="!text-[#07818c] !no-underline !text-[16px] font-semibold hover:underline block"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
