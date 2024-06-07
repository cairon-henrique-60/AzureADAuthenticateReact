import React from "react";
import { LogoLoader } from "./styles";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
      <LogoLoader>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          id="content"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 2C7.84987 2.44222 11.4095 3.18865 15 4.63644C23.5883 8.09953 32.3526 15.5755 32 32.5"
            stroke="#E12325"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="lastLine"
          />
          <circle cx="3.5" cy="29.6" r="3" fill="#E12325" className="circle" />
          <path
            d="M3 19.5C6.66667 19.8333 14 22.7 14 31.5"
            stroke="#E12325"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="firstLine"
          />
          <path
            d="M4 10C10.4969 10.1705 23.3907 14.8093 22.9909 32"
            stroke="#E12325"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="middleLine"
          />
        </svg>
      </LogoLoader>
    </div>
  );
};

export default Loader;
