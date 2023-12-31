import React from 'react';
import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  styles?: string;
  priority?: boolean;
  onClick?: any;
};

const NextImage: React.FC<ImageProps> = ({
  sizes,
  src,
  alt,
  styles,
  priority,
  onClick,
}: ImageProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center relative ${sizes} ${styles} transition-all duration-300`}
    >
      <Image src={src} fill alt={alt} sizes="sizes" priority={priority} className={`absolute`} />
    </div>
  );
};

export default NextImage;
