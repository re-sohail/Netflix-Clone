import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-[70%] h-auto mx-auto py-10 mt-10">
      <div className="w-full flex items-center justify-start gap-5 text-2xl">
        <Link to={"https://facebook.com/re.sohail"} target="_blank">
          <FaFacebookF className="cursor-pointer" />
        </Link>
        <Link to={""}>
          <RiInstagramFill className="cursor-pointer" />
        </Link>
        <Link to={""}>
          <FaGithub className="cursor-pointer" />
        </Link>
        <Link to={""}>
          <FaYoutube className="cursor-pointer" />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-y-5 pt-10">
        <h1 className="cursor-pointer">Audio Description</h1>
        <h1 className="cursor-pointer">Help Center</h1>
        <h1 className="cursor-pointer">Gift Card</h1>
        <h1 className="cursor-pointer">Media Center</h1>
        <h1 className="cursor-pointer">Invester Relation</h1>
        <h1 className="cursor-pointer">Jobs</h1>
        <h1 className="cursor-pointer">Terms of Use</h1>
        <h1 className="cursor-pointer">Privacy</h1>
        <h1 className="cursor-pointer">Legal Notice</h1>
        <h1 className="cursor-pointer">Cookies Preference</h1>
        <h1 className="cursor-pointer">Corborate Information</h1>
        <h1 className="cursor-pointer">Contact us</h1>
      </div>
      <h1 className="pt-5 text-[#a3a3a3a9]">© 2024 NetFlix</h1>
    </div>
  );
}

export default Footer;
