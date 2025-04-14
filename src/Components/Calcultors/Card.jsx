import React from 'react';
import "./card.css";

const Card = ({ name, url, description, features }) => {
  return (
    <div className="plan">
      <div className="inner flex flex-col justify-between h-full bg-gradient-to-br from-yellow-100 via-orange-100 to-amber-200 dark:bg-dark-2 border border-yellow-700 p-6 rounded-2xl shadow-lg min-h-[450px]">
        
        {/* Pricing */}
        <span className="pricing mb-2">
          <span>
            $49 <small>/ m</small>
          </span>
        </span>

        {/* Title and Description */}
        <div>
          <p className="title text-xl font-bold text-orange-800 mb-1 mt-2">{name}</p>
          <p className="info text-gray-700 text-sm mb-4">{description}</p>
        </div>

        Features
        <ul className="features space-y-2 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
              <span className="icon text-green-600 mt-1">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-6">
          <a
            className="inline-flex items-center gap-2 justify-center py-3 px-6 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            href={url}
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
