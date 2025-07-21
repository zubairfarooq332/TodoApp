import "../counterApp/Counter.css";
import { RiResetLeftFill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const Counter = () => {
  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="counter-main">
        <div className="no">
          <div className="display">
            <p>2</p>
          </div>
          <div className="reset">
            <RiResetLeftFill />
          </div>
        </div>
        <div className="btns">
          <button>
            <FaCirclePlus />
          </button>
          <button>
            <FaCircleMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
