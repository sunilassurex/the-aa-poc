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
    <div className="p-4 md:p-12 !max-w-[1160px] mx-auto">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 px-10 py-8 rounded-xl shadow-sm flex justify-between items-center hover:bg-gray-200 transition"
          >
            <div className="!pr-6">
              <h3 className="!text-2xl !font-extrabold mb-3">{card.title}</h3>
              <p className="!text-2xl font-stretch-50% text-gray-700">{card.description}</p>
            </div>
            <div className="!text-4xl !font-extrabold  text-black ml-4 mt-1">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}
