import Image from "next/image";
import React, { useState } from "react";

type Props = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

function CustomImage({ src, fallbackSrc, width, height, className }: Props) {
  const [img, setImg] = useState(src);
  return (
    <Image
      src={img}
      alt="fallback"
      onError={() => setImg(fallbackSrc)}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default CustomImage;
