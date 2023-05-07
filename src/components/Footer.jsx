import React from "react";

const Footer = () => {
  return (
    <div className="text-lg md:text-xl bg-whiteMid py-6 text-center w-full">
      <p>
        Crafted with &#x2764; by{" "}
        <a
          className="text-mainColor hover:text-successColor font-bold"
          href="https://steamcommunity.com/id/abdullahwins"
          target="_blank"
          rel="noopener noreferrer"
        >
          AbdullahWins
        </a>
      </p>
    </div>
  );
};

export default Footer;
