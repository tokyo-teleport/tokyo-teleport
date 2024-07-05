import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t border-gray-800 bg-black">
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Tokyo Teleport. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
