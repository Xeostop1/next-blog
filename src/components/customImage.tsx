import Image from 'next/image';

interface ImageProps {
  imageData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const CustomImage = ({ imageData }: ImageProps) => {
  const { src, alt, width, height } = imageData;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} 
    />
  );
};

export default CustomImage;
