import React, { useState, useRef } from 'react';
import { ReactComponent as RemoveIcon } from './../images/icon-remove.svg';
import Warning from './Warning';
import Error from './Error';

const Searchbar = () => {
  const [input, setInput] = useState<string>('');
  const [terms, setTerms] = useState<string[]>([]);
  const [warning, setWarning] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const ref = useRef(null);

  const handleChange = (e: React.FormEvent) => {
    const inputVal = (e.target as HTMLInputElement).value;
    setInput(inputVal);
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input || input.trim().length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);

      (ref.current as unknown as HTMLInputElement).focus();
    } else {
      const newTerm = input.trim();

      if (!newTerm || terms.includes(newTerm)) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 3000);
        (ref.current as unknown as HTMLInputElement).focus();
      }

      if (newTerm && !terms.includes(newTerm)) {
        setTerms((prev) => {
          return [...prev, newTerm];
        });
      }

      setInput('');
      (ref.current as unknown as HTMLInputElement).focus();
    }
  };

  const handleDelete = (id: number) => {
    const termsArray: string[] = [];

    for (let i = 0; i < terms.length; i++) {
      if (i !== id) {
        termsArray.push(terms[i]);
      }
    }

    setTerms(termsArray);
  };

  return (
    <div className="w-full px-4 mx-auto mt-8 sm:max-w-7xl">
      <form className="w-full">
        <label htmlFor="search" className="block mb-2 font-semibold text-darkCyan">
          Enter search term
        </label>
        <input
          type="text"
          id="search"
          ref={ref}
          value={input}
          onChange={handleChange}
          placeholder="Type here"
          autoComplete="off"
          className="w-full text-base sm:max-w-xs input input-bordered"
        />
        <button type="submit" onClick={handleClick} className="w-full mt-3 sm:ml-3 sm:mt-0 btn sm:btn-wide">
          Add
        </button>
      </form>

      {warning && <Warning />}

      {error && <Error />}

      {terms.length !== 0 && (
        <>
          <ul className="flex flex-wrap items-center justify-start gap-4 px-2 py-4 mt-8 bg-white rounded-md shadow">
            {terms.length !== 0 &&
              terms.map((term, id) => {
                return (
                  <div
                    key={id}
                    className="flex overflow-hidden font-semibold rounded-sm shadow-md text-darkCyan bg-lightGrayishCyanTwo"
                  >
                    <p className="px-3 py-1">{term}</p>
                    <button
                      onClick={() => handleDelete(id)}
                      className="flex items-center justify-center px-2 py-1 bg-darkCyan"
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Searchbar;
