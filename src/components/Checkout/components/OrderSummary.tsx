import React from 'react';
import { Checkbox } from '@material-ui/core';
import { BurstMode, Clear, Favorite, FavoriteBorder } from '@material-ui/icons';

export const OrderSummary = () => {
  return (
    <div>
      <h3>Order Summary</h3>
      <p className="text__color-gray mb-6">Price can change depending on shipping method and taxes of your state.</p>
      <div>
        <div>
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
          <span>
            <Clear fontSize={'medium'} /> Remove
          </span>
        </div>
      </div>
    </div>
  );
};
