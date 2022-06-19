import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';

const App = () => {
  return (
    <div className="font-fontDefault text-base bg-lightGrayishCyanOne min-h-screen">
      <Header />
      <JobList />
    </div>
  );
};

export default App;
