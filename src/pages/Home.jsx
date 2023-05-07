import React from "react";
import AfterTax from "../components/AfterTax";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 max-w-5xl w-full">
      <AfterTax></AfterTax>
    </div>
  );
};

export default Home;
