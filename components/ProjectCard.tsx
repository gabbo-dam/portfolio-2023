import type { NextPage } from 'next';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  className?: string;
};

const HomeCard: NextPage<CardProps> = ({
  title,
  description,
  img,
  className,
  link
}) => {
  return (
    <div className={`${className} cursor-pointer `}>
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className={`flex flex-col-reverse lg:flex-row justify-between rounded-lg hover:border-black dark:hover:border-white  border border-gray-200 dark:border-gray-800 `}
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <div className="lg:clip-polygon w-full lg:max-w-[230px] my-auto">
            <Image
              className="rounded-lg rounded-bl-none rounded-tl-none"
              src={img}
              alt={`${title}`}
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeCard;
