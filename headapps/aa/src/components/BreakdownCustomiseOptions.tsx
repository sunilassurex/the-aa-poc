import Image from 'next/image';
type BreakdownCoverOptionsProps = {
  variant?: 'default' | 'personal' | 'customise';
  layout?: 'horizontal' | 'vertical';
};

const features = [
  {
    icon: 'at-home.svg',
    title: 'At Home',
    description:
      "If your vehicle won't start or breaks down within 1/4 mile of your home, you'll get a recovery tow to a nearby garage.",
  },
  {
    icon: 'national-recovery.svg',
    title: 'National Recovery',
    description:
      "If you break down and we can't fix your vehicle at the roadside, we'll take you, your vehicle and up to 7 passengers to any single UK destination.",
  },
  {
    icon: 'onward-travel.svg',
    title: 'Onward Travel',
    description:
      "If you break down and need repairs that stop your journey, we'll help with alternative transport or an overnight hotel stay.",
  },
  {
    icon: 'parts-and-garage-cover.svg',
    title: 'Parts and Garage Cover',
    description:
      'If you break down and need parts at the roadside or repairs at a garage, we’ll help cover costs up to £535.',
  },
  {
    icon: 'commercial-use.svg',
    title: 'Commercial Use',
    description:
      'If you have a vehicle being used to carry equipment, people or goods in return for payment, we’ll cover you.',
  },
  {
    icon: 'key-cover.svg',
    title: 'Key Cover',
    description:
      'If your car keys or house keys are lost, stolen or broken, or you’re locked out, we’ll arrange a replacement key or locksmith.',
  },
];

const personalFeatures = [
  {
    icon: 'people-mechanic-yellow.svg',
    title: 'Assistance when you need it',
    description:
      "Breaking down in a vehicle as a passenger is stressful, but with our personal breakdown cover, you're always protected. No matter who's driving, our team will help you.",
  },
  {
    icon: 'breakdown-cover-car.svg',
    title: 'Help at the roadside',
    description: 'If you break down, our patrols will aim to fix the vehicle at the roadside.',
  },
  {
    icon: 'national-recovery-yellow.svg',
    title: 'Get recovery to a local garage',
    description:
      'If we can’t fix the problem, we’ll take your vehicle to a local garage for further assistance.',
  },
  {
    icon: 'tools-yellow.svg',
    title: 'Always here for you',
    description:
      "Call the AA or use our app to report your breakdown and get assistance. With the app, you'll get real-time updates, and you can track the arrival of the breakdown service.",
  },
];

const customiseFeatures = [
  {
    icon: 'national-recovery-yellow.svg',
    title: 'National Recovery',
    description:
      "If you break down and we can't fix your vehicle at the roadside, we'll take you, your vehicle and up to 7 passengers to any single UK destination.",
  },
  {
    icon: 'onward-travel-yellow.svg',
    title: 'Onward Travel',
    description:
      "If you break down and need repairs that stop your journey, we'll help with alternative transport or an overnight hotel stay.",
  },
  {
    icon: 'parts-and-garage-cover-yellow.svg',
    title: 'Parts and Garage Cover',
    description:
      'If you break down and need parts at the roadside or repairs at a garage, we’ll help cover costs up to £535.',
  },
  {
    icon: 'commercial-use-yellow.svg',
    title: 'Commercial Use',
    description:
      'If you have a vehicle being used to carry equipment, people or goods in return for payment, we’ll cover you.',
  },
  {
    icon: 'key-cover-yellow.svg',
    title: 'Key Cover',
    description:
      'If your car keys or house keys are lost, stolen or broken, or you’re locked out, we’ll arrange a replacement key or locksmith.',
  },
];

const variantContent = {
  default: {
    heading: 'How can I customise my AA breakdown cover?',
    description:
      "You'll get Roadside Assistance as standard, but you can customise your cover to fit your needs – giving you more choices in the event of a breakdown. Whether it's a quick fix at the roadside or recovery to a garage, we've got you covered.",
    textAlign: 'text-center',
  },
  personal: {
    heading: 'How does personal breakdown cover work?',
    description:
      "Breakdowns can happen anywhere, whether you're running errands or on a road trip. Personal breakdown cover protects you as a driver in any car, motorbike or van used for private and domestic purposes. You can however be covered for commercial purposes if you buy Commercial Use with your standard breakdown cover.",
    textAlign: 'text-left',
  },
  customise: {
    heading: 'How can I customise my AA breakdown cover?',
    description:
      'At Home is one of our most popular options for breakdown cover, but it doesn’t end there. You can also choose other products, allowing you to create a personalised breakdown cover policy. With these, you’ll have more choices in the event of a breakdown.',
    textAlign: 'text-center',
  },
};

export default function BreakdownCoverOptions({
  variant = 'default',
  layout = 'horizontal',
}: BreakdownCoverOptionsProps) {
  const { heading, description, textAlign } = variantContent[variant];

  return (
    <section className=" mx-auto py-[40px]">
      <div className="max-w-[1152px] mx-auto px-[16px]">
        <h2
          className={`!text-[32px] !leading-[40px] !font-normal ${textAlign} !mb-[16px]`}
          style={{ fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif' }}
        >
          {heading}
        </h2>

        <p
          className={`!text-[16px] !leading-[24px] !font-newtransport !font-normal mx-auto !mb-[24px] text-[#1d1d1d] ${textAlign}`}
        >
          {description}
        </p>
      </div>

      <div className="max-w-[1152px] mx-auto  px-[16px] ">
        {variant === 'personal' ? (
          <div className="flex flex-col gap-[24px]">
            {personalFeatures.map((item, index) => (
              <div key={index} className="flex items-start ">
                <div className=" shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain !mr-[16px]"
                  />
                </div>
                <div>
                  <h3 className="!tracking-[0px] !font-newtransport !font-bold !text-[20px] !leading-[30px] !mb-[8px]">
                    {item.title}
                  </h3>
                  <p className="!text-[16px] !font-newtransport !font-normal !leading-[23.95px] text-[#1d1d1d] m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : variant === 'customise' ? (
          <div className="flex flex-wrap justify-start gap-y-[24px] gap-x-[24px]">
            {customiseFeatures.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[30.9%] xl:w-[31.84%] flex flex-col items-center text-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="!mb-[18px]"
                />
                <h3 className="!text-[#06757f] !tracking-[0px] !font-newtransport !font-bold !underline !text-[20px] !leading-[30px] !mb-[8px]">
                  {item.title}
                </h3>
                <p className="!text-[16px] !font-newtransport !font-normal !leading-[24px] text-[#1d1d1d] m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex !flex-wrap max-w-[1152px] mx-auto justify-start xl:!gap-x-[27px] md:!gap-x-[20px]">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full mb-[24px] xl:w-[48.68%] md:w-[calc(50%-10px)]"
              >
                <div
                  className={`${
                    layout === 'vertical'
                      ? 'flex flex-col pl-1 items-center text-center'
                      : 'flex items-start'
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className={`${
                      layout === 'vertical' ? 'xl:!mb-[18px] !mb-[18px]' : '!mr-[16px]'
                    }`}
                  />
                  <div>
                    <h3
                      className={`!text-[#06757f] !tracking-[0px] !font-newtransport !font-bold !underline !text-[20px] !leading-[30px] !mb-[8px] ${
                        layout === 'vertical' ? 'text-center' : ''
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`!text-[16px] !font-newtransport !font-normal !leading-[24px] text-[#1d1d1d] m-0 ${
                        layout === 'vertical' ? 'text-center' : ''
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {variant === 'default' && (
        <div className="flex justify-center mt-13.5">
          <div className="relative inline-block group rounded-[4px] overflow-hidden">
            <button className="bg-[#ffd300] !text-[#1d1d1d] font-bold !rounded-[4px] px-[33px] !text-[18px] !leading-[51.5px] tracking-[.054px] w-full h-full">
              Help me choose
            </button>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:!opacity-20 transition-opacity duration-300 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      )}
    </section>
  );
}
