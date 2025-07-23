import Constant from './helpers/Constant/Constant';

type ButtonProps = {
  href?: string;
  title?: string;
  buttonText: string;
  buttonType: string;
};

type ButtonsComponentProps = {
  buttons: ButtonProps[];
};

export default function Buttons({ buttons }: ButtonsComponentProps) {
  return (
    <div className="row">
      <div className="wrapper">
        <div className="text-center">
          {buttons.map((btn, index) => {
            const { href, title, buttonText, buttonType } = btn;

            if (buttonType === Constant.BUTTONS.PRIMARY) {
              return (
                <button
                  key={index}
                  className="md:!mx-[.8rem] !min-w-[22rem] shadow-custom-inset md:w-auto py-[0.85rem] px-[2rem] !text-[1.8rem] !tracking-[0.015em] md:!pt-[1.27rem]
             md:!px-[2.7rem] md:!pb-[1.55rem] md:!leading-[2rem] md:!tracking-[0.03em] md:!text-[1.8rem] bg-gradient-to-b from-[#ffcc00] to-[#f9b800] text-[#1d1d1d] border !border-[#ffc400]
          !shadow-[inset_0_1px_1px_#fff0b3,_0_0_10px_rgba(0,0,0,0.2)] !rounded-[5px]
          hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633] font-semibold"
                >
                  <a href={href ?? '#'} title={title ?? ''}>
                    {buttonText}
                  </a>
                </button>
              );
            }

            if (buttonType === Constant.BUTTONS.TRANSPARENT) {
              return (
                <button
                  key={index}
                  className="py-[.8rem] px-[2.6rem] !min-w-[22rem] md:!mx-[.8rem] font-newtransport md:!px-[3rem] md:!mr-[2.8rem] md:!pt-[1.2rem] md:!pb-[1.35rem] !font-bold text-[#1d1d1d] bg-transparent rounded border-[0.2rem] border-[#1d1d1d] !text-[1.8rem]  hover:!bg-[#dcddde] last:!m-[2rem]"
                >
                  <a href={href ?? '#'} title={title ?? ''}>
                    {buttonText}
                  </a>
                </button>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
