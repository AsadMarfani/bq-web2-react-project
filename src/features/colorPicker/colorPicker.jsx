import { useState } from "react";

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState("white");
  const [colorHistory, setColorHistory] = useState([]);

  const colors = ["red", "blue", "green", "yellow", "purple"];

  const handleColorSelect = (color) => {
    setBgColor(color);
    addColorToHistory(color);
  };

  const addColorToHistory = (color) => {
    setColorHistory([color, ...colorHistory]);
  };

  return (
    <div className="p-4">
      <div
        className={`w-full h-48 mb-4 rounded-lg border-2 border-black flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-white text-xl font-bold">Color Preview</h2>
      </div>

      <h3 className="text-lg font-semibold mb-2">Select a Color:</h3>
      <div className="flex flex-wrap mb-4">
        {colors.map((color) => (
          <button
            key={color}
            className={`m-1 p-2 rounded-lg text-white font-semibold`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          >
            {color}
          </button>
        ))}
      </div>

      {/* Color History Section */}
      <h3 className="text-lg font-semibold mb-2">Color History:</h3>
      <div className="flex flex-wrap">
        {colorHistory.map((color, index) => (
          <button
            key={index}
            className={`m-1 p-2 rounded-lg text-white font-semibold`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
