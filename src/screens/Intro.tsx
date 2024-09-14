import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { introImages } from "@datas/IntroDatas";

export default function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const navigate = useNavigate();

  const currentImage = introImages[currentImageIndex];

  const handleClick = () => {
    if (currentImageIndex + 1 >= introImages.length) {
      navigate("/game");
    } else {
      setCurrentImageIndex((prevIndex: number) => prevIndex + 1);
    }
  };

  return (
    <main id="AppLayout">
      <img
        src={currentImage.src}
        alt={currentImage.src}
        onClick={handleClick}
      />
    </main>
  );
}
