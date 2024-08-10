import { useState } from "react";

export default function CustomInput() {
  // const [value, setValue] = useState("");

  // return (
  //   <input
  //     type="text"
  //     value={value}
  //     onChange={(event) => setValue(event.target.value)}
  //   />
  // );

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
