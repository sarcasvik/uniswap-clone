import { ChevronDownIcon, ClDrawerIcon } from "../elements/icons";

const Pool = () => {
  return (
    <div className="h-screen flex w-[80%] md:w-[50%] mx-auto">
      <div className="pt-24 w-full">
        <div className="pt-32">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="text-white text-4xl">Positions</div>
              <div className="p-2 px-4 rounded-xl flex gap-2 items-center text-white bg-gray-400/10 hover:cursor-pointer">
                <div className="bg-transparent">V3</div>
                <ChevronDownIcon customstyles="bg-transparent" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="p-2 px-4 rounded-xl flex gap-2 items-center text-white bg-gray-400/10 hover:cursor-pointer">
                <div className="bg-transparent">More</div>
                <ChevronDownIcon customstyles="bg-transparent" />
              </div>
              <div className="p-2 px-4 rounded-xl flex gap-2 items-center text-white bg-pink-500 hover:cursor-pointer">
                <div className="bg-transparent">+</div>
                <div className="bg-transparent">New Position</div>
              </div>
            </div>
          </div>
          <div className="m-4 border border-gray-50/10 rounded-xl p-4 flex-col items-center justify-center">
            <div>
              <div className="m-8">
                <div className="w-fit mx-auto">
                  <ClDrawerIcon customstyles="text-4xl text-white" />
                </div>
                <div className="w-[60%] text-center mx-auto text-lg text-white m-4">
                  Your active V3 liquidity positions will appear here.
                </div>
              </div>
            </div>
            <div className="p-2 px-2 w-[30%] mx-auto rounded-xl flex gap-2 items-center text-white bg-pink-500 hover:cursor-pointer justify-center">
              <div className="bg-transparent font-bold text-center">Connect Wallet</div>
            </div>
          </div>
          <div className="my-12 mx-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="p-2 border border-gray-50/10 rounded-xl flex items-center justify-center text-gray-50/50">
                <div>
                  <div>Learn about providing liquidity ↗</div>
                  <div>
                    Check out our v3 LP walkthrough and migration guides.
                  </div>
                </div>
              </div>

              <div className="p-2 border border-gray-50/10 rounded-xl flex items-center justify-center text-gray-50/50">
                <div>
                  <div>Learn about providing liquidity ↗</div>
                  <div>
                    Check out our v3 LP walkthrough and migration guides.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;

