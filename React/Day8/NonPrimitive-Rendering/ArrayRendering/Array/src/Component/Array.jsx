import { useState } from "react";

const Array = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleClick = () => {
   
  };

  return (
    <>
      <div>
        {arr.map((e, i) => (
          <div key={i}>
            <p>{e}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default Array;