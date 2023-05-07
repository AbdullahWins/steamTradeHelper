import React from "react";
import { useState } from "react";

const AfterTax = () => {
  const [finalAmount, setFinalAmount] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    const amount = parseFloat(document.getElementsByName("amount")[0].value);
    const percentage = parseFloat(
      document.getElementsByName("percentage")[0].value
    );
    const result = calculateFinalAmount(amount, percentage);
    setFinalAmount(result.toFixed(2));
  };

  return (
    <div className="bg-whiteLow p-6 mx-2 md-p rounded-3xl">
      <form className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <p className="text-3xl text-mainColor font-bold">Calculate</p>
          <h2 className="text-2xl font-bold text-blackMid">
            Balance After Tax
          </h2>
        </div>
        <div className="w-full">
          <p className="text-blackMid text-lg">Amount</p>
          <input
            required
            className="input input-sm w-full"
            name="amount"
            type="number"
          />
        </div>
        <div className="w-full">
          <p className="text-blackMid text-lg">Percentage</p>
          <input
            required
            className="input input-sm w-full"
            defaultValue={13}
            name="percentage"
            type="number"
          />
        </div>
        <button
          className="btn btn-sm normal-case text-whiteHigh bg-successColor hover:bg-successColor border-none"
          onClick={handleClick}
        >
          Calculate Now
        </button>
        <p className="text-successColor bg-blackHigh px-4 py-2 text-lg rounded-3xl text-center">
          You will get exactly{" "}
          <span className="text-mainColor font-bold">{finalAmount}</span> in
          your account!
        </p>
      </form>
    </div>
  );
};

function calculateFinalAmount(amount, percentage) {
  if (!amount || !percentage) {
    return;
  }
  const result = amount - (amount / 100) * percentage;
  return result;
}

export default AfterTax;
