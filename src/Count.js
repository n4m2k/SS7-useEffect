import React, { useState } from "react";
import debounce from "lodash.debounce";
const Count = () => {
  const [arr, setArr] = useState([]);
  const handleText = (e) => {
    setArr(e.target.value.split(" "));
    console.log(arr);
  };
  const debounceOnchange = debounce(handleText, 500);
  return (
    <div>
      <textarea
        style={{ width: 500, margin: 10 }}
        onChange={debounceOnchange}
      ></textarea>
      <p>Works: {arr.length}</p>
    </div>
  );
};

export default Count;
