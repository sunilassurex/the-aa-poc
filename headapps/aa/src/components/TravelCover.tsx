const travelCovers = [
  {
    title: 'Winter sports',
    description:
      'For your skiing and snowboarding holiday, winter sports cover can be added to our policies.',
  },
  {
    title: 'Backpacker',
    description: 'Year long cover for time out, travelling and working abroad.',
  },
  {
    title: 'Golf',
    description: 'Is your holiday on course? We cover golf as standard on your policy.',
  },
];

export default function OtherTravelCover() {
  return (
    <div className="max-w-[1160px] px-[2rem] mx-auto">
      <div className="bg-white shadow-md px-[2.7rem] pt-[3.2rem] pb-[2.1rem]">
        <div className="px-[2rem]">
          <h4 className="text-[2.4rem]  !font-bold mb-[1.2rem] tracking-[-.005em] leading-[3.2rem] text-black">
            Other travel cover
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {travelCovers.slice(0, 2).map((cover, index) => (
                <div key={index}>
                  <h3 className="text-teal-700 font-bold text-lg">{cover.title}</h3>
                  <p className="text-black">{cover.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-teal-700 font-bold text-lg">{travelCovers[2].title}</h3>
              <p className="text-black">{travelCovers[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
