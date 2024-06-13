import React, { useRef } from "react";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import { FaPlay } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Card from "../Card/Card";

function Hero() {
  return (
    <>
      <div className="relative">
        <img src={heroBanner} alt="Hero Banner" className="w-full hero-img" />
        <div className="absolute bottom-2 left-0 right-0 bg-transparent">
          <img
            src={heroTitle}
            alt="Hero Title"
            className="bg-transparent px-20"
          />
          <p className="text-white bg-transparent px-20 regular text-lg my-7 w-2/3">
            "The Protector" is an action-packed film that follows the story of
            Kham, a young martial artist from Thailand, who embarks on a
            perilous journey to Australia. He aims to rescue his beloved
            elephants, which have been stolen by an international crime
            syndicate.
          </p>
          <div className="bg-transparent text-white px-20 w-full flex items-center justify-start gap-5">
            <button className="bg-white text-black rounded-sm w-[120px] h-12 flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#e9e7e5]">
              <FaPlay className="text-lg bg-transparent" /> Play
            </button>
            <button className="bg-[#5E5850] text-white rounded-sm w-[140px] h-12 flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#433f3b]">
              <HiOutlineExclamationCircle className="text-2xl bg-transparent" />{" "}
              More info
            </button>
          </div>
          <div className="pt-10 px-20">
            <Card />
          </div>
        </div>
      </div>

      <div className="pt-10 px-20">
        <Card title={"Comming Movies"} category={"upcoming"} />
      </div>
      <div className="pt-10 px-20">
        <Card title={"Top Rated"} category={"top_rated"} />
      </div>
      <div className="pt-10 px-20">
        <Card title={"Latest Movies"} category={"now_playing"} />
      </div>
    </>
  );
}

export default Hero;
