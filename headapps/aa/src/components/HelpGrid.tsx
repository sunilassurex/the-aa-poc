export default function HelpGrid() {
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

  return (
    <div className="bg-white">
      <div className="bg-white p-4 xl:!px-0 md:!py-12 !max-w-[1160px] mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f6f6f6] p-[24px] rounded-xl   transition
             flex items-center justify-between gap-0"
            >
              <div className="pr-3 flex-1">
                <h4 className="!text-[17px] !font-newtransport !font-extrabold  mb-3">
                  {card.title}
                </h4>
                <p className="!text-2xl font-stretch-50% text-gray-700">{card.description}</p>
              </div>

              {/* Arrow icon wrapper */}
              <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                <img
                  src="/right-arrow.svg"
                  className="w-full h-full object-contain"
                  alt="Arrow icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
