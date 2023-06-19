import { useState, useEffect } from "react";

const Typewriter = ({ textToType, delay = 0 }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (currentIndex < textToType.length) {
      timeoutId = setTimeout(() => {
        setText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100 + delay); // Adaugă întârzierea la intervalul de timp
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, textToType, delay]);

  return (
    <div>
      <code>&gt; {text}</code>
    </div>
  );
};

export default Typewriter;
