type HelpGridProps = {
  variant?: 'default' | 'other-options';
};

export default function HelpGrid({ variant = 'default' }: HelpGridProps) {
  const cards = [
    {
      title: 'Breakdown cover',
      description: 'Update your details, renew, cancel and more – you’ll find it all here.',
    },
    {
      title: 'Car insurance',
      description: 'Get behind the wheel of your policy – claim, cancel, renew and more.',
    },
    {
      title: 'Van insurance',
      description: 'Find the right contact number to claim, cancel, renew and more.',
    },
    {
      title: 'Emergencies',
      description:
        "Get help to report a breakdown if you're not a member, or need to report a bump or another problem.",
    },
    {
      title: 'Home Insurance',
      description:
        'Renew, update, cancel and everything in between to help protect your four walls.',
    },
    {
      title: 'Driving School',
      description: 'Book lessons, become a instructor or other ways to rev up your driving life.',
    },
    {
      title: 'Driving or travelling abroad',
      description:
        'Find answers about towing, travelling and driving in Britain, Ireland or Europe.',
    },
    {
      title: 'Vehicle maintenance and inspections',
      description: 'Get under the bonnet with inspections, MOTs and repairs.',
    },
    {
      title: 'Finance and car finance',
      description:
        'Manage your savings account, ISA or loan, or get help with buying your new wheels.',
    },
    {
      title: 'Help with your account',
      description:
        'Having trouble logging in or creating an account? Troubleshoot the issue or get help.',
    },
  ];

  const otherOptions = ['Bereavements', 'Compliments', 'Your data', 'Complaints', 'Accessibility'];

  return (
    <div className={variant === 'other-options' ? 'bg-[#000821]' : 'bg-white'}>
      <div
        className={`${
          variant === 'other-options'
            ? ' text-white  xl:!px-[2rem] md:px-[2.2rem]  py-[1rem] px-[1rem] md:!py-[1.5rem]'
            : 'bg-white  xl:!px-[2rem]  md:px-[2.2rem] py-[1rem] px-[1rem] md:!py-[1.5rem]'
        } !max-w-[1160px] mx-auto`}
      >
        {variant === 'other-options' ? (
          <>
            <section className="pt-[13px]">
              <h3
                className="text-white !text-[20px] leading-[32px] !font-bold !mb-[22px]"
                style={{ fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif' }}
              >
                Other options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-[20px] gap-x-[24px] md:mb-[19.5px] pb-[20px] md:pb-0 md:!pr-[24px]">
                {otherOptions.map((label, index) => (
                  <div
                    key={index}
                    className="bg-white text-black flex items-center justify-between rounded-xl !px-[16px] !pt-[11.5px] !pb-[8.8px]"
                  >
                    <div className="!self-start">
                      <h4
                        className="!text-[16px] !leading-[21px] !font-newtransport   m-0"
                        style={{ fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif' }}
                      >
                        {label}
                      </h4>
                    </div>
                    <div className="w-9.5 h-9.5 shrink-0 flex items-center justify-center pb-[3px]">
                      <img
                        src="/right-arrow.svg"
                        className="w-full h-full object-contain"
                        alt="Arrow icon"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="grid gap-y-[20px] gap-x-[24px] sm:grid-cols-1 md:grid-cols-1 xl:!grid-cols-3 md:mt-[24px] md:mr-[24px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#f6f6f6]  md:pt-[18px] md:pb-[24px] md:pl-[24px] md:pr-[16px] pt-[10px] pb-[16px] px-[16px] rounded-xl transition flex items-center justify-between gap-0"
              >
                <div className="pr-[15px] flex-1 self-start">
                  <h4
                    className="!text-[16px] leading-[20px] !font-newtransport !font-extrabold !mb-[2px]"
                    style={{ fontFamily: '"AA-Sans", Arial, Helvetica, Verdana, sans-serif' }}
                  >
                    {card.title}
                  </h4>
                  <p className="!text-[14px] leading-[20px] font-stretch-50% text-gray-700 mb-0">
                    {card.description}
                  </p>
                </div>
                <div className="w-9.5 h-9.5 shrink-0 pt-[6px] flex items-center justify-center">
                  <img
                    src="/right-arrow.svg"
                    className="w-full h-full object-contain"
                    alt="Arrow icon"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
