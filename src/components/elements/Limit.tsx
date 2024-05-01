import { useState } from "react";
import {
  CgArrowsExchangeAltVIcon,
  CiWarningIcon,
  IoMdCheckmarkIcon,
} from "../elements/icons";
import { cryptoicons, ChevronDownIcon } from "./../elements/icons";

const Limitelement: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<string | null>("Etherium"); // Define selectedToken state
  const [selectedToken2, setSelectedToken2] = useState<string | null>(
    "Etherium"
  ); // Define selectedToken state
  const [token, setToken] = useState<boolean>(false);
  const [token2, setToken2] = useState<boolean>(false);
  const [exchange, setExchange] = useState<boolean>(false);

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
      <div className="w-[80%] lg:w-[80%]  mx-auto m-4 bg-black/80 p-1 rounded-2xl z-10">
        <div className="h-fit rounded-xl border border-gray-50 py-2 px-4 flex-col justify-center m-1 ">
          <div className="font-sm font-thin flex  justify-between text-white items-center gap-2 ">
            <div className="flex">
              <div>You pay</div>{" "}
              {cryptoicons.slice(0, 1).map((i) => (
                <div>{i.svg}</div>
              ))}
              <div>Eth is worth</div>
            </div>
            <CgArrowsExchangeAltVIcon customstyles="text-4xl" />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="2969.52"
              className="w-full font-mono bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 text-4xl transition-font-medium group-hover:font-medium "
            />
            <div>
              <div
                className="py-2 px-4 rounded-xl text-gray-600  relative transition ease-out duration-300 cursor-pointer"
                onClick={toggletokenmenu}
              >
                <div className="flex gap-2 bg-transparent items-center bg-pink-300/40 p-2 rounded-xl">
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
                  <div className="text-white">USDTC</div>
                </div>
                <div
                  className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${
                    token
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
                            className={`p-2 bg-transparent ${
                              selectedToken === icon.name ? "" : "invisible"
                            }`}
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
          <div className="p-2 flex gap-4">
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400 transition duration-300 hover:bg-gray-500">
              Market
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +1%
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +5%
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +10%
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <div className="p-1 bg-transparent">
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
                      <div className="flex gap-2 bg-transparent items-center bg-pink-300/40 p-2 rounded-xl">
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
                          customstyles={`bg-transparent text-white ${
                            token
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
                          customstyles={`bg-transparent text-white ${
                            token2
                              ? "transition rotate-180 duration-300"
                              : "transition rotate-0 duration-300"
                          }`}
                        />
                      </div>
                    )}
                    <div
                      className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${
                        token
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
                                className={`p-2 bg-transparent ${
                                  selectedToken === icon.name
                                    ? ""
                                    : "invisible"
                                }`}
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
                          customstyles={`bg-transparent text-white ${
                            token2
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
                          customstyles={`bg-transparent text-white ${
                            token
                              ? "transition rotate-180 duration-300"
                              : "transition rotate-0 duration-300"
                          }`}
                        />
                      </div>
                    )}
                    <div
                      className={`absolute border-white top-[55px] right-[10px] p-3 w-fit rounded-xl border-[0.25px] border-gray-300/15  ${
                        token2
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
                                className={`p-2 bg-transparent ${
                                  selectedToken2 === icon.name ? "" : "invisible"
                                }`}
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
        <div className="flex justify-between bg-transparent">
          <div className="px-4 flex items-center text-white bg-transparent">
            <div className="bg-transparent">Expiry</div>
          </div>
          <div className="p-2 flex gap-4 bg-transparent">
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400 transition duration-300 hover:bg-gray-500">
              Market
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +1%
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +5%
            </div>
            <div className="p-1 px-2 rounded-xl text-white bg-gray-400/10 transition duration-300 hover:bg-gray-500">
              +10%
            </div>
          </div>
        </div>
        <div className="flex items-center h-16 bg-pink-400/20 hover:bg-pink-300/20 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
          <div className="capitalize cursor-pointer font-medium px-2 py-1 bg-transparent text-pink-300 mx-auto">
            connect Wallet
          </div>
        </div>
        <div className="flex items-center h-16 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2 justify-between">
          <div className="px-4">
            <CiWarningIcon customstyles="text-4xl text-white"/>
          </div>
          <div>
            <div className="capitalize cursor-pointer text-sm font-medium px-2 py-1 bg-transparent text-white mx-auto">
              Limits may not execute exactly when tokens reach the specified
              price. Learn more
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Limitelement;

