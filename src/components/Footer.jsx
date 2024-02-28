import logo from "../assets/logo.png";
import glassdoor from "../assets/glassdoor.jpg";
import iso from "../assets/iso.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaQuora } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 p-12 bg-slate-400 mt-20">
      <div className="flex flex-col">
        <img src={logo} alt="BTC Logo" className="mb-8" />
        <h1 className="text-2xl mb-2">Bluetick Consultants LLP</h1>
        <h2 className="text-lg">contact@bluetickconsultants.com</h2>
        <div className="grid grid-cols-3">
          <img
            src={glassdoor}
            alt="glassdoor certification"
            className="object-scale-down h-28 w-auto mt-8"
          />
          <img
            src={iso}
            alt=""
            className="object-scale-down h-28 w-auto mt-8"
          />
        </div>
      </div>
      <div className="ml-12 col-span-2 flex flex-col">
        <div className="grid grid-cols-2">
          <a href="">
            <h1 className="text-3xl font-medium mb-2">Resources</h1>
          </a>
          <a href="">
            <h1 className="text-3xl font-medium mb-2">Products</h1>
          </a>
        </div>
        <div className="flex justify-between flex-wrap my-4">
          <a href="" className="flex text-2xl">
            <IoIosArrowDroprightCircle className="self-center" />
            <h1 className="ml-1">Blog</h1>
          </a>
          <a href="" className="flex text-2xl">
            <IoIosArrowDroprightCircle className="self-center" />
            <h1 className="ml-1">Talk to code</h1>
          </a>
          <a href="" className="flex text-2xl">
            <IoIosArrowDroprightCircle className="self-center" />
            <h1 className="ml-1">InterviewGPT</h1>
          </a>
          <a href="" className="flex text-2xl">
            <IoIosArrowDroprightCircle className="self-center" />
            <h1 className="ml-1">PrivacyDoc</h1>
          </a>
          <a href="" className="flex text-2xl">
            <IoIosArrowDroprightCircle className="self-center" />
            <h1 className="ml-1">Sales Call Evaluator</h1>
          </a>
        </div>
        <div className="flex flex-wrap justify-between h-full">
          <div className="flex">
            <FaFacebook className="text-4xl mr-4 self-end" />
            <FaInstagram className="text-4xl mr-4 self-end" />
            <FaTwitter className="text-4xl mr-4 self-end" />
            <FaLinkedin className="text-4xl mr-4 self-end" />
            <FaQuora className="text-4xl mr-4 self-end" />
            <FaThreads className="text-4xl mr-4 self-end" />
          </div>
          <div className="text-lg flex self-end">
            2024 &copy; All rights reserved by Bluetick Consultants LLP
          </div>
        </div>
      </div>
    </div>
  );
}
