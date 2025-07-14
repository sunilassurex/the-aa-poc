type SocialIcon = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

type SocialLinksProps = {
  socialIcons?: SocialIcon[];
};

const defaultSocialIcons: SocialIcon[] = [
  {
    href: 'http://twitter.com/TheAA_uk',
    src: '/x-svg-24-demo.svg',
    alt: 'x logo',
    title: 'x logo',
  },
  {
    href: 'http://www.facebook.com/TheAAUK',
    src: '/facebook-svg-24-demo.svg',
    alt: 'facebook icon',
    title: 'facebook icon',
  },
  {
    href: 'https://www.instagram.com/theaa_uk/',
    src: '/instagram-svg-24-demo.svg',
    alt: 'instagram icon',
    title: 'instagram icon',
  },
];

export default function SocialLinks({ socialIcons = defaultSocialIcons }: SocialLinksProps) {
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div>
        <aside className="pb-[1rem] text-center">
          <h3 className="!mb-[1.2rem] font-newtransport !font-light !text-[2rem] !leading-[2.7rem] md:!text-[2.6rem] tracking-[-.005em] md:!leading-[3.6rem]">
            Connect with us
          </h3>
          <ul className="flex justify-center items-center !mb-[0px]">
            {socialIcons.map((icon, index) => (
              <li className="px-[1rem]" key={index}>
                <a href={icon.href}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width="50"
                    height="50"
                    title={icon.title}
                    className="w-[50px] h-[50px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
