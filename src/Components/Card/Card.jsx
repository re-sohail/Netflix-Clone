import React, { useEffect, useState } from "react";
import Data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

function Card({ title, category }) {
  let [apiData, setApiData] = useState([]);

  let getData = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "popular"
      }?api_key=762b1571e2fbbf4b5ba589b2fb55c995`
    );
    setApiData(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-white font-medium">
        {title ? title : "Popular Movies"}
      </h1>
      <div className="w-full flex items-center justify-start overflow-x-scroll gap-5 scrollbar">
        {apiData.map((data, i) => {
          return (
            <Link key={i} to={`/play/${data.id}`}>
              <div className="w-[240px] h-[140px] mt-5 flex-shrink-0 rounded-md overflow-hidden relative">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                  alt={`${data.original_title} Poster`}
                  className="w-full h-full object-cover"
                />
                <h1 className="text-white absolute right-4 bottom-1/4 z-30 font-medium shadow-md text-end w-[70%]">
                  {data.original_title}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
