type PageDetailProps = {
  title: string;
  headline: string;
  description: string;
};

export default function PageDetail({ title, headline, description }: PageDetailProps) {
  return (
    <section className="text-center max-w-[1160px] mx-auto md:px-[2rem] px-[1rem]">
      <div className="md:py-[1.4rem] py-[1rem] px-[2rem] md:px-0">
        <h1 className="xl:!text-[1.39rem] !text-[1.2rem] !tracking-[0.05em] !font-light xl:!leading-[2.2rem] leading-[1.5rem] text-gray-700 xl:pt-[2rem] md:pt-[1.9rem] pt-[1.5rem] md:!mb-[1.3rem] xl:!mb-[1.6rem] !mb-[1.6rem]">
          {title}
        </h1>

        <p className="!text-[3.6rem]  xl:!text-[6.4rem] !font-newtransport !font-bold xl:!leading-[7.4rem] !leading-[4.2rem] text-[#1a1a1a] !mb-[0.8rem] xl:!mb-[0.8rem]">
          {headline}
        </p>

        <h3 className="!text-[2rem]  md:!text-[1.9rem]  xl:!text-[2.6rem] tracking-[-0.005rem] !font-newtransport !font-light xl:!leading-[3.6rem] md:!leading-[2.4rem] !leading-[2.7rem] text-gray-800 xl:!mb-[1.4rem] !mb-[0.8rem] mx-auto">
          {description}
        </h3>
      </div>
    </section>
  );
}
