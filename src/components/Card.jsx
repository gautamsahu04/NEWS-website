import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((curitem, index) => {
        if(!curitem.urlToImage){
            return null;
        }
        else{
            return (
              <div
                key={index}
                className="w-full h-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  className="w-full h-auto object-cover"
                  src={curitem.urlToImage}
                  alt={curitem.title}
                />
                <div className="p-4">
                  <a className="text-xl font-bold text-gray-800" onClick={() => window.open(curitem.url, "_blank")}>{curitem.title}</a>
                  <p className="text-sm text-gray-600 mt-2">{curitem.description}</p>
                  <button
                    onClick={() => window.open(curitem.url, "_blank")}
                    className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Read more...
                  </button>
                </div>
              </div>
            );

        }
      })}
    </div>
  );
};

export default Card;
