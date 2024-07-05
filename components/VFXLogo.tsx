import React from 'react';
import * as VFX from 'react-vfx';

const VFXLogo: React.FC = () => {
  return (
    <VFX.VFXProvider>
      <VFX.VFXImg 
        src="/logo.png" 
        alt="Logo" 
        shader="rgbShift" 
        className="w-128 h-auto mx-auto my-8 bg-transparent" 
      />
    </VFX.VFXProvider>
  );
};

export default VFXLogo;
