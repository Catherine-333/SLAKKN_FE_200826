import { useState } from "react";

const String = () => {
  const [name, setName] = useState("Welcome India");

  const handleClick = () => {
    setName("You clicked the button!");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleClick} >Click me </button>
    </>
  );
};

export default String;