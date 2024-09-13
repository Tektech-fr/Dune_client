import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { launchGameImages, LaunchGameImage } from "./datas/launchGameImages";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const navigate = useNavigate();

  const currentImage: LaunchGameImage = launchGameImages[currentImageIndex];

  const handleClick = () => {
    if (currentImageIndex + 1 >= launchGameImages.length) {
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
