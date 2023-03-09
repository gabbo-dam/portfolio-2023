import Link from 'next/link';

import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

export const projects = [
  {
    title: 'Hakuswap',
    description: 'Premier DEX AMM on Avalanche Network',
    img: '/hakuswap.PNG',
    link: 'https://hakuswap.com/'
  },

  {
    title: 'Sahara DAO',
    description: 'Fractional-Algorithmic Synthetic Token',
    img: '/sahara.PNG',
    link: 'https://sahara-dao.vercel.app/'
  },
  {
    title: 'Collection Capitol',
    description: 'NFT Marketplace on the BNB Chain',
    img: '/collectioncapitol.PNG',
    link: 'https://collectioncapitol.com/'
  },
  {
    title: 'WeShip',
    description: 'E-Commerce Fulfillment, Storage & Logistics',
    img: '/weship.PNG',
    link: 'https://www.weship.eu/'
  }
];

export default function Dashboard() {
  return (
    <Container
      title="Projects – Gabriel Morales"
      description="personal projects portfolio, built with with cutting-edge
      technologies and deployed as serverless functions"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This are projects I worked on, built with cutting-edge technologies
            and deployed as serverless functions.
          </p>
        </div>
        {/* 
        Hakuswap
        Sahara DAO
        COllection Capitol
        WeShip
        */}
        <div className="w-full flex gap-4 flex-col justify-between">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
