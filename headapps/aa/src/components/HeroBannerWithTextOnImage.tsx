import Image from 'next/image';
import React from 'react';

export interface HeroButton {
  label: string;
  primary?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface HeroBannerProps {
  variant: 'imageOverlay' | 'solidBackground' | 'circleOffer';
  heading: string;
  paragraph?: string;
  additionalText?: string;
  imageMobile?: string;
  imageDesktop?: string;
  backgroundImage?: string;
  buttons?: HeroButton[];
  circleText?: string;
  circleImage?: string;
  vanImage?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  variant,
  heading,
  paragraph,
  additionalText,
  imageMobile,
  imageDesktop,
  backgroundImage,
  buttons = [],
  circleImage,
  vanImage,
}) => {
  const isSingleButton = buttons.length === 1;

  if (variant === 'circleOffer') {
    return (
      <section
        className="bg-[#ffd300] w-full py-10 px-4 md:px-10"
        role="region"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Circle with text inside */}
          <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] flex-shrink-0">
            {circleImage && (
              <Image
                src={circleImage}
                alt="Decorative circle"
                layout="fill"
                objectFit="contain"
                priority
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <p className="text-[2.4rem] md:text-[3rem] font-extrabold leading-tight">33%</p>
              <p className="text-[0.9rem] md:text-[1rem] font-bold uppercase">
                Off Breakdown Cover
              </p>
            </div>
          </div>

          {/* Van Image */}
          {vanImage && (
            <div className="w-[240px] md:w-[360px] relative">
              <Image
                src={vanImage}
                alt="AA Van"
                layout="responsive"
                width={360}
                height={200}
                priority
              />
            </div>
          )}
        </div>

        {/* Text and Buttons */}
        <div className="text-center mt-8">
          <h2 id="hero-heading" className="text-[1.2rem] font-semibold md:text-[1.5rem] mb-2">
            {heading}
          </h2>
          {paragraph && <p className="text-md md:text-lg mb-2">{paragraph}</p>}
          {additionalText && <p className="text-sm md:text-base mb-4">{additionalText}</p>}

          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 ${
              isSingleButton ? 'items-center' : ''
            }`}
          >
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                type="button"
                onClick={btn.onClick}
                aria-label={btn.ariaLabel || btn.label}
                className={`${
                  btn.primary
                    ? 'bg-black text-white'
                    : 'border border-black text-black hover:bg-black hover:text-white'
                } font-bold py-3 px-6 text-base rounded transition`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (variant === 'imageOverlay') {
    return (
      <section
        aria-labelledby="hero-heading"
        className="relative !w-full xl:-mt-[1.5rem]"
        role="region"
      >
        {imageMobile && (
          <div className="md:hidden">
            <Image
              src={imageMobile}
              alt="Mobile hero background"
              layout="responsive"
              width={375}
              height={500}
              priority
            />
          </div>
        )}
        {imageDesktop && (
          <div className="hidden md:block relative ">
            <Image
              src={imageDesktop}
              alt="Desktop hero background"
              layout="responsive"
              width={5920}
              height={500}
              priority
            />
          </div>
        )}

        <div className="absolute top-0 left-0 right-0 bottom-0 flex  ">
          <div className="text-center !mt-[2.7rem] md:!mt-[2.7rem] xl:!mt-[4rem] w-full max-w-[80%] xl:max-w-[95%] text-white mx-auto ">
            <article>
              <h1
                id="hero-heading"
                className="!text-[1.15rem] !tracking-[0.04em] text-white xl:!text-[1.4rem] md:!text-[1.2rem] xl:leading-[2.2rem] md:leading-[1.8rem] leading-[1.8rem] !font-light uppercase !pb-[0.8rem] md:!pb-[0.8rem] xl:!pb-[2.5rem] mb-0"
              >
                {heading}
              </h1>
              {paragraph && (
                <p className="!text-[3.6rem] md:!text-[3.6rem]  xl:!text-[6.4rem] md:leading-[4.2rem] xl:leading-[7.4rem] leading-[4.2rem] font-bold !mb-[8px]  mx-auto">
                  {paragraph}
                </p>
              )}
              {additionalText && (
                <h3 className="!text-[2rem] text-white md:!text-[1.9rem]  xl:!text-[2.6rem] !leading-[2.7rem] md:!leading-[2.4rem] xl:!leading-[3.6rem] tracking-[-0.005em] !font-light !pt-[1rem] !pb-[2rem] md:!pt-[1rem] md:!pb-[2rem] xl:!pt-[2.5rem] xl:!pb-[4.1rem] mb-0">
                  {additionalText}
                </h3>
              )}

              <div
                className={`mt-[3.2rem] mb-[3.5rem] flex ${
                  isSingleButton ? 'justify-center' : 'flex-col sm:flex-row justify-center gap-4'
                }`}
              >
                {buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={btn.onClick}
                    aria-label={btn.ariaLabel || btn.label}
                    className={`${
                      btn.primary
                        ? 'bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d]'
                        : 'border border-[#151515] text-black hover:bg-[#dcddde] hover:text-white'
                    } font-bold md:!pt-[0.9rem] md:!pb-[0.9rem] !pt-[0.9rem] !pb-[0.9rem] !px-[2rem] w-full  xl:!pt-[1.4rem] xl:!pb-[1.66rem] xl:!px-[2.8rem] md:!px-[2rem] !text-[1.8rem] leading-[0.015rem] md:leading-[2rem] xl:!leading-[1.9rem] !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] xl:tracking-[0.03em] md:tracking-[0.015em] !rounded-[0.5rem]  md:w-auto transition focus:outline  focus:outline-offset-2 focus:outline-yellow-400`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full h-full bg-yellow-300 bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      role="region"
    >
      <div className="mx-auto min-h-auto md:px-[18rem] md:min-h-[301px] flex flex-col items-center text-center">
        <article className="mx-auto w-full">
          <h1 id="hero-heading" className="text-[36px] md:text-5xl font-bold text-black mb-4">
            {heading}
          </h1>
          {paragraph && <p className="text-[20px] md:text-2xl text-black mb-6">{paragraph}</p>}
          {imageDesktop && (
            <div className="w-full flex justify-center mb-6">
              <Image
                src={imageDesktop}
                alt="Breakdown van"
                width={300}
                height={180}
                className="md:w-auto md:h-auto"
                priority
              />
            </div>
          )}
          <div
            className={`flex ${
              isSingleButton ? 'justify-center' : 'flex-col sm:flex-row justify-center gap-4'
            } mb-[20px]`}
          >
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                type="button"
                onClick={btn.onClick}
                aria-label={btn.ariaLabel || btn.label}
                className={`${
                  btn.primary
                    ? 'bg-gradient-to-b from-[#3d3d3d] to-[#161616] text-white'
                    : 'border border-[#151515] text-black hover:bg-[#dcddde] hover:text-white'
                } font-bold py-2 px-14 md:px-6 text-[1.1rem] rounded transition shadow-[inset_0_4px_4px_rgba(255,255,255,0.15)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroBanner;
