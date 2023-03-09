import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import resume from 'public/resume.png';

export default function About() {
  return (
    <Container title="About – Gabriel Morales">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{' '}
              <a
                href="https://twitter.com/gabbo_dam"
                target="_blank"
                rel="noreferrer"
              >
                @gabbo_dam
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                href="https://github.com/gabbo-dam"
                target="_blank"
                rel="noreferrer"
              >
                @gabbo-dam
              </a>
            </li>
            <li>
              Website: <Link href="/">Home</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/gabbo-mv/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/gabbo-mv/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Gabriel Morales, Software developer</p>
          <h3>Description</h3>
          <p>
            Gabriel Morales is a skilled software developer with a passion for
            building high-quality software solutions. With over 3 years of
            experience in the industry, he has developed a strong understanding
            of software development best practices and has worked on a wide
            range of projects.
          </p>

          <p>
            Throughout his career, he has demonstrated a commitment to
            continuous learning and growth, staying up-to-date with the latest
            technologies and programming languages and is always seeking out new
            challenges to expand his skillset.
          </p>

          <p>
            Gabriel is a collaborative team player who excels in both individual
            and team environments. He communicates effectively with both
            technical and non-technical stakeholders, ensuring that everyone is
            on the same page and working towards the same goals.
          </p>

          <p>
            In his free time, he enjoys working on personal coding projects and
            contributing to open-source software communities. He also enjoys
            staying active and exploring the great outdoors.
          </p>

          <h3>Education</h3>
          <p>
            Gabriel Morales certified from Platzi with courses in Web and
            Blockchain Development, DevOps and Cloud Computing, Data Science and
            AI, Cyber Security and Ethical Hacking, and Startups.
          </p>
          <h2>Resume</h2>

          <div className="flex space-x-8">
            <a href="/resume.pdf" target="_blank">
              <Image
                alt="Gabriel Morales resume"
                width={400}
                quality={100}
                src={resume}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
