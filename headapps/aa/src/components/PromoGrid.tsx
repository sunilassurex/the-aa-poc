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
      <div className="bg-gray-100 space-y-10 px-[2rem] py-[1.5rem] md:!py-[1.5rem]">
        <div className="wrapper">
          {/* Vixa Block */}
          <div className="bg-white text-center md:max-w-[1160px] mx-auto pt-[4.2rem] px-[2.4rem] pb-[4rem] md:min-h-[300px] md:px-[12.6rem] md:pb-[6rem] md:pt-[5.2rem] shadow flex flex-col justify-center items-center">
            <h2 className="md:!text-[2.4rem] md:mt-0 font-newtransport !font-bold md:!mb-[2rem]">
              Vixa from The AA
            </h2>
            <p className="md:mb-[2.4rem] md:!text-[1.6rem] text-gray-700 font-newtransport !font-regular">
              Stay in the know and on the move with Vixa, our car care device and app.
              <br />
              <br />
              Get battery and engine health notifications to your phone, message mechanics directly
              for expert advice, and book an AA Mobile Mechanic to come to you if you need something
              fixed.
              <br />
              <br />
              Personalised insights – reliable fixes – upfront pricing.
            </p>
            <button className="shadow-custom-inset pt-[1.3rem] pb-[1.3rem] w-full md:w-auto  md:pt-[1.3rem] md:px-[2.7rem] md:pb-[1.5rem] !text-[1.8rem] md:!text-[1.8rem] bg-gradient-to-b from-[#ffcc00] to-[#f9b800]  text-black font-bold  rounded border border-[#d6a500]  shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]  transition duration-300  hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]">
              Go to Vlxa
            </button>
          </div>

          {/* Car Lease Block */}
          <div
            className="text-center md:mt-[2rem] md:max-w-[1160px] mx-auto pt-[4.2rem] px-[2.4rem] pb-[4rem] md:min-h-[300px] md:px-[12.6rem] md:pb-[6rem] md:pt-[5.2rem] shadow flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[position:right_0]"
            style={{ backgroundImage: "url('/large-beam.webp')" }}
          >
            <h2 className="md:!text-[2.4rem] md:mt-0 font-newtransport !font-bold md:!mb-[2rem]">
              Looking for your next car?
            </h2>
            <p className="md:mb-[2.4rem] md:!text-[1.6rem] text-gray-700 font-newtransport !font-regular">
              Interested in leasing a brand-new car with the latest tech? Prefer to buy a
              second-hand one with the confidence that it comes with free breakdown cover and a
              history check? With more than 100,000 cars to choose from, we’ve got you covered.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`font-semibold rounded shadow w-full md:w-auto pt-[1.3rem] px-[2.7rem] pb-[1.5rem] md:pt-[1.3rem] md:px-[2.7rem] md:pb-[1.5rem] ${
                    btn.variant === 'primary'
                      ? 'font-newtransport !font-bold !text-[1.8rem] w-full md:!text-[1.8rem] bg-gradient-to-b from-[#3d3d3d] to-[#161616]  text-white border-[1px] border-[#151515]  shadow-[inset_0_4px_4px_rgba(255,255,255,0.15)] transition hover:bg-[#5e5e5e]'
                      : 'font-newtransport !font-bold text-black bg-transparent border-[0.2rem] border-[#1d1d1d] !text-[1.8rem] md:!text-[1.8rem] md:pt-[1.2rem] md:px-[3rem] md:pb-[1.4rem] hover:!bg-[#dcddde]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
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
      buttonText: 'Get car Insurance',
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
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:!px-0 px-4 text-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded  min-h-[250px] xl:min-h-[329.6px] flex flex-col justify-between text-black px-10 xl:px-20 py-12 xl:py-25 ${
              card.backgroundImage ? 'bg-cover bg-no-repeat bg-center' : 'bg-white'
            }`}
            style={
              card.backgroundImage ? { backgroundImage: `url('${card.backgroundImage}')` } : {}
            }
          >
            <div>
              <h2 className="!text-[2rem] md:text-[2.2rem] xl:!text-[2.6rem] font-newtransport !font-bold mb-4 xl:mb-5 leading-tight">
                {card.title}
              </h2>
              <p className="!text-[18px] md:text-[17px] text-gray-800 leading-relaxed mb-4.5">
                {card.description}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className={`w-full md:w-auto font-bold py-4 px-6 md:px-12 rounded shadow-[inset_0_3px_3px_rgba(255,255,255,0.7)] transition !text-[2rem] md:text-[1.2rem] xl:!text-[2rem] ${
                  card.variant === 'primary'
                    ? 'bg-gradient-to-b from-[#3d3d3d] to-[#161616] text-white border !border-[#151515] hover:!bg-[#3d3d3d]'
                    : 'bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-black border border-[#d6a500] hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]'
                }`}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
