import Image from 'next/image'
import { FC } from 'react'

// 이미지 속성을 위한 인터페이스 정의
interface ImageProps {
  imageData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// CustomImage 컴포넌트 정의
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
