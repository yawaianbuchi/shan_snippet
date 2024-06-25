import React from 'react';
import NextImage, { ImageProps as NImageProps } from 'next/image';
import { cn } from '@/utils/cn';

interface ImageProps extends NImageProps {
  width?: number;
  height?: number;
  className?: string;
}
const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width ?? 60}
      height={height ?? 60}
      className={cn(className)}
      objectFit="cover"
    />
  );
};

export default Image;
