import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';
export default function PassTestBanner() {
  return (
    <div className="md:py-[1.5rem] py-[1rem] md:px-0 px-[1rem]">
      <div className="xl:!max-w-[1160px] md:!max-w-[74.6rem] mx-auto xl:px-[2rem] md:px-[1.1rem]">
        <div className="shadow-[inset_0_7px_15px_0_rgba(0,0,0,0.08)] py-[2.7rem]">
          <div className="flex justify-center items-center bg-[#f4f5f6] xl:max-w-[95.1rem] md:px-0 px-[1rem] md:max-w-[65rem] mx-auto">
            <div
              className=" xl:px-[4rem] md:px-[2rem] md:pt-[2.2rem] md:pb-[2.4rem] px-[2rem] py-[1.9rem]
    w-full max-w-[1200px] 
    bg-[url('/large-beam.png')]
    bg-no-repeat bg-top-right bg-cover
    bg-gradient-to-r from-[#ffd700] to-[#ffeb3b]
    flex flex-col md:flex-row items-center justify-between
   
    
  "
            >
              {/* Left Text */}
              <div className="text-black !text-left ">
                <h3 className="xl:!text-[2.6rem] !text-[1.9rem] xl:leading-[3.6rem] leading-[2.4rem] tracking-[-.005em] !mb-[0.5rem] font-semibold">
                  Pass your test with us
                </h3>
                <h5 className="font-bold text-[1.6rem] leading-[2.2rem] tracking-[.025em] md:!mb-[1.4rem] !mb-[1rem]">
                  99% of our pupils would recommend us*
                </h5>
                <p className="!text-[1.1rem] !leading-[1.8rem] mb-0 tracking-[.025em] text-[#58595b] ">
                  *Taken from Reviews.io.
                </p>
              </div>

              {/* Right Button */}
              <div className="md:mr-[-19px] ">
                <Buttons
                  buttons={[
                    {
                      href: '...',
                      title: 'Retrieve a quote',
                      buttonText: 'Get lesson prices and book',
                      buttonType: Constant.BUTTONS.PRIMARY,
                      buttonTextAlign: 'text-left',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
