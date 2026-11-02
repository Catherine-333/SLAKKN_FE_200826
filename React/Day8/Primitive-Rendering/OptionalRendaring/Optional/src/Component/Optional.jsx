import { useState } from "react";

const Optional = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      {showText && <p>This is my project</p>}
    </>
  );
};

export default Optional;