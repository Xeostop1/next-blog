import Image from 'next/image'
import { FC } from 'react'

interface ImageProps {
  imageData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const customImage: FC<ImageProps> = ({ imageData }) => {
  const { src, alt, width, height } = imageData;
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
      sizes="100vw"
    />
  )
}

export default customImage;
