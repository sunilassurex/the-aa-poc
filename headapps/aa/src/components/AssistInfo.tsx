/* eslint-disable prettier/prettier */
export default function AccidentAssistInfo() {
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className="xl:max-w-[1160px] px-[1rem] md:max-w-[74.6rem] mx-auto md:px-[1.1rem] xl:px-[2rem]">
        <div className="md:py-[49px] py-[30px] pl-[6px] pr-[6px] md:pl-[20px] md:pr-[42px] xl:pr-[64px] text-gray-800">
          <h2 className="!text-[24px] !leading-[28px] !tracking-[-0.5px] !font-newtransport !font-bold md:!text-[24px] !mb-[8px] md:!mb-[16px]">
            It’s OK when you’ve got Accident Assist
          </h2>

          <span className="mb-10 text-black text-[20px] xl:text-[26px] font-newtransport font-light leading-[28px] xl:leading-[32px] tracking-[-0.38px] xl:tracking-[-0.5px] font-custom">
            Accident Assist is a complimentary 24/7 accident claim support service for all our breakdown
            members. Prang, bump or crash, our dedicated team will take the uncertainty out of making an
            accident claim, acting on your behalf – whichever company insures you, and whoever was at
            fault.
          </span>

          <ul className="pl-0 max-w-[704px]">
            {[
              'We’ll arrange accident recovery if your vehicle isn’t drivable.¹',
              'We’ll arrange your repair with our trusted, AA-approved accident repairers. They use the latest technology and fit genuine vehicle manufacturer parts.',
              'Your repairer will provide a Lifetime Guarantee on the quality of the repair.',
              'We’ll provide a hire vehicle of a similar size to your own while yours is repaired.²',
              'We’ll chat with insurers for you.³',
              'We won’t charge you an excess if you’re not at fault for the accident.',
              'We’ll provide personal injury support to you and any passengers.',
            ].map((text, idx) => (
              <li
                key={idx}
                className="relative my-[15px]  pl-[16px]  first:mt-[24px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] before:h-[20px] before:bg-[#fc0] before:rounded-[1px] "
              >
                <p className="text-[16px] tracking-[0.25px] !leading-[1.28] md:!leading-[1.30] m-0">{text}</p>
              </li>
            ))}

            <li className="relative my-[15px] pl-[16px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] before:h-[20px] before:bg-[#fc0] before:rounded-[1px] ">
              <p className="text-[16px]  tracking-[0.25px]  m-0">
                We can arrange a vehicle glass repair or a replacement. You’ll only pay your insurer’s
                excess.{' '}
                <a
                  href="#"
                  className="!text-[#07818c] text-[15.7px] font-newtransport font-bold no-underline hover:underline"
                >
                  Book a glass repair online.
                </a>
              </p>
            </li>

            <li className="relative  my-[15px] pl-[16px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] before:h-[20px] before:bg-[#fc0] before:rounded-[1px] ">
              <p className="text-[16px]  tracking-[0.25px] m-0">
                To make a claim for damaged or vandalised tyres, call us on 0330 053 0221.
              </p>
            </li>

            <li className="relative my-[15px] pl-[16px] before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] before:h-[20px] before:bg-[#fc0] before:rounded-[1px] before:block">
              <p className="text-[16px]  tracking-[0.25px] m-0">
                If you have AA car insurance, find out{' '}
                <a
                  href="#"
                  className="!text-[#07818c] font-newtransport font-bold no-underline hover:underline"
                >
                  how to make a car insurance claim.
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
