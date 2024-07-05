import React from 'react';
import * as VFX from 'react-vfx';

const VFXLogo: React.FC = () => {
  return (
    <VFX.VFXProvider>
      <div className="flex justify-center items-center max-w-md mx-auto my-8">
        <VFX.VFXImg 
          src="/logo.png" 
          alt="Logo" 
          shader="rgbShift" 
          className="w-full h-auto bg-transparent" 
          shaderParams={{ amount: 0.02 }} // 少し弱めのrgbShiftエフェクト
        />
      </div>
    </VFX.VFXProvider>
  );
};

export default VFXLogo;
