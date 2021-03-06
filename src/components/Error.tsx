import React from 'react';

const Error = () => {
  return (
    <div className="mx-auto my-3 shadow-lg sm:max-w-7xl alert alert-error">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Not a valid input.</span>
      </div>
    </div>
  );
};

export default Error;
