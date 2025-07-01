import Image from 'next/image';

export default function SocialLinks() {
  const icons = [
    { src: '/x-svg-24.svg', alt: 'X (Twitter)' },
    { src: '/facebook-svg-24.svg', alt: 'Facebook' },
    { src: '/instagram-svg-24.svg', alt: 'Instagram' },
  ];

  return (
    <div className="bg-[#f5f5f5] py-10 text-center md:!py-[1.5rem]">
      <div className="md:pb-[1rem]">
        <h3 className="text-[25px] md:!text-[2.6rem] md:!leading-[3.6rem] md:tracking-[-.005em] font-newtransport md:!mb-[1.2rem] !font-light mb-3 text-black">
          Connect with us
        </h3>
        <div className="flex justify-center gap-8 md:!gap-8 xl:gap-6">
          {icons.map((icon, index) => (
            <div key={index} className="bg-[#1a1a1a] p-1 rounded-full hover:scale-105 transition">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={47}
                height={47}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
