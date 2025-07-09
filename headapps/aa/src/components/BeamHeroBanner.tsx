export default function BeamHeroBanner() {
  return (
    <div className="md:!py-[1.5rem] pt-[1rem]">
      <div className="relative !max-w-[192rem] md:!mx-auto">
        <div className="overflow-hidden md:mt-[-15px] mt-[-10px] !p-[0px] mx-[0px] mb-[0px]">
          <div
            // style={{ backgroundImage: "url('/hero-banner-image.png')" }}
            className="bg-[url('/hero-banner-image-mobile.png')] md:bg-[url('/hero-banner-image.png')] flex flex-wrap md:h-[380px] h-[230px] relative md:!bg-center bg-no-repeat bg-[top_right] bg-cover"
          >
            <div className="!px-[16px] table md:max-w-[116rem] md:!mx-auto md:!flex md:!flex-wrap md:!items-center z-[1] h-full flex-1 md:!px-[40px] md:!pl-[27px]">
              <div className="md:max-w-[636px] md:!flex align-middle table-cell max-w-none">
                <h1 className="font-newtransport !font-bold !text-[28px] !leading-[32px] !mb-[16px] md:!text-left text-center md:!text-[64px] md:!leading-[72px] !tracking-[0px] text-[#1d1d1d] md:!mb-[24px] !normal-case">
                  Quality insurance, backed by a brand you can trust
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
