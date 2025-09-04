type TravelCover = {
  title: string;
  description: string;
};

type OtherTravelCoverProps = {
  heading?: string;
};

const travelCovers: TravelCover[] = [
  {
    title: 'Winter sports',
    description:
      'For your skiing and snowboarding holiday, winter sports cover can be added to our policies.',
  },
  {
    title: 'Golf',
    description: 'Is your holiday on course? We cover golf as standard on your policy.',
  },
  {
    title: 'Backpacker',
    description: 'Year long cover for time out, travelling and working abroad.',
  },
];

export default function OtherTravelCover({
  heading = 'Other travel cover',
}: OtherTravelCoverProps) {
  return (
    <div className="xl:max-w-[1160px] md:max-w-[74.6rem] xl:px-[2rem] md:px-[1.1rem] mx-auto">
      <div className="bg-white xl:px-[2.7rem] px-[1.8rem] xl:pt-[3.2rem] pt-[2rem] xl:pb-[2.1rem] pb-[1.5rem] !shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.1)] ">
        <div className="xl:px-[2rem] px-[1.1rem]">
          <h4 className="xl:!text-[2.4rem] md:!text-[1.9rem] !text-[1.7rem] !font-bold xl:!mb-[1.2rem] !mb-[1.2rem] md:!mb-[.4rem] tracking-[-.005em] xl:leading-[3.2rem] leading-[2.4rem] text-black">
            {heading}
          </h4>
          <div className="grid md:grid-cols-2">
            {travelCovers.map((cover, index) => (
              <div key={index} className="xl:pr-[19rem] md:pr-[2.8rem]">
                <h5 className="!mb-[0.4rem] xl:!text-[1.9rem] md:!text-[1.8rem] xl:!leading-[3.5rem] md:!leading-[3.5rem] font-newtransport ">
                  <a href="#" className="!text-teal-700 hover:!underline">
                    {cover.title}
                  </a>
                </h5>
                <p className="text-black xl:!text-[14.2px] md:text-[1.3rem] !tracking-[0px] !leading-[2.1rem] xl:!mb-[1.3rem] !md:[1rem]">
                  {cover.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
