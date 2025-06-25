'use client';

import { Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  image: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
};

const ProjectCard = ({
  title,
  image,
  slug,
  liveUrl,
  githubUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-[#F5F5F5] dark:bg-[#2B2B2B] text-[#121212] dark:text-[#F5F5F5] border border-[#e5e5e5] dark:border-[#3a3a3a] rounded-2xl overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/projects/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Title */}
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#ADFF00] text-[#121212] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-[#e0e0e0] dark:border-[#3a3a3a] pt-4 text-sm font-medium">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#754AF8] transition"
          >
            Live Site <ArrowUpRight size={14} />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#754AF8] transition"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
