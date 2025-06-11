
import React from 'react';

interface GlassItemProps {
  children?: React.ReactNode; // Made children optional
  icon?: React.ReactElement<any>; // Expect a ReactElement for icon to clone
  isActive?: boolean;
  className?: string;
  iconHeight?: string; // e.g., "50px"
}

const GlassItem: React.FC<GlassItemProps> = ({ children, icon, isActive, className, iconHeight = "auto" }) => {
  let itemClasses = "flex flex-col items-center justify-between text-[#5b5b5b] transition-colors duration-300 ease-in-out text-center"; // --lg-grey
  
  const iconColor = isActive ? '#fb4268' : '#5b5b5b'; // --lg-red or --lg-grey

  if (isActive) {
    // Using more specific values for padding to match example: px-[1.95rem] -> px-8 is close (2rem), py-1
    // mx-[-0.5rem] -> -mx-2
    itemClasses += " bg-black/25 text-[#fb4268] -mx-2 px-[1.95rem] py-1 rounded-[5rem]";
  } else {
    // Default padding for non-active items if needed, or rely on parent gap
    itemClasses += " rounded-2xl"; // Default rounding for non-active
  }

  return (
    <div className={`${itemClasses} ${className ?? ''}`}>
      {icon && (
        <div className="mb-1">
          {React.cloneElement(icon, { fillColor: iconColor, height: icon.props.height || iconHeight, width: icon.props.width || 'auto' })}
        </div>
      )}
      {children}
    </div>
  );
};

export default GlassItem;
