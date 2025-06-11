
import React from 'react';
import GlassContainer from './GlassContainer';
import { SearchIcon } from './icons';

interface SearchButtonWidgetProps {
  glassOpacity?: number;
}

const SearchButtonWidget: React.FC<SearchButtonWidgetProps> = ({ glassOpacity }) => {
  return (
    <GlassContainer 
      variant="small"
      contentClassName="py-2 px-6 gap-2"
      glassOpacity={glassOpacity}
    >
      <SearchIcon width="18" height="18" fillColor="white" />
      <span className="text-sm">Search</span>
    </GlassContainer>
  );
};

export default SearchButtonWidget;