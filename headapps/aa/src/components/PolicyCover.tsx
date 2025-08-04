// components/BreakdownCoverPolicy.tsx
import Image from 'next/image';

type BreakdownCoverPolicyProps = {
  heading: string;
  description: string;
  textAlign?: 'text-left' | 'text-center' | 'text-right';
};

const inclusions = [
  'We provide help for sudden or unexpected mechanical or electrical faults that prevent safe driving.',
  'We cover vehicles that are roadworthy and road legal.',
  'We provide help for breakdowns that happen more than 24 hours after cover has been purchased.',
];

const exclusions = [
  'This policy does not cover vehicles used for any commercial purpose, unless you buy Commercial Use.',
  'We cannot cover vehicles that aren’t taxed, insured and don’t have a valid MOT certificate.',
  'We cannot provide assistance if you call us out for the same fault within 28 days.',
];

export default function BreakdownCoverPolicy({
  heading,
  description,
  textAlign = 'text-center',
}: BreakdownCoverPolicyProps) {
  return (
    <section className="bg-white text-[#141415] py-[40px] px-[16px] max-w-[1152px] mx-auto">
      <div className="max-w-[1152px] mx-auto md:px-[16px]">
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

      <div className="grid md:grid-cols-2 gap-x-[24px]">
        {/* Inclusions Column */}
        <div className="">
          {inclusions.map((item, index) => (
            <div
              key={`inclusion-${index}`}
              className="flex items-start mb-[24px] gap-[16px] min-h-[48px]"
            >
              <div className="shrink-0">
                <Image
                  src="/check-circle.svg"
                  alt="Included"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-base text-[16px] text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        {/* Exclusions Column */}
        <div className=" md:mt-0">
          {exclusions.map((item, index) => (
            <div
              key={`exclusion-${index}`}
              className="flex items-start mb-[24px] gap-[16px] min-h-[48px]"
            >
              <div className="shrink-0">
                <Image
                  src="/cross-circle.svg"
                  alt="Excluded"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-base text-[16px] text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mx-auto md:px-[16px]">
        <a
          href="#"
          className="inline-flex items-center !text-[#007C91] !text-[16px] !leading-[24px] font-semibold !underline hover:no-underline"
        >
          <Image
            src="/download.svg" // replace with your actual image path
            alt="Download"
            width={23}
            height={23}
            className="!mr-[0px] md:!pb-[6px] !pb-[20px]"
          />
          Read more in our full breakdown cover terms and conditions
        </a>
      </div>
    </section>
  );
}
