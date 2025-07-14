export default function HelpContactOptions() {
  const options = [
    {
      img: '/report-danger-breakdown.svg',
      label: 'Report a breakdown',
    },
    {
      img: '/login.svg',
      label: 'Log in',
    },
    {
      img: '/chat-to-us.svg',
      button: '',
      label: 'Chat to us',
    },
  ];

  return (
    <section className="text-center max-w-[1160px] mx-auto md:px-[2rem] px-[1rem]">
      <div className="md:py-[1.4rem] py-[1rem] px-[2rem] md:px-0">
        <h1 className="xl:!text-[1.39rem] !text-[1.2rem] !tracking-[0.05em] !font-light xl:!leading-[2.2rem] leading-[1.8rem] text-gray-700 md:pt-[1.9rem] pt-[1.5rem] md:!mb-[1.7rem] !mb-[1.6rem]">
          Contact us
        </h1>

        <p className="!text-[3.6rem]  xl:!text-[6.4rem] !font-newtransport !font-bold xl:!leading-[7.4rem] !leading-[4.2rem] text-[#1a1a1a] !mb-[0.8rem] xl:!mb-[0.6rem]">
          Find help or contact options
        </p>

        <h3 className="!text-[2rem]  md:!text-[1.9rem]  xl:!text-[2.6rem] tracking-[-0.005rem] !font-newtransport !font-light xl:!leading-[3.6rem] md:!leading-[2.4rem] !leading-[2.7rem] text-gray-800 xl:!mb-[1.4rem] !mb-[0.8rem] mx-auto">
          We’ve got online solutions, account log in, live chat and more – so you can complete your
          task or get support.
        </h3>
      </div>

      <div className="flex md:py-[1.5rem] py-[1rem] flex-wrap justify-center items-start md:!gap-7 gap-0">
        {options.map((item, index) => (
          <div key={index} className="md:!w-65 w-24 flex flex-col items-center text-center">
            {item.img ? (
              <img
                src={item.img}
                alt={item.label}
                className="md:w-26 md:h-26 w-20 h-20 object-contain mb-2"
              />
            ) : item.button ? (
              <button
                type="button"
                className="px-4 py-2 bg-[#ffcc00] text-black rounded-md  transition"
              >
                {item.button}
              </button>
            ) : null}

            <span className="text-[14px] md:text-[18px] !font-newtransport !font-normal text-gray-900 break-words leading-[21.6px] mt-[4px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
