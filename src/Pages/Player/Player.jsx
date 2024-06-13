import React, { useEffect, useState } from "react";
import backIcon from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [movieData, setMovieData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  let getData = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=762b1571e2fbbf4b5ba589b2fb55c995`
    );
    setMovieData(res.data.results[0]);
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div className="h-screen w-full">
      <img
        src={backIcon}
        alt=""
        className="absolute top-5 left-5 w-14 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex items-center justify-center flex-col h-screen">
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${movieData.key}`}
          // frameborder="0"
          title="trailer"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
        <div className="flex items-center justify-between w-[90%] pt-5">
          <h1>{movieData.published_at.slice(0, 10)}</h1>
          <h1>{movieData.name}</h1>
          <h1>{movieData.type}</h1>
        </div>
      </div>
    </div>
  );
}

export default Player;
