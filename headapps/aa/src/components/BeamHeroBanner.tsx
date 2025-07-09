import Image from 'next/image';

interface BeamHeroBannerProps {
  mobileImageUrl: string;
  desktopImageUrl: string;
  headingText: string;
  altText?: string;
}

export default function BeamHeroBanner({
  mobileImageUrl,
  desktopImageUrl,
  headingText,
  altText = 'Hero banner',
}: BeamHeroBannerProps) {
  return (
    <div className="md:!py-[1.5rem] pt-[1rem]">
      <div className="relative !max-w-[192rem] md:!mx-auto">
        <div className="overflow-hidden md:mt-[-15px] mt-[-10px] p-0 mx-0 mb-0 relative h-[230px] md:h-[380px]">
          {/* Responsive Image using <picture> for true media query behavior */}
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopImageUrl} />
            <Image
              src={mobileImageUrl}
              alt={altText}
              fill
              sizes="100vw"
              className="object-cover object-[top_right] md:object-center z-0"
              priority
            />
          </picture>

          {/* Text Content */}
          <div className="relative z-10 h-full w-full md:max-w-[116rem] md:!mx-auto md:!flex md:!flex-wrap md:!items-center justify-center md:justify-start !px-[16px] md:!px-[40px] md:!pl-[27px] table">
            <div className="md:max-w-[636px] md:!flex align-middle md:!text-left text-center table-cell max-w-none">
              <h1 className="font-newtransport !font-bold !text-[28px] !leading-[32px] !mb-[16px] md:!text-[64px] md:!leading-[72px] !tracking-[0px] text-[#1d1d1d] md:!mb-[24px] !normal-case">
                {headingText}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
