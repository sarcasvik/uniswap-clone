import { useState } from "react";
import Swapelement from "../elements/Swapelement";
import Limitelement from "../elements/Limit";
import Sendelement from "../elements/Sendelement";

const Swap = () => {
  const [swapselected, setSwapselected] = useState("Swap");

  const swapmenu = [
    {
      name: "Swap",
      Component: <Swapelement />,
    },
    {
      name: "Limit",
      Component: <Limitelement />, 
    },
    {
      name: "Send",
      Component: <Sendelement />, 
    },
  ];

  return (
    <div className="h-screen w-full flex items-center">
      <div className="mx-auto my-auto w-fit mt-24">
        <div className="text-white flex w-[80%] mx-auto gap-2">
          {swapmenu.map((item) => (
            <div
              key={item.name}
              className={`p-2 rounded-2xl px-4 transition duration-300 ${
                swapselected === item.name ? 'bg-gray-600/10' : ''
              }`}
              onClick={() => setSwapselected(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {swapmenu.find((item) => item.name === swapselected)?.Component}
        </div>
      </div>
    </div>
  );
};

export default Swap;

