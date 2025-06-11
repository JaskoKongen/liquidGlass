
import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  variant?: 'rounded' | 'small' | 'large' | 'medium';
  baseRounded?: string; 
  className?: string; 
  contentClassName?: string;
  element?: keyof JSX.IntrinsicElements;
  glassOpacity?: number; // New prop for controlling white layer opacity (0.0 to 1.0)
}

const GlassContainer: React.FC<GlassContainerProps> = ({ 
  children, 
  variant, 
  baseRounded = 'rounded-[2rem]', 
  className, 
  contentClassName,
  element: Component = 'div',
  glassOpacity 
}) => {
  let containerClasses = `relative flex font-semibold text-white cursor-pointer bg-transparent shadow-[0_6px_6px_rgba(0,0,0,0.2),_0_0_20px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] overflow-hidden`;

  let currentAppliedRadiusClass = baseRounded;

  if (variant === 'rounded' || variant === 'small') {
    currentAppliedRadiusClass = 'rounded-[5rem]';
    if (variant === 'rounded') {
      containerClasses += " m-2"; 
    }
  }
  
  containerClasses += ` ${currentAppliedRadiusClass}`; 

  if (variant === 'small') {
    containerClasses += " mt-20 mb-4 mx-0 text-shadow-[1px_1px_1px_rgba(0,0,0,0.25)]";
  } else if (variant === 'large') {
    containerClasses += " min-w-[32rem]";
  } else if (variant === 'medium') {
    containerClasses += " min-w-[25rem]";
  }
  
  // Determine the alpha value for the white layer
  const currentOpacity = glassOpacity !== undefined ? glassOpacity : 0.25;

  return (
    <Component className={`${containerClasses} ${className ?? ''}`}>
      <div className={`absolute inset-0 z-0 backdrop-blur-sm apply-lg-dist-filter ${currentAppliedRadiusClass}`}></div>
      {/* Apply dynamic background color using inline style */}
      <div 
        className={`absolute inset-0 z-[1] ${currentAppliedRadiusClass}`}
        style={{ backgroundColor: `rgba(255, 255, 255, ${currentOpacity})` }}
      ></div>
      <div className={`absolute inset-0 z-[2] ${currentAppliedRadiusClass} overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.45),_inset_0_0_5px_rgba(255,255,255,0.45)]`}></div>
      <div className={`relative z-[3] flex items-center w-full ${contentClassName ?? 'gap-5 p-4 pr-6 pb-[0.9rem]'}`}>
        {children}
      </div>
    </Component>
  );
};

export default GlassContainer;