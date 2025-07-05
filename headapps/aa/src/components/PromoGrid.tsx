// import Image from 'next/image'
type PromoGridVariant = 'cards' | 'promo-section';

interface PromoGridProps {
  variant?: PromoGridVariant;
}

export default function PromoGrid({ variant = 'cards' }: PromoGridProps) {
  const buttons = [
    {
      label: 'Get a brand-new lease car',
      variant: 'primary',
    },
    {
      label: 'Buy a used car',
      variant: 'secondary',
    },
  ];

  if (variant === 'promo-section') {
    return (
      <div className="bg-gray-100  space-y-10 md:py-[1.5rem] py-[1rem] ">
        <div className="wrapper !px-[1rem]">
          {/* Vixa Block */}
          <div className="md:!min-h-[390.6px] min-h-[479.6px] md:!pb-[1.5rem]">
            <div className="  bg-white text-center  md:max-w-[1120px] mx-auto !pt-[3.9rem] !px-[2.4rem] !pb-[4rem]  md:!px-[12.6rem] md:!pb-[6rem] md:!pt-[5.25rem] flex flex-col justify-center items-center">
              <h2 className="md:!text-[2.4rem] md:leading-[3.2rem] md:text-[#1d1d1d] md:!tracking-[-.025em] !text-[1.9rem] leading-[2.4rem] !mt-[25px] !mb-[1.3rem] md:mt-0 font-newtransport !font-bold md:!mb-[2.4rem]">
                Vixa from The AA
              </h2>
              <p className="!font-normal text-[#1d1d1d] tracking-[.025em] !mb-[2.4rem]  md:!mb-[2.45rem] md:!text-[1.6rem] !text-[1.8rem] !leading-[2.5rem] md:!leading-[2.19rem]  font-newtransport !font-regular">
                Stay in the know and on the move with Vixa, our car care device and app.
                <br />
                <br />
                Get battery and engine health notifications to your phone, message mechanics
                directly for expert advice, and book an AA Mobile Mechanic to come to you if you
                need something fixed.
                <br />
                <br />
                Personalised insights – reliable fixes – upfront pricing.
              </p>
              <button
                className="shadow-custom-inset md:w-auto w-full py-[0.85rem] px-[2rem] !text-[1.8rem] !tracking-[0.015em] md:!pt-[1.27rem] md:!px-[2.7rem] md:!pb-[1.55rem] md:!leading-[2rem] md:!tracking-[0.03em] md:!text-[1.8rem] bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d] border !border-[#ffc400]
          !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] !rounded-[5px]
          hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633] font-semibold"
              >
                Go to Vixa
              </button>
            </div>
          </div>

          {/* Car Lease Block */}
          <div className="min-h-[391px] md:!min-h-[324.6px] !py-[1.5rem]">
            <div
              className=" text-center   md:max-w-[1120px] mx-auto !pt-[3.8rem] px-[2.4rem] pb-[4rem]  md:!px-[12.6rem] md:pb-[6rem] md:!pt-[5.2rem] shadow flex flex-col justify-center md:items-center bg-no-repeat bg-cover bg-[position:right_0]"
              style={{ backgroundImage: "url('/large-beam.webp')" }}
            >
              <h2 className="md:!text-[2.4rem] md:leading-[3.2rem] md:text-[#1d1d1d] md:!tracking-[-.025em] !text-[1.9rem] leading-[2.4rem] !mt-[25px] !mb-[1.25rem] md:mt-0 font-newtransport !font-bold md:!mb-[2.4rem]">
                Looking for your next car?
              </h2>
              <p className="!font-normal text-[#1d1d1d] tracking-[.025em] !mb-[2.4rem]  md:!mb-[2.35rem] md:!text-[1.6rem] !text-[1.8rem] !leading-[2.5rem] md:!leading-[2.2rem]  font-newtransport !font-regular">
                Interested in leasing a brand-new car with the latest tech? Prefer to buy a
                second-hand one with the confidence that it comes with free breakdown cover and a
                history check? With more than 100,000 cars to choose from, we’ve got you covered.
              </p>
              <div
                className={`flex ${
                  buttons.length === 1
                    ? 'justify-center'
                    : 'justify-center md:!gap-x-[2rem] gap-y-[2rem] '
                } flex-wrap`}
              >
                {buttons.map((btn, index) => (
                  <button
                    key={index}
                    className={`md:w-auto w-full md:!min-w-[12rem] font-semibold !px-[2rem] !py-[0.85rem] !tracking-[0.01em] md:!tracking-[.03em] md:!pt-[1.2rem] md:!px-[2.66rem] md:!pb-[1.4rem] !rounded-[5px] transition !text-[1.83rem] md:!text-[1.8rem] leading-[.018em] md:!leading-[2.1rem]  ${
                      btn.variant === 'primary'
                        ? ' bg-gradient-to-b from-[#3d3d3d] md:!ml-[2.8rem]  to-[#161616] text-white border !border-[#151515] !shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)] hover:bg-none hover:!bg-[#3d3d3d]'
                        : 'font-newtransport md:!px-[3rem] md:!mr-[2.8rem] md:!pt-[1.2rem] md:!pb-[1.35rem] !font-bold text-[#1d1d1d] bg-transparent rounded border-[0.2rem] border-[#1d1d1d] md:!text-[1.8rem]  hover:!bg-[#dcddde]'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default = 'cards'
  const cards = [
    {
      title: 'Car insurance',
      description:
        "Comprehensive cover for £250 or less – that's what 10% of new customers paid from December 2024 to February 2025.",
      buttonText: 'Get car insurance',
      variant: 'primary',
      backgroundImage: '/large-beam.webp',
    },
    {
      title: 'Book your MOT and service',
      description:
        'All garages are AA approved, parts are guaranteed for 1 year, and you can spread the cost in 4 interest-free instalments.',
      buttonText: 'Book your car in',
      variant: 'secondary',
    },
    {
      title: 'Had an accident?',
      description:
        'Contact us first and we’ll handle everything – from vehicle recovery to making a claim.',
      buttonText: 'More about Accident Assist',
      variant: 'secondary',
    },
    {
      title: 'European breakdown cover',
      description:
        'Peace of mind abroad, with over 60,000 repairers and recovery operators in 44 countries across Europe.',
      buttonText: 'Buy European breakdown cover',
      variant: 'primary',
      backgroundImage: '/large-beam.webp',
    },
  ];

  return (
    <section className="bg-gray-100 md:py-[1.5rem] py-[1rem]">
      <div className="w-full max-w-[1160px] px-[1rem] md:px-[20px] mx-auto">
        <div className="grid grid-cols-1 md:gap-y-12 !shadow-xs   md:grid-cols-2 text-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={` relative w-full flex flex-col justify-center items-center text-black !pt-[4rem] px-[2.4rem] pb-[4rem] md:px-[4.4rem] md:pb-[5.749rem] md:!pt-[5.15rem] min-h-[255px] md:min-h-[302.2px]  ${
                card.backgroundImage ? 'bg-contain bg-no-repeat bg-center' : 'bg-white'
              } ${index % 2 === 1 && index !== cards.length - 1 ? 'mb-[2.1rem] md:mb-0' : ''}
    `}
              style={
                card.backgroundImage
                  ? {
                      backgroundImage: `url('${card.backgroundImage}')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top right', // push the light beam upward
                      backgroundSize: 'cover', // maintain aspect ratio and fill
                    }
                  : {}
              }
            >
              <a href={' '} className="block w-full">
                <div>
                  <h2 className="!mb-[1.3rem] !text-[1.9rem] !leading-[2.4rem] tracking-[0] md:!text-[2.4rem] md:!leading-[3.2rem] md:!tracking-[-.025em] xl:!text-[2.4rem] font-newtransport !font-bold md:!my-[1.98rem] md:!mb-[2rem]">
                    {card.title}
                  </h2>

                  <p className="font-newtransport !font-light !text-[1.8rem] !tracking-[.025em] text-[rgb(29, 29, 29)] !leading-[2.51rem] !mb-[2.4rem] !font-normal md:!leading-[2.22rem] md:!mb-[2.342rem] md:!text-[1.6rem] md:!tracking-[.025em] text-[#1d1d1d]">
                    {card.description}
                  </p>
                </div>
              </a>
              <div className="flex justify-center !w-full md:!w-auto">
                <button
                  className={`!w-full md:w-auto mx-auto font-bold !pt-[0.85rem] !tracking-[0.015em] !pb-[0.8rem] md:!pt-[1.24rem] md:!px-[2.73rem] md:!pb-[1.35rem] !rounded-[5px] transition !text-[1.8rem] md:!text-[1.85rem] leading-[.018em] md:!leading-[2.23rem] md:tracking-[.033em]
    ${
      card.variant === 'primary'
        ? ` !w-full
          bg-gradient-to-b from-[#3d3d3d]  to-[#161616] text-white border !border-[#151515]
          !shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)] md:!shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.7),_0_0_10px_rgba(0,0,0,0.2)]
          hover:bg-none hover:!bg-[#3d3d3d]
        `
        : `
          bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d] border !border-[#ffc400]
          !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] rounded-md
          hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]
        `
    }`}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
