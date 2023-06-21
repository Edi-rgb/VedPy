import { useState, useEffect } from "react";

const Typewriter = ({ textToType = "", delay = 0 }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId: number;

    if (currentIndex < textToType.length) {
      timeoutId = setTimeout(() => {
        setText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100 + delay);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, textToType, delay]);

  return (
    <div>
      <pre className="">{text}</pre>
    </div>
  );
};

export default Typewriter;
