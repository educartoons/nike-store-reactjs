import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

interface ThumbnailProps {
  src: string;
  index: number;
  handleSetIndex: (idx: number) => void;
}

function Thumbnail({ src, index, handleSetIndex }: ThumbnailProps) {
  const handleMouseEnter = () => {
    handleSetIndex(index);
  };
  return (
    <div onMouseEnter={handleMouseEnter} className="rounded-lg overflow-hidden">
      <img src={src} alt="" />
    </div>
  );
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);

  const handleSetIndex = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="flex gap-5">
      <div className="w-[200px]">
        <div className="flex flex-col gap-3">
          {images.map((image, index) => (
            <Thumbnail
              src={image}
              index={index}
              handleSetIndex={handleSetIndex}
            />
          ))}
        </div>
      </div>
      <div className="flex grow">
        <figure className="rounded-lg overflow-hidden">
          <img className="w-full" src={images[index]} alt="" />
        </figure>
      </div>
    </div>
  );
}
