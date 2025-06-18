// components/PromoGrid.tsx
export default function PromoGrid() {
  const cards = [
    {
      title: 'Car insurance',
      description:
        "Comprehensive cover for £250 or less – that's what 10% of new customers paid from December 2024 to February 2025.",
      buttonText: 'Get car Insurance',
      cardClass: 'bg-cover bg-no-repeat bg-center text-black px-17 py-26',
      buttonClass:
        'bg-gradient-to-b from-[#3d3d3d] to-[#161616] text-white font-bold py-3 md:px-15 px-14 rounded border-[1px] border-[#151515] !text-[1.9rem] transition hover:bg-[#5e5e5e] hover:from-transparent hover:to-transparent',
      backgroundImage: '/large-beam.webp',
    },
    {
      title: 'Book your MOT and service',
      description:
        'All garages are AA approved, parts are guaranteed for 1 year, and you can spread the cost in 4 interest-free instalments.',
      buttonText: 'Book your car in',
      cardClass: 'bg-white text-black px-17 !py-26 ',
      buttonClass:
        'bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-black font-bold py-3 md:px-15 px-14 rounded border-[1px] border-[#d6a500] !text-[1.9rem]  transition duration-300 hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]',
    },
    {
      title: 'Had an accident?',
      description:
        'Contact us first and we’ll handle everything – from vehicle recovery to making a claim.',
      buttonText: 'More about Accident Assist',
      cardClass: 'bg-white text-black px-17 py-26 ',
      buttonClass:
        'bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-black font-bold py-3 md:px-15 px-4 rounded border-[1px] border-[#d6a500] !text-[1.9rem]  transition duration-300 hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]',
    },
    {
      title: 'European breakdown cover',
      description:
        'Peace of mind abroad, with over 60,000 repairers and recovery operators in 44 countries across Europe.',
      buttonText: 'Buy European breakdown cover',
      cardClass: 'bg-cover bg-no-repeat bg-center text-black px-17 py-26',
      buttonClass:
        'bg-gradient-to-b from-[#3d3d3d] to-[#161616] text-white font-bold py-3 md:px-15 rounded border-[1px] border-[#151515] !text-[1.9rem]  transition hover:bg-[#3d3d3d] hover:from-transparent hover:to-transparent',
      backgroundImage: '/large-beam.webp',
    },
  ];

  const PromoCard = ({
    title,
    description,
    buttonText,
    cardClass,
    buttonClass,
    backgroundImage,
  }: {
    title: string;
    description: string;
    buttonText: string;
    cardClass: string;
    buttonClass: string;
    backgroundImage?: string;
  }) => {
    return (
      <div
        className={`rounded-md min-h-[302.6px] flex flex-col justify-between  ${cardClass}`}
        style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {}}
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4 text-[16px] md:text-[17px]">{description}</p>
        </div>
        <div className="flex justify-center">
          <button className={`${buttonClass} shadow-[inset_0_3px_3px_rgba(255,255,255,0.7)]`}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 px-4 items-center text-center">
        {cards.map((card, index) => (
          <PromoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
