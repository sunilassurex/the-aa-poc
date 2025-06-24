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
      label: 'Chat to us',
    },
  ];

  return (
    <section className="text-center max-w-[1160px] mx-auto xl:!px-7 py-12">
      <h1 className="text-xl tracking-wide text-gray-700 !mb-10">Contact us</h1>

      <h3 className="!text-6xl sm:!text-7xl md:!text-6xl xl:!text-[65px] !font-newtransport !font-bold text-[#1a1a1a] !mb-8">
        Find help or contact options
      </h3>

      <h3 className="text-3xl md:text-4xl xl:text-5xl !font-newtransport !font-light leading-relaxed text-gray-800 mb-16 mx-auto">
        We’ve got online solutions, account log in, live chat and more – so you can complete your
        task or get support.
      </h3>

      <div className="flex flex-wrap justify-center items-start gap-10">
        {options.map((item, index) => (
          <div key={index} className="w-36 sm:w-65 h-36 flex flex-col items-center text-center">
            <img
              src={item.img}
              alt={item.label}
              className="w-20 h-20 sm:w-30 sm:h-30 object-contain mb-2"
            />
            <span className="text-[16px]  md:text-[18px] xl:text-[18px] font-normal text-gray-900 break-words leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
