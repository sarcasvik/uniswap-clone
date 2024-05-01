import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  FaGithubIcon,
  FaXTwitterIcon,
  FaDiscordIcon,
  CgFormatSlashIcon,
  FaMagnifyingGlassIcon,
  IoLogoGooglePlaystoreIcon,
  FaAppleIcon,
  IoMdCheckmarkIcon,
} from "./icons";
import { cryptoicons } from "./icons";
import { Link } from "react-router-dom";

interface MenuItem {
  head: string;
  opt1: string;
  opt2: string;
}

const Navbar: React.FC = () => {
  const menu = [
    {
      name: "swap",
      link: "/swap",
    },
    {
      name: "explore",
      link: "#",
    },
    {
      name: "nfts",
      link: "#",
    },
    {
      name: "pool",
      link: "/pool",
    },
  ];
  const [optmenu, setOptmenu] = useState<boolean>(false);
  const [searchopen, setSearchopen] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<string | null>("Etherium"); // Define selectedToken state
  const searchRef = useRef<HTMLDivElement>(null);
  const mobmenu: MenuItem[] = [
    {
      head: "app",
      opt1: "vote",
      opt2: "analytics",
    },
    {
      head: "company",
      opt1: "careers",
      opt2: "blog",
    },
    {
      head: "protocol",
      opt1: "governance",
      opt2: "developers",
    },
    {
      head: "need help?",
      opt1: "contact us",
      opt2: "help center",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchopen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const toggleoptmenu = () => {
    setOptmenu(!optmenu);
  };

  const togglesearch = () => {
    setSearchopen(!searchopen);
  };

  const toggletokenmenu = () => {
    setToken(!token);
  };

  return (
    <>
      <nav className="z-10">
        <div className="flex w-full px-4 py-4 border border-black items-center justify-between bg-transparent backdrop-blur fixed">
          <div className="flex h-[35px] gap-2 bg-transparent">
            <Link  to="/" className="h-[35px] flex bg-transparent">
              <img className="bg-transparent" src="uniswap-uni-logo.svg" alt="Logo" />
            </Link>
            <div className="hidden md:flex items-center bg-transparent p-2">
              {menu.map((i, index) => (
                <Link to={i.link} className="bg-transparent">
                  <div
                    key={index}
                    className="capitalize  mx-1 font-medium text-gray-600 hover:bg-gray-600/20 transition ease-out duration-300 px-2 py-1 bg-transparent  rounded-xl"
                  >
                    {i.name}
                  </div>
                </Link>
              ))}
              <div
                className=" py-2 px-4 rounded-xl text-gray-600 hover:bg-gray-600/20 relative transition ease-out duration-300 cursor-pointer"
                onClick={toggleoptmenu}
              >
                <ChevronDownIcon
                  customstyles={`bg-transparent ${optmenu
                      ? "transition rotate-180 duration-300"
                      : "transition rotate-0 duration-300"
                    }`}
                />
                <div
                  className={`absolute border border-gray-300/20 top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15 ${optmenu
                      ? "transition opacity-1 duration-300"
                      : "transition opacity-0 duration-300 hidden"
                    }`}
                >
                  {mobmenu.map((i, index) => (
                    <div key={index} className="p-2 gap-2">
                      <div className="font-bold capitalize text-[#FFF0F5]">
                        {i.head}
                      </div>
                      <div className="font-semibold text-gray-500 capitalize text-sm hover:text-pink-400 cursor-pointer">
                        {i.opt1}
                      </div>
                      <div className="font-semibold text-gray-500 capitalize text-sm hover:text-pink-400 cursor-pointer">
                        {i.opt2}
                      </div>
                    </div>
                  ))}
                  <div className="h-[1px] w-full my-2 border-b-gray-300/20 border"></div>
                  <div className="flex p-2 gap-2 items-center">
                    <div className="rounded-lg h-[45px] w-[45px] bg-white flex items-center">
                      <img
                        className="bg-transparent p-1"
                        src="uniswap-uni-logo.svg"
                        alt="Logo"
                      />
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div className=" w-full justify-between p-2 cursor-pointer">
                        <p className="whitespace-nowrap capitalize text-[#FFF0F5]  hover:underline underline-offset-[3px]">
                          Download Meowswap
                        </p>
                        <p className="whitespace-nowrap text-sm capitalize">
                          available on IOS and android
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="flex p-2 gap-4 ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {" "}
                      <FaGithubIcon customstyles="h-[20px] w-[20px] text-white m-2" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {" "}
                      <FaXTwitterIcon customstyles="h-[20px] w-[20px] text-white m-2" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {" "}
                      <FaDiscordIcon customstyles="h-[20px] w-[20px] text-white m-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit md:w-[30%] h-[35px] relative bg-transparent hidden md:block">
            <div
              className={`absolute border bg-transparent border-grey-400 rounded-2xl top-0 w-fit md:w-full ${searchopen
                  ? "h-[120px] transition-height duration-300"
                  : "h-[35px] transition-height duration-300"
                }`}
              onClick={togglesearch}
              ref={searchRef}
            >
              <div className="flex h-[33px] items-center bg-transparent">
                <div className="flex w-fit md:w-full h-fit bg-transparent justify-between items-center px-3">
                  <FaMagnifyingGlassIcon customstyles="text-white" />
                  <div className=" hidden md:block bg-transparent">
                    <input
                      type="text"
                      placeholder="Search for Tokens and NFT Collections"
                      className={`w-full bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 transition-font-medium group-hover:font-medium ${searchopen ? "font-medium" : "font-medium"
                        }`}
                    />
                  </div>
                  <div className="w-[20px] h-[20px] bg-gray-500/20 rounded-sm flex items-center justify-center hidden  md:block">
                    <CgFormatSlashIcon customstyles="bg-transparent text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 bg-transparent">
            <div
              className="py-2 px-4 rounded-xl text-gray-600 hover:bg-gray-600/20 relative transition ease-out duration-300 cursor-pointer sm:hidden"
              onClick={toggletokenmenu}
            >
              <div className="flex gap-2 bg-transparent items-center">
                {selectedToken && (
                  <>
                    {cryptoicons.map((icon, index) => {
                      if (icon.name === selectedToken) {
                        return (
                          <div key={index} className=" bg-transparent">{icon.svg}</div>
                        );
                      }
                      return null;
                    })}
                  </>
                )}
                <ChevronDownIcon
                  customstyles={`bg-transparent ${token
                      ? "transition rotate-180 duration-300"
                      : "transition rotate-0 duration-300"
                    }`}
                />
              </div>
              <div
                className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${token
                    ? "transition opacity-1 duration-300"
                    : "transition opacity-0 duration-300 hidden"
                  }`}
              >
                <div className="flex justify-between">
                  <div className="flex-col justify-center">
                    {cryptoicons.map((icon, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-1 rounded-lg hover:bg-red-100"
                        onClick={() => setSelectedToken(icon.name)}
                      >
                        <div className="flex justify-between bg-transparent">
                          <div className="p-2 bg-transparent">{icon.svg}</div>
                          <div className="flex items-center bg-transparent">
                            {icon.name}
                          </div>
                        </div>
                        <div
                          className={`p-2 bg-transparent ${selectedToken === icon.name ? "" : "invisible"}`}
                        >
                          <IoMdCheckmarkIcon customstyles="bg-transparent" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[35px] bg-transparent">
              <div className="flex items-center  hover:bg-gray-800/80 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2">
                <div className="capitalize  mx-1 font-medium text-gray-600 px-2 py-1 bg-transparent hidden md:block">
                  get the app
                </div>
                <div className="flex h-[35px] items-center p-1 gap-4 bg-transparent">
                  <IoLogoGooglePlaystoreIcon customstyles="text-white bg-transparent" />
                  <FaAppleIcon customstyles="text-white bg-transparent" />
                </div>
              </div>
            </div>
            <div className="h-[35px]">
              <div className="flex items-center bg-pink-400/20 hover:bg-pink-300/20 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2">
                <div className="capitalize  mx-1 font-medium text-gray-600 px-2 py-1 bg-transparent text-pink-300 ">
                  <a href="/swap" className="bg-transparent">connect</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
