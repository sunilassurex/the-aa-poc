import React from 'react';

export type PromoGridVariant = 'cards' | 'promo-section';

export interface PromoCard {
  title: string;
  description: string;
  buttonText: string;
  variant: 'primary' | 'secondary';
  backgroundImage?: string;
}

export interface PromoSectionContent {
  heading: string;
  description: string;
  buttonLabel: string;
  backgroundImage?: string;
  link?: string;
  variant?: 'primary' | 'secondary';
}

export interface PromoGridProps {
  variant?: PromoGridVariant;
  cards?: PromoCard[];
  sections?: PromoSectionContent[];
}

const PromoGrid: React.FC<PromoGridProps> = ({ variant = 'cards', cards = [], sections = [] }) => {
  const renderButton = (
    label: string,
    variant: 'primary' | 'secondary' = 'primary',
    fullWidth = false
  ) => {
    const baseClasses =
      'font-newtransport font-bold rounded transition text-[1.8rem] py-[0.9rem] px-[2rem] md:pt-[1.3rem] md:px-[2.7rem] md:pb-[1.5rem]';
    const widthClasses = fullWidth ? 'w-full md:w-auto' : '';
    const primaryClasses =
      'bg-gradient-to-b from-[#3d3d3d] to-[#161616] text-white border border-[#151515] hover:bg-[#5e5e5e]';
    const secondaryClasses =
      'text-black bg-transparent border-[0.2rem] border-[#1d1d1d] hover:bg-[#dcddde]';

    return (
      <button
        className={`${baseClasses} ${widthClasses} ${
          variant === 'primary' ? primaryClasses : secondaryClasses
        }`}
      >
        {label}
      </button>
    );
  };

  if (variant === 'promo-section' && sections.length > 0) {
    return (
      <div className="bg-gray-100 space-y-10 py-[1rem] md:py-[1.5rem]">
        <div className="wrapper px-[1rem]">
          {sections.map((section, idx) => (
            <a href={section.link || '#'} key={idx}>
              <div
                className={`min-h-[391px] text-center md:max-w-[1160px] mx-auto pt-[4.2rem] px-[2.4rem] pb-[4rem] md:px-[12.6rem] md:pb-[6rem] md:pt-[5.2rem] shadow flex flex-col justify-center items-center bg-white ${
                  section.backgroundImage ? 'bg-cover bg-no-repeat bg-right' : ''
                }`}
                style={
                  section.backgroundImage
                    ? { backgroundImage: `url(${section.backgroundImage})` }
                    : {}
                }
              >
                <h2 className="text-[1.9rem] md:text-[2.4rem] leading-[2.4rem] mb-[1.3rem] md:mb-[2rem] font-newtransport font-bold">
                  {section.heading}
                </h2>
                <p className="text-[1.8rem] md:text-[1.6rem] leading-[2.5rem] text-gray-700 font-newtransport mb-[2.4rem]">
                  {section.description}
                </p>
                {renderButton(section.buttonLabel, section.variant || 'primary', true)}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // cards variant
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:px-0 px-4 text-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded min-h-[250px] xl:min-h-[329.6px] flex flex-col justify-between text-black px-10 xl:px-20 py-12 xl:py-25 ${
              card.backgroundImage ? 'bg-cover bg-no-repeat bg-center' : 'bg-white'
            }`}
            style={
              card.backgroundImage ? { backgroundImage: `url('${card.backgroundImage}')` } : {}
            }
          >
            <div>
              <h2 className="text-[2rem] md:text-[2.2rem] xl:text-[2.6rem] font-newtransport font-bold mb-4 xl:mb-5 leading-tight">
                {card.title}
              </h2>
              <p className="text-[18px] md:text-[17px] text-gray-800 leading-relaxed mb-4.5">
                {card.description}
              </p>
            </div>
            <div className="flex justify-center">{renderButton(card.buttonText, card.variant)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoGrid;
