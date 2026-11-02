import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");

  const [showDatas, setShowDatas] = useState("");
  const [showDatas1, setShowDatas1] = useState("");
  const [showDatas2, setShowDatas2] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    
    setShowDatas(name);
    setShowDatas1(age);
    setShowDatas2(number);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <p>{showDatas}</p>
      <p>{showDatas1}</p>
      <p>{showDatas2}</p>
    </>
  );
};

export default App;