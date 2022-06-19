import React from 'react';
import FilterIcon from './../Icons/FilterIcon';
import MoonIcon from './../Icons/MoonIcon';
// import SunIcon from './../Icons/SunIcon';

const TopActions = () => {
  return (
    <div className="flex items-center justify-between px-4 my-4">
      <button className="btn btn-circle">
        <MoonIcon />
      </button>
      <button className="btn btn-circle">
        <FilterIcon />
      </button>
    </div>
  );
};

export default TopActions;
