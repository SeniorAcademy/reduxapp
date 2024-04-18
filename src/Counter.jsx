import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decrement,
  resetCount,
  increamentAmount,
  decrementAmount,
} from "./features/slices/counterSlice";

const Counter = () => {
  const number = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const addNumber = () => {
    dispatch(increamentAmount(Number(amount)));
    setAmount(0);
  };
  const substrackNumber = () => {
    dispatch(decrementAmount(Number(amount)));
    setAmount(0);
  };

  const resetAllCounts = () => {
    dispatch(resetCount());
    setAmount(0);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="mt-4 text-primary ">Count: {number} </h1>
        <div className="my-4 ms-5">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger text-white  px-3 py-2"
          >
            -
          </button>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="p-3 w-50 mx-3"
          />
          <button
            onClick={() => dispatch(increament())}
            className="btn btn-info text-white  px-3 py-2"
          >
            +
          </button>
        </div>

        <div>
          <button
            onClick={substrackNumber}
            className="btn btn-danger text-white ms-3 p-3"
          >
            Subtract
          </button>
          <button
            onClick={resetAllCounts}
            className="btn btn-warning text-white mx-3 p-3"
          >
            Reset
          </button>

          <button
            onClick={addNumber}
            className="btn btn-info text-white ms-3 p-3 px-4"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
