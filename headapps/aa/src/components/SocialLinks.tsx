import Image from 'next/image';

export default function SocialLinks() {
  const icons = [
    { src: '/x-svg-24.svg', alt: 'X (Twitter)' },
    { src: '/facebook-svg-24.svg', alt: 'Facebook' },
    { src: '/instagram-svg-24.svg', alt: 'Instagram' },
  ];

  return (
    <div className="bg-[#f5f5f5] py-10 text-center">
      <h2 className="text-[25px] md:text-[28px] font-light mb-4 text-black">Connect with us</h2>
      <div className="flex justify-center gap-6">
        {icons.map((icon, index) => (
          <div key={index} className="bg-[#1a1a1a] p-1 rounded-full hover:scale-105 transition">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
