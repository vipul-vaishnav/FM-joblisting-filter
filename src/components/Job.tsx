import React from 'react';
import JobInterface from './../models/JobInterface';
import New from './../Tags/New';
import Featured from './../Tags/Featured';

interface JobProps {
  job: JobInterface;
}

const Job = (props: JobProps) => {
  const { job } = props;
  const tags: string[] = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <li
      className={`bg-white relative px-4 pt-8 pb-6 my-12 shadow-job  rounded-md ${
        job.featured && 'border-l-darkCyan border-l-6'
      }`}
    >
      <div className="border-b border-1 border-darkGrayishCyan">
        {/* IMAGE */}
        <img src={job.logo} className="block absolute w-12 h-12 -top-6 left-6" alt="job-logo" />
        {/* INFO OR DESCRIPTION */}
        <div>
          <div className="flex justify-start items-center gap-6 mb-3">
            <h1 className="text-darkCyan font-bold">{job.company}</h1>
            <div className="flex justify-center items-center gap-2">
              {job.new && <New />}
              {job.featured && <Featured />}
            </div>
          </div>
          <h2 className="text-veryDarkGrayishCyan font-bold mb-3">{job.position}</h2>
          <h3 className="text-darkGrayishCyan font-medium mb-4">{`${job.postedAt} • ${job.contract} • ${job.location}`}</h3>
        </div>
      </div>
      {/* TAGS */}
      <div className="mt-4">
        <ul className="flex justify-start items-center flex-wrap gap-4">
          {tags.map((tag) => {
            return <h3 className="text-darkCyan rounded-sm bg-lightGrayishCyanTwo shadow px-2 font-semibold">{tag}</h3>;
          })}
        </ul>
      </div>
    </li>
  );
};

export default Job;

// {
//   /*========THIS IS ANOTHER APPROACH OF DOING THINGS=========*/
// }
// {
//   /* <div className="flex justify-start items-center gap-4">
//         <h3 className="text-darkGrayishCyan font-medium text-sm">{job.postedAt}</h3>
//         <h3 className="text-darkGrayishCyan font-medium text-sm">{job.contract}</h3>
//         <h3 className="text-darkGrayishCyan font-medium text-sm">{job.location}</h3>
//       </div> */
// }
