import React, { useState } from "react";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import JwellCategory from "./JwellCategory";
import ElectronicsCategory from "./ElectronicsCategory";

const Navbar: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState("A");

  const renderComponent = () => {
    switch (currentComponent) {
      case "A":
        return <MenCategory />;
      case "B":
        return <WomenCategory />;
      case "C":
        return <JwellCategory />;
      case "D":
        return <ElectronicsCategory />;
      default:
        return <MenCategory />;
    }
  };
  return (
    <div className="relative p-2 w-100">
      <div className="flex justify-start items-center space-x-4 mb-6 w-100">
        <button
          onClick={() => setCurrentComponent("A")}
          className={` rounded-xl h-8 text-sm    px-2 text-gray-400 ${
            currentComponent === "A" ? "bg-custom-yellow" : "bg-transparent"
          }`}
        >
          Men's
        </button>
        <button
          onClick={() => setCurrentComponent("B")}
          className={` rounded-xl h-8 text-sm    px-2 text-gray-400 ${
            currentComponent === "B" ? "bg-custom-yellow" : "bg-transparent"
          }`}
        >
          Women's{" "}
        </button>
        <button
          onClick={() => setCurrentComponent("C")}
          className={` rounded-xl h-8 text-sm    px-2 text-gray-400 ${
            currentComponent === "C" ? "bg-custom-yellow" : "bg-transparent"
          }`}
        >
          Jwellary
        </button>
        <button
          onClick={() => setCurrentComponent("D")}
          className={` rounded-xl h-8 text-sm   px-2 text-gray-400 ${
            currentComponent === "D" ? "bg-custom-yellow" : "bg-transparent"
          }`}
        >
          Electronics
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default Navbar;
