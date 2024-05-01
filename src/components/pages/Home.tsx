import { useEffect, useState } from "react";
import {
  CgArrowsExchangeAltVIcon,
  IoMdCheckmarkIcon,
  MdMonitorIcon,
} from "../elements/icons";
import { cryptoicons, ChevronDownIcon } from "./../elements/icons";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";
const Home = () => {
  const [selectedToken, setSelectedToken] = useState<string | null>("Etherium"); // Define selectedToken state
  const [selectedToken2, setSelectedToken2] = useState<string | null>(
    "Etherium",
  ); // Define selectedToken state
  const [token, setToken] = useState<boolean>(false);
  const [token2, setToken2] = useState<boolean>(false);
  const [exchange, setExchange] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [num3, setNum3] = useState<number>(0);
  
  useEffect(() => {
    setNum(2);
    setNum1(16);
    setNum2(3);
    setNum3(1);
  },[]);

  const toggletokenmenu = () => {
    setToken(!token);
  };
  const toggletokenmenu2 = () => {
    setToken2(!token2);
  };
  const toggleexchange = () => {
    setExchange(!exchange);
  };

  return (
    <>
      <div className="text-white relative h-screen border border-transparent z-[5]">
        <motion.div
          className="bg-transparent absolute top-[400px] left-3 blur-sm"
          animate={{
            y: [10, -10, 10],
            rotate: [16, -16, 16], // Add rotation animation
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            filter: { type: "tween", duration: 0.2 }, // Apply blur(0) on hover instantly
          }}
          whileHover={{ filter: "blur(0)" }}
        >
          <img src="pepe-pepe-logo.png" className="h-[70px]" />
        </motion.div>
        <motion.div
          className="bg-transparent absolute top-[100px] right-3 blur-sm"
          animate={{
            y: [10, -10, 10],
            rotate: [16, -16, 16], // Add rotation animation
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            filter: { type: "tween", duration: 0.2 }, // Apply blur(0) on hover instantly
          }}
          whileHover={{ filter: "blur(0)" }}
        >
          <img src="pepe-pepe-logo.png" className="h-[70px]" />
        </motion.div>
        <motion.div
        className="bg-transparent absolute top-[500px] left-1/4 blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [-16, 16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="bitcoin-btc-logo.png" className="h-[70px]" />
      </motion.div>
        <motion.div
        className="bg-transparent absolute top-1/4 left-1/4 blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="shiba-inu-shib-logo.png" className="h-[70px]" />
      </motion.div>
      <motion.div
        className="bg-transparent absolute top-1/5 left-1/2 blur-sm"
        animate={{
          y: [10, 10, -10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="usd-coin.png" className="h-[70px]" />
      </motion.div>
      <motion.div
        className="bg-transparent absolute top-24 left-1/10 blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="usd-coin.png" className="h-[70px]" />
      </motion.div>
      <motion.div
        className="bg-transparent absolute top-[500px] right-64 blur-sm"
        animate={{
          y: [10, -10, 10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="usd-coin.png" className="h-[70px]" />
      </motion.div>
      <motion.div
        className="bg-transparent absolute top-1/3 right-1/4 blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="ape-logo.png" className="h-[70px]" />
      </motion.div>
      <motion.div
        className="bg-transparent absolute top-1/2 left-1/3 blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [16, -16, 16],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          filter: { type: "tween", duration: 0.2 },
        }}
        whileHover={{ filter: "blur(0)" }}
      >
        <img src="ape-logo.png" className="h-[70px]" />
      </motion.div>
        <div className="w-full z-[5]">
          <div className="mt-32 text-center text-6xl md:w-[30%] mx-auto font-bold font-mono">
            Swap anytime, anywhere
          </div>
          <div className="w-[80%] lg:w-[35%]  mx-auto m-4 bg-black/80 p-1 rounded-2xl z-10">
            <div className="relative z-0 bg-black rounded-2xl">
              <div className="p-1 bg-transparent rounded-2xl">
                <div className="h-32 rounded-xl border border-gray-50 p-2 px-4 flex-col justify-center">
                  <div className="font-sm font-thin">You pay</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="0"
                      className="w-full font-mono bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 text-4xl transition-font-medium group-hover:font-medium "
                    />
                    <div>
                      <div
                        className="py-2 px-4 rounded-xl text-gray-600  relative transition ease-out duration-300 cursor-pointer"
                        onClick={toggletokenmenu}
                      >
                        {exchange ? (
                          <div className="flex gap-2 bg-transparent items-center bg-pink-300/40 p-2 items-center rounded-xl">
                            {selectedToken && (
                              <>
                                {cryptoicons.map((icon, index) => {
                                  if (icon.name === selectedToken) {
                                    return (
                                      <div key={index} className=" bg-transparent text-white">
                                        {icon.svg}
                                      </div>
                                    );
                                  }
                                  return null;
                                })}
                              </>
                            )}
                            <ChevronDownIcon
                              customstyles={`bg-transparent text-white ${token
                                  ? "transition rotate-180 duration-300"
                                  : "transition rotate-0 duration-300"
                                }`}
                            />
                          </div>
                        ) : (
                          <div className="flex gap-2 bg-pink-300/40 p-2 items-center rounded-xl">
                            <div className="bg-transparent text-white">
                              Select Token
                            </div>
                            <ChevronDownIcon
                              customstyles={`bg-transparent text-white ${token2
                                  ? "transition rotate-180 duration-300"
                                  : "transition rotate-0 duration-300"
                                }`}
                            />
                          </div>
                        )}
                        <div
                          className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${token
                              ? "transition opacity-1 duration-300 z-[5]"
                              : "transition opacity-0 duration-300 hidden"
                            }`}
                        >
                          <div className="flex justify-between">
                            <div className="flex-col justify-center">
                              {cryptoicons.map((icon, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between p-1 rounded-lg z-[5] hover:bg-red-100"
                                  onClick={() => setSelectedToken(icon.name)}
                                >
                                  <div className="flex justify-between bg-transparent">
                                    <div className="p-2 bg-transparent">
                                      {icon.svg}
                                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-fit mx-auto z-5 border-[3px] border-black rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={toggleexchange}
              >
                <CgArrowsExchangeAltVIcon customstyles="text-4xl text-white cursor-pointer" />
              </div>
              <div className="p-1 bg-transparent mt-[0px]">
                <div className="h-32 rounded-xl border border-gray-50 p-2 px-4 flex-col justify-center">
                  <div className="font-sm font-thin">You recive</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="0"
                      className="w-full font-mono bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 text-4xl transition-font-medium group-hover:font-medium "
                    />
                    <div>
                      <div
                        className="py-2 px-4 rounded-xl text-gray-600  relative transition ease-out duration-300 cursor-pointer"
                        onClick={toggletokenmenu2}
                      >
                        {exchange ? (
                          <div className="flex gap-2 bg-pink-300/40 p-2 items-center rounded-xl">
                            <div className="bg-transparent text-white">
                              Select Token
                            </div>
                            <ChevronDownIcon
                              customstyles={`bg-transparent text-white ${token2
                                  ? "transition rotate-180 duration-300"
                                  : "transition rotate-0 duration-300"
                                }`}
                            />
                          </div>
                        ) : (
                          <div className="flex gap-2 bg-transparent items-center bg-pink-300/40 p-2 items-center rounded-xl">
                            {selectedToken && (
                              <>
                                {cryptoicons.map((icon, index) => {
                                  if (icon.name === selectedToken) {
                                    return (
                                      <div key={index} className=" bg-transparent text-white">
                                        {icon.svg}
                                      </div>
                                    );
                                  }
                                  return null;
                                })}
                              </>
                            )}
                            <ChevronDownIcon
                              customstyles={`bg-transparent text-white ${token
                                  ? "transition rotate-180 duration-300"
                                  : "transition rotate-0 duration-300"
                                }`}
                            />
                          </div>
                        )}
                        <div
                          className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${token2
                              ? "transition opacity-1 duration-300"
                              : "transition opacity-0 duration-300 hidden"
                            }`}
                        >
                          <div className="flex justify-between">
                            <div className="flex-col justify-center">
                              {cryptoicons.map((icon, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between p-1  rounded-lg hover:bg-red-100"
                                  onClick={() => setSelectedToken2(icon.name)}
                                >
                                  <div className="flex justify-between bg-transparent">
                                    <div className="p-2 bg-transparent">
                                      {icon.svg}
                                    </div>
                                    <div className="flex items-center bg-transparent">
                                      {icon.name}
                                    </div>
                                  </div>
                                  <div
                                    className={`p-2 bg-transparent ${selectedToken2 === icon.name ? "" : "invisible"}`}
                                  >
                                    <IoMdCheckmarkIcon customstyles="bg-transparent" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center h-16 bg-pink-400/20 hover:bg-pink-300/20 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
              <div className="capitalize cursor-pointer font-medium px-2 py-1 bg-transparent text-pink-300 mx-auto">
                connect Wallet
              </div>
            </div>
          </div>
          <div className="text-center text-xl w-[30%] mx-auto font-bold font-mono">
            {" "}
            The larget onchain market place. Buy and sell crypto on etherum and
            7+ other chains
          </div>
        </div>
        <div className="mt-32 z-[5] text-center">
          <a
            href="#blocktwo"
            className="z-[5] transition duration-500 scroll-smooth"
          >
            {" "}
            scroll to learn more
          </a>
        </div>
      </div>
      <div className="text-white z-[5]" id="blocktwo">
        <div className="mt-32 w-[95%] md:w-[70%] mx-auto font-bold font-mono scroll-smooth">
          <div className="text-6xl flex items-center pb-16">
            <div>Go direct to DeFi</div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="h-fit rounded-lg bg-blue-500/20 p-4">
              <div className="p-2 w-fit flex rounded-2xl capitalize items-center gap-2 text-pink-500">
                <MdMonitorIcon />
                web app
              </div>
              <div className="text-4xl bg-transparent my-4">
                Swapping made simple. Access thousands of tokens on 8+ chains.
              </div>
              <div className="w-[95%]  mx-auto bg-transparent flex-col gap-2">
                {cryptoicons.slice(0, 4).map((i, index) => (
                  <div
                    className="flex text-4xl justify-between gap-4 rounded-2xl p-3 my-3 hover:scale-105 transion duration-300"
                    key={index}
                  >
                    <div className="flex items-center gap-4">
                      <div>{i.svg}</div>
                      {i.name}
                    </div>
                    <div className="text-3xl"> Current rate</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-orange-500/50">
              <div className="h-fit rounded-lg bg-red-500/20 p-4">
                <div className="p-2 w-fit flex rounded-2xl capitalize items-center gap-2 text-blue-500">
                  <MdMonitorIcon />
                  Uniswap wallet
                </div>
                <div className="text-4xl bg-transparent my-4">
                The wallet built for swapping. Available on iOS and Android.
                </div>
                <div className="w-[95%]  mx-auto bg-transparent flex-col gap-2">
                  {cryptoicons.slice(0, 4).map((i, index) => (
                    <div
                      className="flex text-4xl justify-between gap-4 rounded-2xl p-3 my-3 hover:scale-105 transion duration-300"
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                        <div>{i.svg}</div>
                        {i.name}
                      </div>
                      <div className="text-3xl"> Current rate</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 my-4 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-lg bg-grey-500/50">
              <div className="h-fit rounded-lg bg-green-500/20 p-4">
                <div className="p-2 w-fit flex rounded-2xl capitalize items-center gap-2 text-blue-500">
                  <MdMonitorIcon />
                  Developer docs
                </div>
                <div className="text-4xl bg-transparent my-4">
                Build the next generation of open applications and tools.
                </div>
                <div className="w-[95%]  mx-auto bg-transparent flex-col gap-2">
                  {cryptoicons.slice(0, 4).map((i, index) => (
                    <div
                      className="flex text-4xl justify-between gap-4 rounded-2xl p-3 my-3 hover:scale-105 transion duration-300"
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                        <div>{i.svg}</div>
                        {i.name}
                      </div>
                      <div className="text-3xl"> Current rate</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-fit rounded-lg bg-purple-500/20 p-4">
              <div className="p-2 w-fit flex rounded-2xl capitalize items-center gap-2 text-pink-500">
                <MdMonitorIcon />
                Liquidity
              </div>
              <div className="text-4xl bg-transparent my-4">
              Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.
              </div>
              <div className="w-[95%]  mx-auto bg-transparent flex-col gap-2">
                {cryptoicons.slice(0, 4).map((i, index) => (
                  <div
                    className="flex text-4xl justify-between gap-4 rounded-2xl p-3 my-3 hover:scale-105 transion duration-300"
                    key={index}
                  >
                    <div className="flex items-center gap-4">
                      <div>{i.svg}</div>
                      {i.name}
                    </div>
                    <div className="text-3xl"> Current rate</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-32 mx-auto font-bold font-mono scroll-smooth">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-lg h-full p-4 flex-col order-1">
                <div className="text-4xl text-white bg-transparent">
                  Trusted by millions
                </div>
                <div className="h-fit">
                  <div className="text-2xl mt-36">
                    Uniswap products are powered by the Uniswap Protocol. The
                    protocol is the largest onchain marketplace, with billions
                    of dollars in weekly volume across thousands of tokens on
                    Ethereum and 7+ additional chains.
                  </div>
                  <div>
                    <div className="flex items-center h-fit py-2 w-fit hover:bg-gray-700/10 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
                      <div className="capitalize cursor-pointer font-medium  bg-transparent text-white mx-auto">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rounded-lg  order-2">
                <div className="grid  grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                  <div className=" my-2  rounded-lg bg-red-500/10">
                    <div className="p-4 my-6 bg-transparent">
                      All time volume
                    </div>
                    <div className="p-4 my-6 bg-transparent flex text-4xl text-white gap-2">
                      $
                      <AnimatedNumbers
                        includeComma
                        className="bg-transparent"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber={num}
                        fontStyle={{
                          fontSize: 40,
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      />
                      .0T
                    </div>
                  </div>
                  <div className="my-2 rounded-lg bg-gray-500/10">
                    <div className="p-4 my-6 bg-transparent">
                      All time swappers
                    </div>
                    <div className="p-4 my-6 bg-transparent flex items-center text-4xl text-white">
                      <AnimatedNumbers
                        includeComma
                        className="bg-transparent"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber={num1}
                        fontStyle={{
                          fontSize: 40,
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      />
                      .6M
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                  <div className=" my-2  rounded-lg bg-green-500/10">
                    <div className="p-4 my-6 bg-transparent">
                      All time volume
                    </div>
                    <div className="p-4 my-6 bg-transparent flex text-4xl text-white gap-2">
                      $
                      <AnimatedNumbers
                        includeComma
                        className="bg-transparent"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber={num2}
                        fontStyle={{
                          fontSize: 40,
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      />
                      .4B
                    </div>
                  </div>
                  <div className="my-2 rounded-lg bg-pink-500/10">
                    <div className="p-4 my-6 bg-transparent text-green-500">
                      . 24H volume
                    </div>
                    <div className="p-4 my-6 bg-transparent flex text-4xl text-green-500">
                      $
                      <AnimatedNumbers
                        includeComma
                        className="bg-transparent"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber={num3}
                        fontStyle={{
                          fontSize: 40,
                          color: "green",
                          backgroundColor: "transparent",
                        }}
                      />
                      .2B
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-12">
              <div className="text-5xl text-white my-4">Connect with us</div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                <div className="rounded-lg bg-orange-400/10 p-4">
                  <div className="bg-transparent">
                    <div className="flex items-center h-fit py-2 w-fit hover:bg-gray-700/10 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
                      <div className="capitalize cursor-pointer font-medium  bg-transparent text-orange-500 mx-auto">
                        help center
                      </div>
                    </div>
                    <div className="text-2xl mt-14 bg-transparent text-orange-500">
                      Get Support
                    </div>
                  </div>
                </div>
                <div className=" rounded-lg bg-amber-400/10 p-4">
                  <div className="bg-transparent">
                    <div className="flex items-center h-fit py-2 w-fit hover:bg-gray-700/10 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
                      <div className="capitalize cursor-pointer font-medium  bg-transparent text-amber-500 mx-auto">
                        Blog
                      </div>
                    </div>
                    <div className="text-2xl mt-14 bg-transparent text-amber-500">
                      Insights and news from the team
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-500/10 p-4 lg:col-span-2">
                  <div className="bg-transparent">
                    <div className="flex items-center h-fit py-2 w-fit hover:bg-gray-700/10 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
                      <div className="capitalize cursor-pointer font-medium  bg-transparent text-purple-500 mx-auto">
                        Stay connected
                      </div>
                    </div>
                    <div className="text-2xl mt-14 bg-transparent text-purple-500">
                      Follow @Uniswap on X for the latest updates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
