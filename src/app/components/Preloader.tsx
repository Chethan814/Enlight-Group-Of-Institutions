'use client'

import Image from 'next/image';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  if (!isLoading) return null;

  return (
    <div id="back__preloader">
      <div id="back__circle_loader"></div>
      <div className="back__loader_logo">
        <Image src="/cropped-Logo-180x180.png" alt="Preload" width={180} height={180} />
      </div>
    </div>
  );
}
