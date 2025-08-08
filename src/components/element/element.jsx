import { useEffect, useRef, useState } from "react";
import "./Element.css"; // Asegúrate de importar el CSS

export const Element = ({ image, title }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`elemento-animado ${visible ? "visible" : ""}`}
    >
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
};
