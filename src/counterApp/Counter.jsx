import "../counterApp/Counter.css";
import { useState } from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const Counter = () => {
  const [value, setvalue] = useState(0);
  const handleIncrement = () => {
    setvalue(value + 1);
  };
  const handleDecrement = () => {
    if (value <= 0) {
      setvalue(0);
    } else {
      setvalue(value - 1);
    }
  };
  const resetCounter = () => {
    setvalue(0);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="counter-main">
        <div className="no">
          <div className="display">
            <p>{value}</p>
          </div>
          <div className="reset" onClick={resetCounter}>
            <RiResetLeftFill />
          </div>
        </div>
        <div className="btns">
          <button onClick={handleIncrement}>
            <FaCirclePlus />
          </button>
          <button onClick={handleDecrement}>
            <FaCircleMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
