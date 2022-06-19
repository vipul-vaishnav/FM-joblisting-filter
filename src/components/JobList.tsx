import React, { useState, useEffect } from 'react';
import Job from './Job';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Loader from './Loader';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getJobs() {
    try {
      const response = await axios.get('http://localhost:3000/jobs');
      if (response.status === 200) setLoading(false);
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-96">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-veryDarkGrayishCyan">Please Wait...</h1>
          <p className="mb-6 text-lg font-semibold text-veryDarkGrayishCyan">Data is being loaded</p>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <ul className="px-4 py-6">
      {jobs.map((job) => {
        return <Job key={uuidv4()} job={job} />;
      })}
    </ul>
  );
};

export default JobList;
