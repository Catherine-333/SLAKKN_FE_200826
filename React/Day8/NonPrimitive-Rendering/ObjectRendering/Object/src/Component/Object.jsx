import { useState } from "react";

function Object() {
  const [user, setUser] = useState({
    name: "Catherine",
    age: 23,
    course: "Full Stack Developer",
  });

  function updateAge() {
    setUser((prev) => ({
      ...prev,
      age: 23,
    }));
  }

  return (
    <>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
      <h3>{user.course}</h3>

      <button onClick={updateAge}>Click me</button>
    </>
  );
}

export default Object;
