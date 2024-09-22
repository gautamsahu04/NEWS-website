import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const News = () => {
  const [search, setsearch] = useState("india");
  const [newsdata, setnewsdata] = useState(null);

  const API_key = "329e6a85095d43f7bfba4c15eea79aca";

  const getdata = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setnewsdata(jsonData.articles);
  };

  const userinput = (e) => {
    setsearch(e.target.value);
  };
  const handleinput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
    ;
  };

  useEffect(() => {
    getdata();
  }, [search]);

  return (
    <div className="bg-slate-600 min-h-screen ">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-red-800 p-4 ">
        {/* Logo / Title */}
        <div className="flex-shrink-0">
          <h1 className="text-white text-2xl font-bold">Trending NEWS</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#all-news" className="text-white hover:underline" >
              All News
            </a>
          </li>
          <li>
            <a href="#trending" className="text-white hover:underline">
              Trending
            </a>
          </li>
        </ul>

        {/* Search Box */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            className="px-3 py-2 rounded-l-md focus:outline-none"
            onChange={handleinput}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            onClick={getdata}
          >
            Search
          </button>
        </div>
      </nav>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 p-4 bg-slate-700">
        <button
          onClick={userinput}
          value="Sport"
          className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200"
        >
          Sports
        </button>
        <button
          onClick={userinput}
          value="Politics"
          className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200"
        >
          Politics
        </button>
        <button
          onClick={userinput}
          value="Entertainment"
          className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200"
        >
          Entertainment
        </button>
        <button
          onClick={userinput}
          value="Fitness"
          className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200"
        >
          Fitness
        </button>
        <button
          onClick={userinput}
          value="Health"
          className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200"
        >
          Health
        </button>
      </div>

      {/* News Cards */}
      <div className="p-4">{newsdata ? <Card data={newsdata} /> : null}</div>
    </div>
  );
};

export default News;
