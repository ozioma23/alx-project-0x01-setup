import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 text-center text-gray-500 mt-10">
      © {new Date().getFullYear()} My App
    </footer>
  );
};

export default Footer;
