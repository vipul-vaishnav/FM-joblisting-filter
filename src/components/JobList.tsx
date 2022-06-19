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
      <div className="w-full h-96 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-veryDarkGrayishCyan">Please Wait...</h1>
          <p className="text-lg font-semibold mb-6 text-veryDarkGrayishCyan">Data is being loaded</p>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <ul className="py-8 px-4">
      {jobs.map((job) => {
        return <Job key={uuidv4()} job={job} />;
      })}
    </ul>
  );
};

export default JobList;
