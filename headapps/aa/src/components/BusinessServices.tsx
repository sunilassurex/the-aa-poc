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
  return (
    <div className="">
      <div className="max-w-[1160px] md:px-[2rem] px-[1rem] mx-auto flex flex-col">
        {businessData.map((block, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200
              xl:!my-[1.5rem]   /* ✅ Gives top + bottom margin */
              md:my-[1.5rem]
              my-[1rem]
              px-[2.3rem] pt-[2.5rem] pb-[0.5rem]
              md:px-[1.1rem] md:pt-[2.4rem] md:pb-[1.8rem]
              xl:px-[1.8rem] xl:pt-[3.45rem] xl:pb-[3.45rem]
              shadow-[0_3px_3px_rgba(192,195,195,0.1)]
            "
          >
            <h6
              className="
                xl:!text-[1.6rem] md:!text-[1.5rem] !text-[1.8rem]
                xl:leading-[2.1rem] md:leading-[1.9rem] leading-[2.5rem]
                tracking-[0.025rem] !text-black
                md:px-[2rem] xl:px-[2.9rem]
                md:!mb-[1.45rem] xl:!mb-[2.05rem] !mb-[1.55rem]
                !font-transport !font-normal
              "
            >
              {block.title}
            </h6>
            <div className="flex flex-col md:flex-row">
              {block.columns.map((col, colIdx) => (
                <ul
                  key={colIdx}
                  className={`
                    flex-1
                    !mb-0
                    md:!px-[1.9rem]
                    xl:!px-[2.9rem]
                    !pb-[1.9rem]
                    md:!pb-0
                    ${
                      colIdx !== 0
                        ? '!pt-[2.1rem] md:!pt-0 md:border-l md:border-t-0 border-t border-[#dcddde]'
                        : ''
                    }
                  `}
                >
                  {col.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={
                        itemIdx !== 0 ? 'xl:!pt-[1.7rem] md:!pt-[2.4rem] !pt-[2.1rem]' : ''
                      }
                      style={{
                        fontFamily: `Arial, "Helvetica Neue", Helvetica, Verdana, sans-serif`,
                      }}
                    >
                      <a
                        href="#"
                        className="
                          !text-[#07818c] no-underline
                          !text-[1.6rem] md:!text-[1.4rem] xl:!text-[1.6rem]
                          !leading-[2.1rem] xl:!leading-[2.2rem] md:!leading-[2rem]
                          hover:!underline block
                        "
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
