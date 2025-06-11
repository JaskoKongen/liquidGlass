
import React, { useState } from 'react';
import GlassContainer from './GlassContainer';

interface SliderWidgetProps {
  containerGlassOpacity?: number; // Opacity for the GlassContainers rendered BY this widget
  currentGlobalGlassOpacity?: number; // The current global glass opacity value (for the new slider)
  onGlobalGlassOpacityChange?: (opacity: number) => void; // Callback to change the global glass opacity
}

const SliderWidget: React.FC<SliderWidgetProps> = ({ 
  containerGlassOpacity, 
  currentGlobalGlassOpacity, 
  onGlobalGlassOpacityChange 
}) => {
  const [brightness, setBrightness] = useState(75);
  const [volume, setVolume] = useState(50);

  const handleGlobalOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onGlobalGlassOpacityChange) {
      onGlobalGlassOpacityChange(Number(event.target.value) / 100);
    }
  };

  const displayGlobalOpacity = currentGlobalGlassOpacity !== undefined 
    ? Math.round(currentGlobalGlassOpacity * 100) 
    : 0; // Default to 25% if undefined

  return (
    <>
      <GlassContainer 
        variant="medium" 
        baseRounded="rounded-[2rem]"
        className="w-full"
        contentClassName="p-4 flex-col gap-3"
        glassOpacity={containerGlassOpacity}
      >
        <div className="w-full">
          <label htmlFor="brightness-slider" className="block text-sm font-medium text-white/90 mb-1">
            Brightness
          </label>
          <input
            id="brightness-slider"
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="custom-slider"
            aria-label="Brightness"
          />
        </div>
      </GlassContainer>
      <GlassContainer 
        variant="medium" 
        baseRounded="rounded-[2rem]"
        className="w-full mt-4"
        contentClassName="p-4 flex-col gap-3"
        glassOpacity={containerGlassOpacity}
      >
        <div className="w-full">
          <label htmlFor="volume-slider" className="block text-sm font-medium text-white/90 mb-1">
            Volume
          </label>
          <input
            id="volume-slider"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="custom-slider"
            aria-label="Volume"
          />
        </div>
      </GlassContainer>
      <GlassContainer 
        variant="medium" 
        baseRounded="rounded-[2rem]"
        className="w-full mt-4"
        contentClassName="p-4 flex-col gap-3"
        glassOpacity={containerGlassOpacity}
      >
        <div className="w-full">
          <label htmlFor="glass-opacity-slider" className="block text-sm font-medium text-white/90 mb-1">
            Glass Opacity Slider          </label>
          <input
            id="glass-opacity-slider"
            type="range"
            min="0"  // Represents 0% opacity (fully transparent white layer)
            max="100" // Represents 100% opacity (fully opaque white layer)
            value={displayGlobalOpacity}
            onChange={handleGlobalOpacityChange}
            className="custom-slider"
            aria-label="Transparency"
          />
        </div>
      </GlassContainer>
    </>
  );
};

export default SliderWidget;