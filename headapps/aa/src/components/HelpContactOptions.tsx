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
    <section className="text-center max-w-[1160px] mx-auto px-4 md:px-10 py-12">
      <p className="text-xl tracking-wide text-gray-700 !mb-10 uppercase">Contact us</p>

      <h1 className="text-3xl sm:text-5xl md:!text-6xl xl:!text-[55px] font-extrabold text-[#1a1a1a] !mb-8">
        Find help or contact options
      </h1>

      <p className="text-3xl  md:text-4xl xl:text-5xl font-light leading-relaxed text-gray-800 mb-16  mx-auto">
        We’ve got online solutions, account log in, live chat and more – so you can complete your
        task or get support.
      </p>

      <div className="flex flex-row md:flex-row justify-center items-start mt-17 gap-y-25 gap-x-15 md:gap-x-40 xl:gap-x-45">
        {options.map((item, index) => (
          <div key={index} className="w-fit flex flex-col items-center text-center">
            <img
              src={item.img}
              alt={item.label}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
            <span className="text-xl sm:text-xl md:text-2xl font-normal text-gray-900 mt-2 break-words">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
