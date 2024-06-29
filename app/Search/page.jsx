"use client";
import Link from "next/link";

import { useState } from "react";

const Search = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState();
console.log(data)
  const fetchdata = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4">
            <Link
              href={'/'}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="./logo.png" className="h-14" alt="Flowbite Logo" />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href={'/Home'}
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      <div className="flex justify-center p-5 m-3">
        <input
          type="text"
          className="bg-gray-200"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter Username"
        />
        <button
          onClick={() => fetchdata(user)}
          className="bg-black p-3 text-white rounded hover:bg-gray-500"
        >
          Search
        </button>
      </div>
      <div>
        <div className="flex flex-wrap justify-center">
          {data && user.length > 0? (
            <div className="w-full max-w-sm bg-white border border-gray-200 m-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
              <p className='text-bold text-red-600 p-3'>{data.avatar_url?"":'Not Found!'}</p>
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={data.avatar_url}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {data.login}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  GitHub User
                </span>
                <div className="flex mt-4 md:mt-6">
                  <div>
                    <div className="text-center">
                      <Link
                        href={data.html_url?data.html_url: "https://github.com/"} 

                        target="_blank"
                        className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        type="button"
                        data-drawer-target="drawer-navigation"
                        data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation"
                      >
                     {data.avatar_url?"GitHub User":'Not Found!'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ):<h1>Not found</h1>}
        </div>
      </div>
    </div>
  );
};
export default Search;
