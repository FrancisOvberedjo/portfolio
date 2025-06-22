'use client';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex-grow h-px bg-black/20 my-10 ${className}`} />
  );
}
