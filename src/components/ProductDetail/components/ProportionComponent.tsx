import { Product } from 'WooCommerce';
import React from 'react';

export const ProportionComponent = ({ item }: { item: Product }) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-between items-center rounded-xl mb-8 w-full ">
      <div className="flex flex-row gap-4 justify-between items-center rounded-xl w-max select-styled ">
        <span className="text__p uppercase font-bold text__color-gray">Size:</span>
        {item?.attributes?.map((val) => (
          <select
            key={val?.name === 'size' ? val?.name : val?.id}
            name={val?.name}
            className={
              val?.name === 'size'
                ? 'select-styled px-4 py-2.5 mr-8 rounded-2xl outline-none border-opacity-0'
                : 'hidden'
            }
          >
            {val?.options.map((i) => (
              <option key={i} value={i}>
                {i.toUpperCase()}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-between items-center text__color-gray rounded-xl w-max select-styled ">
        <span className="text__p uppercase font-bold text__color-gray">Height:</span>
        {item?.attributes?.map((val) => (
          <select
            key={val?.name.toLowerCase() === 'height' ? val?.name.toLowerCase() : val?.id}
            name={val?.name}
            className={
              val?.name.toLowerCase() === 'height'
                ? 'select-styled px-4 py-2.5 mr-8 rounded-2xl outline-none border-opacity-0'
                : 'hidden'
            }
          >
            {val?.options.map((i) => (
              <option key={i} value={i}>
                {i.toUpperCase()}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};
