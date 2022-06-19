import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Searchbar from './components/Searchbar';
// import TopActions from './components/TopActions';

const App = () => {
  return (
    <div className="min-h-screen text-base font-fontDefault bg-lightGrayishCyanOne">
      <Header />
      {/* <TopActions /> */}
      <Searchbar />
      <JobList />
    </div>
  );
};

export default App;
