import React, {useState} from "react";

const Button = ({color, colorReset, margin}) => {
  const [number, setNumber] = useState(0);
  const [massage, notif] = useState("Click button to add your name");
  return (
    <>
      <div className="text-center mb-5">
        <p className="ml-2">kamu sudah click button sebanyak {number}</p>
        <button
          className={`btn btn-${color} ${margin}`}
          onClick={() => setNumber(number + 1)}
        >
          Tambah
        </button>
        <button
          className={`btn btn-${colorReset} ${margin}`}
          onClick={() => setNumber(0)}
        >
          Reset
        </button>
      </div>

      <div className="popUp text-center">
        <h3>{massage}</h3>
        <button
          className={`btn btn-${color}`}
          onClick={() => notif(prompt("type your name ?"))}
        >
          Add
        </button>
        <button
          className={`btn btn-${colorReset} ${margin}`}
          onClick={() => notif("Click button to add your name")}
        >
          Reset Name
        </button>
      </div>
    </>
  );
};

export default Button;
