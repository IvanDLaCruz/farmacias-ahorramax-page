import { useEffect, useRef, useState } from "react";
import "./Element.css";

export const Element = ({ image }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [visible]);

  const handleImageError = (e) => {
    e.target.src = 'images/default-image.jpg';
    e.target.alt = 'Imagen no disponible';
  };

  return (
    <div
      ref={ref}
      className={`elemento-animado ${visible ? "visible" : ""}`}
    >
      <div className="image-container">
        <img
          src={image}
          alt={""}
          onError={handleImageError}
          onLoad={() => setImgLoaded(true)}
          className={`element-image ${imgLoaded ? "loaded" : "loading"}`}
        />
        {!imgLoaded && <div className="image-skeleton"></div>}
      </div>
    </div>
  );
};