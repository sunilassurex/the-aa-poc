/* eslint-disable prettier/prettier */
import Image from 'next/image';
type Article = {
  id: string;
  image: string;
  title: string;
  description: string;
};

type PopularArticlesProps = {
  heading?: string;
  articles: Article[];
};

export default function PopularArticles({ heading, articles }: PopularArticlesProps) {
  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className=" max-w-[1160px] px-[2rem] mx-auto">
        <div className="bg-white">
          {heading && (
            <h2
              className="relative text-center !m-0 xl:!text-[2.6rem] md:!text-[1.9rem] !text-[2rem] xl:py-[2.3rem] py-[1.5rem] !tracking-[-.005em] xl:!leading-[3.6rem] !leading-[2.7rem] font-newtransport !font-light
    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[17px]
    after:border-t-[17px] after:border-t-white
    after:border-l-[17px] after:border-l-transparent
    after:border-r-[17px] after:border-r-transparent"
            >
              {heading}
            </h2>
          )}
          <div className="grid grid-cols-1 pt-[3rem] xl:pb-[1rem] md:pb-[2rem] xl:px-0 md:px-[1rem] xl:max-w-full md:max-w-[74.6rem] gap-[20px] xl:grid-cols-3 mx-auto !bg-[#f6f6f6] !shadow-[inset_0_7px_15px_0_rgba(0,0,0,0.09)]">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded shadow-sm">
                <div className="w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={640}
                    height={400}
                    className="object-contain w-full h-auto rounded-t"
                  />
                </div>
                <div className="p-[8.5%]">
                  <h4 className="!text-[#07818c] font-semibold !text-[1.9rem]  !leading-[2.4rem] !mb-[1.03rem]">
                    {article.title}
                  </h4>
                  <p className="!text-[1.7rem] text-[#1d1d1d] m-0 leading-[2.2rem]">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

