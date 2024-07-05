import React from 'react';
import * as VFX from 'react-vfx';

const VFXLogo: React.FC = () => {
  return (
    <VFX.VFXProvider>
      <div className="flex justify-center">
        <VFX.VFXImg 
          src="/logo.png" 
          alt="Logo" 
          shader="rgbShift" 
          className="max-w-md w-full h-auto bg-transparent" 
        />
      </div>
    </VFX.VFXProvider>
  );
};

export default VFXLogo;
