import { useState } from "react";
import { motion } from "framer-motion";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  width?: number | string;
  height?: number | string;
}

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  width = "100%",
  height = 300,
}) => {
  const [sliderX, setSliderX] = useState(50); // percentage

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.min(Math.max(x, 0), 100)); // clamp 0–100
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width, height }}
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* After Image */}
      <motion.div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderX}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 h-full w-1 bg-yellow-500"
        style={{ left: `${sliderX}%` }}
        drag="x"
        dragConstraints={{ left: 0, right: width }}
        dragElastic={0}
        onDrag={(e, info) => {
          const rect = e.currentTarget.parentElement?.getBoundingClientRect();
          if (rect) {
            const x = ((info.point.x - rect.left) / rect.width) * 100;
            setSliderX(Math.min(Math.max(x, 0), 100));
          }
        }}
      />
    </div>
  );
};

export default ImageComparisonSlider;
