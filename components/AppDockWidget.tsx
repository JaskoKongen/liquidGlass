
import React from 'react';
import GlassContainer from './GlassContainer';

const appIconsData = [
  { alt: "Finder", src: "https://assets.codepen.io/923404/finder.png" },
  { alt: "Maps", src: "https://assets.codepen.io/923404/map.png" },
  { alt: "Messages", src: "https://assets.codepen.io/923404/messages.png" },
  { alt: "Safari", src: "https://assets.codepen.io/923404/safari.png" },
  { alt: "Books", src: "https://assets.codepen.io/923404/books.png" },
];

interface AppDockWidgetProps {
  glassOpacity?: number;
}

const AppDockWidget: React.FC<AppDockWidgetProps> = ({ glassOpacity }) => {
  return (
    <GlassContainer 
        baseRounded="rounded-[2rem]"
        contentClassName="p-4 gap-3 sm:gap-5 flex-wrap justify-center"
        glassOpacity={glassOpacity}
    >
      {appIconsData.map((app) => (
        <a 
          key={app.alt} 
          href="#" 
          className="inline-block relative p-px rounded-[1.2rem] group"
          aria-label={app.alt}
        >
          <img 
            src={app.src} 
            alt={app.alt} 
            className="block w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.5)] group-hover:scale-95" 
          />
        </a>
      ))}
    </GlassContainer>
  );
};

export default AppDockWidget;