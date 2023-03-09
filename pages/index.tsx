import { Suspense } from 'react';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import TopTracks from 'components/TopTracks';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Gabriel Morales
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-md">
                Meticulous tech-loving software developer devoted to creating
                web applications and user interfaces.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title={
                'Built various decentralized applications including AMMs, NFT Marketplaces, and DAOs.'
              }
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Developed e-commerce websites, handling both front-end and back-end development"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Design and optimize interfaces, considering accessibility, performance, and coherence."
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link
            href="/projects"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'All projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </p>
          <TopTracks />
        </div>
      </Container>
    </Suspense>
  );
}
