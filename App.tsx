
import React, { useEffect, useRef, useState } from 'react';
import PlayerWidget from './components/PlayerWidget';
import NavWidgetsRow from './components/NavWidgetsRow';
import SearchButtonWidget from './components/SearchButtonWidget';
import AppDockWidget from './components/AppDockWidget';
import SliderWidget from './components/SliderWidget';
import ToggleWidget from './components/ToggleWidget';

const App: React.FC = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const backgroundYOffsetRef = useRef<number>(0);
  const [glassOpacity, setGlassOpacity] = useState<number>(0); // Default to 25% opacity for the white layer

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (mainDivRef.current) {
        event.preventDefault(); 
        
        const scrollSpeed = 0.3; 
        backgroundYOffsetRef.current -= event.deltaY * scrollSpeed;
        mainDivRef.current.style.backgroundPosition = `center calc(50% + ${backgroundYOffsetRef.current}px)`;
      }
    };

    const currentMainDiv = mainDivRef.current;
    if (currentMainDiv) {
      currentMainDiv.style.backgroundPosition = `center calc(50% + ${backgroundYOffsetRef.current}px)`;
      currentMainDiv.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentMainDiv) {
        currentMainDiv.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div 
      ref={mainDivRef}
      className="h-screen w-full flex flex-col items-center main-background overflow-hidden"
    >
      <div className="w-full max-w-2xl flex flex-col flex-grow items-center justify-start pt-12 pb-12 px-4 sm:px-8 overflow-hidden">
        <div className="w-full h-full overflow-y-auto space-y-8 no-scrollbar pr-[1px]"> 
            <PlayerWidget glassOpacity={glassOpacity} />
            <NavWidgetsRow glassOpacity={glassOpacity} />
            <SearchButtonWidget glassOpacity={glassOpacity} />
            <AppDockWidget glassOpacity={glassOpacity} />
            <SliderWidget 
              containerGlassOpacity={glassOpacity} 
              currentGlobalGlassOpacity={glassOpacity}
              onGlobalGlassOpacityChange={setGlassOpacity}
            />
            <ToggleWidget glassOpacity={glassOpacity} />
        </div>
      </div>
    </div>
  );
};

export default App;