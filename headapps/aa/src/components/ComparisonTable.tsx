/* eslint-disable react/no-unescaped-entities */
const coverFeatures = [
  'Courtesy car while your car is repaired by an approved repairer',
  "Uninsured driver promise – you won't pay an excess or lose your no claims discount if your car is hit by an uninsured driver",
  '24/7 claim helpline',
  'Liability to others for injury or damage to their property',
  'Named drivers can earn a no claims discount to use when they insure a car with us',
  "Emergency treatment – you're covered for any fees following an accident",
  "Car sharing scheme – the car you're insuring is covered",
  'No claims discount for claim-free driving',
  "Driving in Europe – up to 90 days' cover in the EU and several other European countries",
  'Garage custody and valet parking cover',
  'Fire and theft damage',
  'Replacement locks and keys – up to £1,000 cover with comprehensive cover',
  'Replacement child seats',
  'Accidental damage',
  'Windscreen, window and sunroof repairs without losing your no claims discount',
  'Personal belongings in your car – up to £250 cover',
  'Damage to trailers – up to £500 cover on single axle trailers',
  'Personal injury – up to £5,000 cover',
  'Medical expenses – up to £400 per person',
  'Accommodation or onward travel cover if you cannot continue your journey following an accident',
];

const ComparisonTable = () => {
  return (
    <div className="row">
      <div className="wrapper">
        <div className="wrapper">
          <section className="relative bg-[#fff] z-[0] block">
            <div className="wrapper">
              <div className="border-separate table-fixed relative z-0 align-top w-full mx-auto mt-[8rem] mb-[4rem]">
                <div className="table-row-group">
                  <header className="table-row">
                    {/* Left side: Cover Features */}
                    <div className="table-cell align-bottom pt-[1.8rem] pr-[2.5rem] pb-[1.7rem] pl-[2.5rem] w-1/2 text-left">
                      <h2 className="alt md:min-h-[6.8rem] md:!tracking-[0px] md:!m-0">
                        Cover features
                      </h2>
                    </div>

                    {/* Right side: Blue + Yellow */}
                    <div className="table-cell w-1/2 align-bottom p-0">
                      <div className="rounded-t-[0.5rem] overflow-hidden shadow-md relative after:absolute after:top-0 after:content-[''] after:h-[101%] after:w-[0.2rem] after:bg-[#07818c] after:z-[1] after:right-[0rem] before:left-[0rem] before:absolute before:top-0 before:content-[''] before:h-[101%] before:w-[0.2rem] before:bg-[#07818c] before:z-[1] ">
                        {/* Blue Top Bar */}
                        <div className="bg-[#07818c] text-white text-center font-[NewTransport-Bold] text-[1.3rem] leading-[2.1rem] tracking-[0.01em] py-[1rem]">
                          4 STAR DEFAQTO RATING
                        </div>

                        {/* Yellow Section with background gradient or image */}
                        <div
                          className="bg-[#fedf53] text-center py-[1.5rem] px-[1rem] relative"
                          style={{
                            backgroundImage:
                              "url('/Assets/images/backgrounds/yellow-diagonal-bg.png')", // or use linear-gradient
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <h5 className="font-[NewTransport-Bold] text-black">Comprehensive</h5>
                          <a href="#" className="inline-block mt-[0.6rem]">
                            <span
                              className="h-[2.2rem] w-[2.2rem] inline-block bg-center bg-no-repeat"
                              style={{
                                backgroundImage: "url('/info-toggle-icon.png')",
                              }}
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Table Content Loop */}
                  {coverFeatures.map((feature, index) => (
                    <div className="table-row" key={index}>
                      <div
                        className="table-cell relative align-middle w-1/2 border-b border-[#dcddde] shadow-[inset_-10px_0_10px_-10px_rgba(228,232,233,0.5)] pl-[5rem] pt-[2.5rem] pr-[2rem] pb-[2.5rem]"
                        style={{
                          background:
                            'linear-gradient(to bottom, rgba(251,251,252,1) 0%, rgba(255,255,255,1) 100%)',
                        }}
                      >
                        <h5 className="md:!tracking-[0px] md:!m-0">{feature}</h5>
                      </div>
                      <div className="text-center table-cell relative align-middle border-l border-b border-[#dcddde] pt-[2.5rem] pr-[3.5rem] pb-[2.5rem] pl-[3.5rem] relative after:absolute after:top-0 after:content-[''] after:h-[101%] after:w-[0.2rem] after:bg-[#07818c] after:z-[1] after:right-[-.2rem] before:left-[-.2rem] before:absolute before:top-0 before:content-[''] before:h-[101%] before:w-[0.2rem] before:bg-[#07818c] before:z-[1] ">
                        <div className="text-center">
                          <span
                            className="inline-block align-middle w-[2.1rem] h-[2.1rem] mb-0 bg-no-repeat bg-center"
                            style={{ backgroundImage: "url('/white-tick.png')" }}
                          ></span>
                        </div>
                        <span className="popular-bottom" style={{ width: '523px' }}></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
