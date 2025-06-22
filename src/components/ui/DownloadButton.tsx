'use client';

import { Download } from 'lucide-react';
import Button from './Button'; // Adjust path if needed

export default function DownloadButton() {
  return (
    <Button  downloadHref="/francis-cv.pdf" icon={Download}>
      Download CV
    </Button>
  );
}
