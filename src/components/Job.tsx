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
      className={`bg-white relative px-4 pt-8 lg:px-8 lg:pt-6 pb-6 my-12 shadow-job lg:flex lg:justify-between lg:items-center rounded-lg ${
        job.featured && 'border-l-darkCyan border-l-6'
      }`}
    >
      <div className="border-b lg:flex lg:gap-8 lg:border-none border-1 border-darkGrayishCyan">
        {/* IMAGE */}
        <img
          src={job.logo}
          className="absolute block w-12 h-12 lg:static lg:w-24 lg:h-full -top-6 left-6"
          alt="job-logo"
        />
        {/* INFO OR DESCRIPTION */}
        <div>
          <div className="flex items-center justify-start gap-6 mb-3">
            <h1 className="font-bold text-darkCyan">{job.company}</h1>
            <div className="flex items-center justify-center gap-2">
              {job.new && <New />}
              {job.featured && <Featured />}
            </div>
          </div>
          <h2 className="mb-3 font-bold text-veryDarkGrayishCyan">{job.position}</h2>
          <h3 className="mb-4 font-medium text-darkGrayishCyan lg:mb-0">{`${job.postedAt} • ${job.contract} • ${job.location}`}</h3>
        </div>
      </div>
      {/* TAGS */}
      <div className="mt-4 lg:mt-0">
        <ul className="flex flex-wrap items-center justify-start gap-4">
          {tags.map((tag, id) => {
            return (
              <h3 key={id} className="px-2 font-semibold rounded-lg shadow text-darkCyan bg-lightGrayishCyanTwo">
                {tag}
              </h3>
            );
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
//   /* <div className="flex items-center justify-start gap-4">
//         <h3 className="text-lg font-medium text-darkGrayishCyan">{job.postedAt}</h3>
//         <h3 className="text-lg font-medium text-darkGrayishCyan">{job.contract}</h3>
//         <h3 className="text-lg font-medium text-darkGrayishCyan">{job.location}</h3>
//       </div> */
// }
