import Buttons from './Buttons';
import Constant from './helpers/Constant/Constant';
import Icons from './Icons';
import PageDetail from './PageDetail';

export default function AccidentContactUs() {
  const buttons = [
    {
      href: '/get-quote',
      title: 'Report Accident Online',
      buttonText: 'Report Accident Online',
      buttonType: Constant.BUTTONS.PRIMARY,
    },
  ];
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className="bg-[#fff] mx-auto px-[1rem] md:px-[1.1rem] xl:px-[2rem] md:max-w-[74.6rem] xl:max-w-[112rem]">
        <PageDetail
          title="Accident Assist
"
          headline="Had an accident? Contact us first

"
          description="We’ll sort everything, from vehicle recovery to making a claim"
        />
        <div className="my-[0rem]">
          <Buttons buttons={buttons} />
        </div>
        <div className="xl:pt-[3.3rem] pt-[2.4rem] xl:pb-[1.4rem] pb-[2rem] xl:!px-[7.5rem] md:!px-[6.4rem] !px-0 mx-auto">
          <div className="max-w-[92%]">
            <h5 className="xl:!text-[1.6rem] md:!text-[1.5rem] !text-[1.8rem] !tracking-[0.025em] text-center !font-bold xl:!leading-[2.2rem] md:!leading-[1.9rem] !leading-[2.5rem] xl:mb-[1.5rem] md:mb-[1.6rem] mb-[1.4rem]">
              <span className="bg-[#ffffff] tracking-[-0.07px] text-[#172b4d]">
                If your vehicle isn’t drivable and needs recovery or you&apos;re in danger, call us
                on{' '}
              </span>
              <a href="" className="!text-[#07818c] !font-extrabold">
                0330 053 0221
              </a>
            </h5>
          </div>
        </div>
        <Icons variant="horizontal" />
      </div>
    </div>
  );
}
