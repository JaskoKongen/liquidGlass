
import React from 'react';
import GlassContainer from './GlassContainer';
import { PlayIcon, FastForwardIcon } from './icons';

interface PlayerWidgetProps {
  glassOpacity?: number;
  isDarkMode?: boolean; // Added for dark mode
}

const PlayerWidget: React.FC<PlayerWidgetProps> = ({ glassOpacity, isDarkMode = true }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subTextColor = isDarkMode ? 'opacity-70' : 'opacity-60';
  const iconFill = isDarkMode ? 'white' : 'black';
  const hoverBg = isDarkMode ? 'hover:bg-white/20' : 'hover:bg-black/10';

  return (
    <GlassContainer 
        variant="large" 
        baseRounded="rounded-[5rem]"
        className="m-2"
        contentClassName="p-1 pr-8 pl-2 flex-1 justify-between"
        glassOpacity={glassOpacity}
        isDarkMode={isDarkMode}
    >
      <div className="flex items-center w-full flex-1 justify-between">
        <div className="flex items-center justify-center ml-2">
          <img 
            className="w-20 h-auto my-1 rounded-lg"
            src='https://images.unsplash.com/photo-1619983081593-e2ba5b543168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk1NzAwNDV8&ixlib=rb-4.1.0&q=80&w=160' 
            alt='Album art for All Of Me'
          />
          <div className={`flex flex-col mx-4 ${textColor}`}>
            <h3 className="text-base font-semibold m-0">All Of Me</h3>
            <span className={`text-sm m-0 ${subTextColor}`}>Nao</span>
          </div>
        </div>

        <div className="flex items-center justify-center -mr-4">
          <button className={`mr-4 flex p-2 rounded-full ${hoverBg} transition-colors`} aria-label="Play">
            <PlayIcon width="20" height="20" fillColor={iconFill} />
          </button>
          <div className="flex space-x-2">
             <button className={`flex p-2 rounded-full ${hoverBg} transition-colors`} aria-label="Next track">
                <FastForwardIcon width="20" height="20" fillColor={iconFill} />
             </button>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
};

export default PlayerWidget;
