import React from "react";
import logo from "../../assets/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
  let [show, setShow] = useState(false);

  let handlebar = () => {
    setShow(!show);
  };

  return (
    <nav className="lg:py-4 absolute w-full top-4">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center ">
          <div className="lg:w-[20%]">
            <img src={logo} alt="" />
          </div>
          <div
            className={`lg:static duration-300 lg:flex lg:justify-center w-[30%] rounded-[10px]  ${
              show
                ? "bg-[#6A55EA] absolute top-[61px] left-[50%] translate-x-[-50%] w-[100%] "
                : " absolute top-[61px] left-[-100%] w-full"
            }`}
          >
            <ul className="flex py-3 flex-col lg:py-0 lg:flex-row gap-2 md:gap-2 sm:gap-2  items-center lg:gap-10 text-center ">
              <li>
                <a
                  className="text-white  font-san font-semibold text-[18px] flex items-center"
                  href="#"
                >
                  Home <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a
                  className="text-white  font-san font-semibold text-[18px] gap-1 flex items-center"
                  href="#"
                >
                  About <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a
                  className="text-white  font-san font-semibold text-[18px] gap-1 flex items-center"
                  href="#"
                >
                  Service <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a
                  className="text-white  font-san font-semibold text-[18px] gap-1 flex items-center"
                  href="#"
                >
                  Portfolio <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a
                  className="text-white  font-san font-semibold text-[18px] gap-1 flex items-center"
                  href="#"
                >
                  Price <IoIosArrowDown />
                </a>
              </li>
              <li>
                <a
                  className="text-white   font-san font-semibold text-[18px] gap-1 flex items-center"
                  href="#"
                >
                  Blog <IoIosArrowDown />
                </a>
              </li>
              <button className="py-[7px]  px-[16px] block lg:hidden border-1 mt-2 mb-3 sm:mb-4 lg:mb-0 duration-200 border-white text-white rounded-[18px] hover:bg-[#182a3e]">
                Contact Us
              </button>
            </ul>
          </div>
          <div className="w-[20%]">
            <button className="py-[14px] px-[28px]  hidden  ml-auto lg:block border-1   ms:mb-4 sm:mb-4 lg:mb-0 duration-200 border-white text-white rounded-[18px] hover:bg-[#182a3e]">
              Contact Us
            </button>
          </div>

          <div className="text-[40px] text-white lg:hidden" onClick={handlebar}>
            {show == true ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
