import React from 'react';
import { BurstMode, Favorite, FavoriteBorder } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';

export const FavoriteComponent = () => {
  // const [idxSelected, setIdxSelected] = React.useState(0);
  //
  // const handleIdxSelected = (index: number) => {
  //   setIdxSelected(index);
  // };
  return (
    <div className="div-flex-styled">
      <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
        <Checkbox
          icon={
            <FavoriteBorder
              fontSize={'medium'}
              style={{ color: 'var(--orange)' }}
              // onClick={() => handleIdxSelected(idxSelected)}
            />
          }
          checkedIcon={<Favorite fontSize={'medium'} style={{ color: 'var(--orange)' }} />}
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
