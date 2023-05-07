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
    <div>
      <form className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold text-blue-500">After Tax Balance</h2>
        <div>
          <p className="text-blue-800">Amount</p>
          <input
            required
            className="input input-sm"
            name="amount"
            type="number"
          />
        </div>
        <div className="w-3xl">
          <p className="text-blue-800">Percentage</p>
          <input
            required
            className="input input-sm"
            defaultValue={13}
            name="percentage"
            type="number"
          />
        </div>
        <button className="btn btn-sm normal-case" onClick={handleClick}>
          Calculate
        </button>
        <p className="text-green-300 bg-slate-500 px-4 py-2 rounded-3xl">
          You will get <span>{finalAmount}</span> in your account!
        </p>
      </form>
    </div>
  );
};

function calculateFinalAmount(amount, percentage) {
  const result = amount - (amount / 100) * percentage;
  return result;
}

export default AfterTax;
