import { useState, useEffect, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { introDatas } from "@datas/IntroDatas";

export default function Intro(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = (direction: string) => {
    if (isTransitioning) return;

    setCurrentIndex((prevIndex) => {
      if (direction === "backward" && prevIndex > 0) {
        setIsTransitioning(true);
        return prevIndex - 1;
      }

      if (direction === "forward") {
        if (prevIndex < introDatas.length - 1) {
          setIsTransitioning(true);
          return prevIndex + 1;
        }

        navigate("/game");
      }

      return prevIndex;
    });
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div id="AppLayout">
      <nav id="backward_area" onClick={() => handleClick("backward")} />

      <img
        src={introDatas[currentIndex].src}
        alt={introDatas[currentIndex].alt}
        className={isTransitioning ? "image-transition-enter" : ""}
      />

      <p>{introDatas[currentIndex].txt}</p>

      <nav id="forward_area" onClick={() => handleClick("forward")} />
    </div>
  );
}
