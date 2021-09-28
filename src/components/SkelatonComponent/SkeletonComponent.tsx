import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const SkeletonComponent = () => {
  return (
    <Box className="flex flex-row justify-between w-full mt-12 rounded-3xl">
      {[1, 2, 3, 4].map((item, index) => (
        <Box
          key={index}
          className="flex flex-col justify-around flex-nowrap w-96 lg:p-8 lg:mr-0 mr-2.5 rounded-3xl lg:bg-gray-50 border-gray-400"
        >
          <Skeleton className="w-full rounded-3xl items-center mb-4" height={250} variant="rect" />
          <Skeleton className="w-full rounded-3xl my-4" height={40} />
          <Skeleton className="w-full rounded-3xl my-4" height={20} />
          <Typography component="div" className="flex flex-row items-center justify-between my-4 w-full">
            <Typography>
              <Skeleton className="w-32 rounded-3xl my-4" height={20} />
              <Skeleton className="lg:w-32 lg:block hidden rounded-3xl my-4" height={20} />
            </Typography>
            <Skeleton className="lg:w-24 lg:block hidden rounded-3xl my-4" height={40} />
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
