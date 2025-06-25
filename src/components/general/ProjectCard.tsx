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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className="rounded-xl border border-[#e4e4e4] dark:border-[#333] bg-[#F5F5F5] dark:bg-[#2B2B2B] text-[#121212] dark:text-[#F5F5F5] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <Link href={`/projects/${slug}`}>
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>

      {/* Text Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <Link href={`/projects/${slug}`}>
          <h3 className="text-lg font-bold hover:underline">{title}</h3>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 text-[10px] font-medium">
          {tags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="bg-[#ADFF00] text-[#121212] px-2 py-[2px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center border-t pt-3 border-[#ddd] dark:border-[#444] text-sm">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1 hover:text-[#754AF8] transition"
          >
            Check it out <ArrowUpRight size={14} />
          </motion.a>

          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1 hover:text-[#754AF8] transition"
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
