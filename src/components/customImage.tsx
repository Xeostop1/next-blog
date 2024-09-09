import Image from 'next/image'

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CustomImageProps = {
  imageData: ImageData;
};

const customImage = ({ imageData }: CustomImageProps) => {
  const { src, alt, width, height } = imageData;
  return (
    <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: `${(height / width) * 100}%` }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
      />
    </div>
  )
}

export default customImage;