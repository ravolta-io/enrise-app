import Image from "next/image";
import React from "react";

interface RotatingImageProps {
  src: string;
  alt: string;
}

const RotatingImage: React.FC<RotatingImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="rounded-full motion-safe:animate-[spin_3s_infinite]"
    />
  );
};

export default RotatingImage;
