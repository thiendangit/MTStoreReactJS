import { Product } from 'WooCommerce';
import React from 'react';

export const InforDetail = ({ item }: { item: Product }) => {
  return (
    <table className="grid lg:grid-cols-2 grid-cols-1 gap-8 table-auto justify-start items-start mb-8">
      <tbody className="table-auto gap-4 items-baseline w-max mr-auto">
        <tr>
          <td className="text__p text__color-gray p-2.5">SKU:</td>
          <td className="text__p p-2.5 items-end">{item?.sku ? item?.sku : '___'}</td>
        </tr>
        <tr>
          <td className="text__p text__color-gray p-2.5">Category:</td>
          {item?.categories?.map((val) => {
            return (
              <td className="text__p p-2.5 items-end" key={val?.id}>
                {val?.name ? val?.name.toString() : '___'}
              </td>
            );
          })}
        </tr>
        <tr>
          <td className="text__p text__color-gray p-2.5">Stock:</td>
          <td className="text__p p-2.5 items-end">{item?.in_stock ? item?.in_stock : '___'}</td>
        </tr>
      </tbody>
      <tbody className="table-auto gap-4 items-baseline w-max">
        <tr>
          <td className="text__p p-2.5 text__color-gray">Buy by:</td>
          <td className="text__p p-2.5 items-end">Name customer</td>
        </tr>
        <tr>
          <td className="text__p p-2.5 text__color-gray">Delivery:</td>
          <td className="text__p p-2.5 items-end">{item?.shipping_class ? item?.shipping_class : '___'}</td>
        </tr>
        <tr>
          <td className="text__p p-2.5 text__color-gray">Delivery area:</td>
          <td className="text__p p-2.5 items-end">Ho Chi Minh City</td>
        </tr>
      </tbody>
    </table>
  );
};
