import React from "react";
import useToggle from "../hooks/useToggle";

interface DarkModeToggleProps {
  onToggle: (isDark: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onToggle }) => {
  const { value: isDark, toggle } = useToggle(false);

  const handleToggle = () => {
    toggle();
    onToggle(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
        isDark
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
