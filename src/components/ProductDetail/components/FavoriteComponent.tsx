import React from 'react';
import { BurstMode, FavoriteBorder } from '@material-ui/icons';

export const FavoriteComponent = () => {
  // const [idxSelected, setIdxSelected] = React.useState(0);
  //
  // const handleIdxSelected = (index: number) => {
  //   setIdxSelected(index);
  // };
  return (
    <div className="flex flex-row gap-12 justify-between flex-wrap items-center mb-8">
      <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
        <FavoriteBorder
          fontSize={'medium'}
          style={{ color: 'var(--orange)' }}
          // onClick={() => handleIdxSelected(idxSelected)}
        />
        Add to my wish list
      </span>
      <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
        <BurstMode fontSize={'medium'} style={{ color: 'var(--orange)' }} />
        Compare
      </span>
    </div>
  );
};
