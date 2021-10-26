import React from 'react';
import { Rating } from '@material-ui/lab';

export const StarRatingComponent = () => {
  return (
    <div className="flex flex-row justify-start items-center my-8">
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
      <p className="underline text__color-gray ml-4">(1 customer review)</p>
    </div>
  );
};
