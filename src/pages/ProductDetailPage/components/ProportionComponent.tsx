import { Product } from 'WooCommerce';
import React from 'react';

export const ProportionComponent = ({ item }: { item: Product }) => {
  return (
    <div className="div-flex-styled">
      <div className="flex flex-row gap-4 justify-between items-center rounded-xl w-max select-styled ">
        <span className="text__p uppercase font-bold text__color-gray">Size:</span>
        {item?.attributes?.map((val) => {
          if (val?.name.toLowerCase() === 'size') {
            return (
              <select
                key={val?.name.toLowerCase()}
                name={val?.name}
                className={'select-styled px-4 py-2.5 mr-8 rounded-2xl border-opacity-0'}
              >
                {val?.options.map((i) => (
                  <option key={i} value={i}>
                    {i.toUpperCase()}
                  </option>
                ))}
              </select>
            );
          }
        })}
      </div>
      <div className="flex flex-row gap-4 justify-between items-center text__color-gray rounded-xl w-max select-styled ">
        <span className="text__p uppercase font-bold text__color-gray">Height:</span>
        {item?.attributes?.map((val) => {
          if (val?.name.toLowerCase() === 'height') {
            return (
              <select
                key={val?.name.toLowerCase()}
                name={val?.name}
                className={'select-styled px-4 py-2.5 mr-8 rounded-2xl outline-none border-opacity-0'}
              >
                {val?.options.map((i) => (
                  <option key={i} value={i}>
                    {i.toUpperCase()}
                  </option>
                ))}
              </select>
            );
          }
        })}
      </div>
    </div>
  );
};
