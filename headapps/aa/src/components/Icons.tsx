export default function Icons() {
  const options = [
    { img: '/report-danger-breakdown.svg', label: 'Report a breakdown' },
    { img: '/login.svg', label: 'Log in' },
    { img: '/chat-to-us.svg', label: 'Chat to us' },
    // { button: 'Track', label: 'Track a request' },
    // { img: '/find-service.svg', label: 'Find a service' },
    // { button: 'Support', label: 'Get support' },
    // Add more options if needed
  ];

  return (
    <div className="flex md:py-[1.5rem] py-[1rem] flex-wrap justify-center items-start md:!gap-7 !gap-9">
      {options.map((item, index) => (
        <div key={index} className="md:!w-65 w-30 flex flex-col items-center text-center">
          {item.img ? (
            <img
              src={item.img}
              alt={item.label}
              className="md:w-26 md:h-26 w-22.5 h-22.5 object-contain mb-2"
            />
          ) : item.button ? (
            <button
              type="button"
              className="px-4 py-2 bg-[#ffcc00] text-black rounded-md transition"
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
  );
}
