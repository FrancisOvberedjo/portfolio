'use client';

import { Github, ArrowUpRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  image: string;
  slug: string; // used for /projects/[slug]
  liveUrl: string;
  githubUrl: string;
};

const ProjectCard = ({ title, image, slug, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="w-full max-w-sm border-2 border-light-gray rounded-[10px]  overflow-hiddden">
      {/* Image that links to the dynamic project page */}
      <div className='p-2 '>
      <Link href={`/projects/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover rounded-[10px] cursor-pointer"
          
        />
      </Link>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-xl font-semibold">{title}</h3>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-2">
          {/* Check it out */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition"
          >
            Check it out
            <ArrowUpRight size={16} className="text-white" />
          </a>

          {/* GitHub Icon */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Github size={20} className="text-zinc-800 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
