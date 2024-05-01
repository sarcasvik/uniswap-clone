import { useState } from "react";
import { IoMdCheckmarkIcon } from "../elements/icons";
import { cryptoicons, ChevronDownIcon } from "../elements/icons";

const Sendelement = () => {
  const [selectedToken2, setSelectedToken2] = useState<string | null>("Etherium");
  const [token2, setToken2] = useState<boolean>(false);
  const [exchange, setExchange] = useState<boolean>(false);

  const toggletokenmenu2 = () => {
    setToken2(!token2);
  };

  const toggleExchange = () => {
    setExchange(!exchange);
  };

  return (
    <>
      <div className="w-[80%] lg:w-[80%]  mx-auto m-4 bg-black/80 p-1 rounded-2xl z-10">
        <div className="relative  rounded-2xl z-0">
          <div className="p-1  rounded-2xl bg-transparent">
            <div className="h-60 rounded-xl border border-gray-50 p-2 px-4 flex-col justify-center items-center">
              <div className="h-full flex items-center">
                <div className="relative">
                  <div className="font-sm absolute top-[-50px] text-white font-thin">
                    You are sending
                  </div>
                  <div className="flex text-7xl text-white gap-4 w-[50%] mx-auto">
                    $
                    <input
                      type="text"
                      placeholder="0"
                      className="w-full font-mono bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 text-7xl transition-font-medium group-hover:font-medium "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 bg-transparent mt-[0px]">
            <div className="h-fit rounded-xl border border-gray-50 p-2 px-4 flex-col justify-center">
              <div className="flex w-full">
                <div
                  className="py-2 px-4 w-full rounded-xl text-gray-600  relative transition ease-out duration-300 cursor-pointer"
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
                    <div className="flex gap-2 bg-transparent justify-between items-center bg-pink-300/40 p-2 items-center rounded-xl">
                      {selectedToken2 && (
                        <>
                          {cryptoicons.map((icon, index) => {
                            if (icon.name === selectedToken2) {
                              return (
                                <div key={index} className="bg-transparent text-white flex items-center text-2xl gap-4">
                                  {icon.svg}
                                  Eth
                                </div>
                              );
                            }
                            return null;
                          })}
                        </>
                      )}
                      <ChevronDownIcon
                        customstyles={`bg-transparent text-white ${token2
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
        <div className="h-fit transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
          <div className="text-white px-4">to</div>
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Wallet address or ENS name"
              className="w-full bg-transparent text-white border-none outline-none flex-1 placeholder-gray-400 text-lg transition-font-medium group-hover:font-medium "
            />
          </div>
        </div>
        <div className="flex items-center h-16 bg-pink-400/20 hover:bg-pink-300/20 transition ease-out duration-300 rounded-xl border-[0.5px] border-gray-50/10 px-2 my-2">
          <div className="capitalize cursor-pointer font-medium px-2 py-1 bg-transparent text-pink-300 mx-auto" onClick={toggleExchange}>
            connect Wallet
          </div>
        </div>
      </div>
    </>
  );
};

export default Sendelement;

