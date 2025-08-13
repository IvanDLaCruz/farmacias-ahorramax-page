import { useEffect, useState } from "react";
import "./experienciacounter.css"

const ExperienciaCounter = ({ numeroFinal, duracion, texto }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duracion / numeroFinal));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numeroFinal) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [numeroFinal, duracion]);

  return (
    <div className="experiencia-counter">
      <div className="numero-simbolo">
        <span className="simbolo">+</span>
        <span className="numero">{count}</span>
      </div>
      <p className="texto">{texto}</p>
    </div>
  );
};

export default ExperienciaCounter;
