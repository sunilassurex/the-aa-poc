import Image from 'next/image';
import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';

interface OfferProps {
  heading: string;
  description: string;
  points: string[];
  buttonText: string;
  tickIcon: string;
  testimonial: {
    quote: string;
    author: string;
    date: string;
  };
}

export default function OfferAndTestimonial({
  heading,
  description,
  points,
  buttonText,
  tickIcon,
  testimonial,
}: OfferProps) {
  return (
    <section className="bg-white row">
      <div className="wrapper mx-auto grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left Section */}
        <div className="py-[49px] pl-[20px] pr-[64px]">
          <h2 className="mb-4 !text-[#2b2d32] !text-[24px] !leading-[28px] !tracking-[-0.5px] font-newtransport !font-bold">
            {heading}
          </h2>
          <p className="!text-[14px] !leading-[21px] font-arial">{description}</p>
          <div className="max-w-[720px]">
            <ul className="space-y-4 mb-6">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start pt-[16px] !text-[16px] text-[#2b2d32] !font-regular !leading-[1.25] tracking-normal font-newtransport"
                >
                  <Image
                    src={tickIcon}
                    alt="tick"
                    width={20}
                    height={20}
                    className="!mx-0 mt-[2px] !mr-[1rem] inline-block w-[21px] h-[21px] bg-no-repeat bg-[0_0] bg-transparent"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative left-[-18px]">
            <Buttons
              buttons={[
                {
                  href: 'https://www.beam.co.uk/car-insurance/sales/tiers/your-quote/retrieve',
                  title: 'Retrieve a quote',
                  buttonText: buttonText,
                  buttonType: Constant.BUTTONS.PRIMARY,
                  buttonTextAlign: 'text-left',
                },
              ]}
            ></Buttons>
          </div>
        </div>

        {/* Right Section (Testimonial) */}
        <div className="py-[49px]">
          <h2 className="block flex-[1_0_100%] !mb-10 text-[#2b2d32] !text-[24px] !leading-[28px] !tracking-[-0.5px] font-newtransport !font-bold"></h2>
          <div className="pl-[30px] pt-[4px]">
            <span className="text-[#ffcc00] !text-[60px] w-[24px] h-[24px] left-0 tracking-[-1.15px] block">
              “
            </span>
            <p className="text-[26px] text-[#1d1d1d] tracking-[-.5px] font-regular leading-[1.23]">
              {testimonial.quote}
            </p>
            <p className="text-[16px] leading-[1.5] tracking-[.25px] !font-bold text-[#2b2d32] font-arial !mb-0">
              {testimonial.author}
            </p>
            <p className="text-[16px] leading-[1.5] tracking-[.25px] !font-normal text-[#2b2d32] font-arial">
              {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
