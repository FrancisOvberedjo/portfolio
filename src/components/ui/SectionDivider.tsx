'use client';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full h-px bg-gray-300 my-12 ${className}`} />
  );
}
