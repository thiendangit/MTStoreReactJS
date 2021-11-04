import React from 'react';
import { Checkbox } from '@material-ui/core';
import { BurstMode, Clear, Favorite, FavoriteBorder } from '@material-ui/icons';
import { Product } from 'WooCommerce';
import { images } from '@public/image';
import CONFIG from '@constants/config';
import { handleProductPrice } from '@utils/handleProductPrice';

export const OrderSummary = ({ data, remove }: { data: Product[]; remove: any }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <p className="text__color-gray mb-6">Price can change depending on shipping method and taxes of your state.</p>
      {data.map((item) => {
        const { regular_price, sale_price } = handleProductPrice(item);
        return (
          <div key={item.id} className="flex flex-row gap-2 justify-start mb-6">
            <div className="w-2/6">
              <img
                src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `${images.noImg}`}
                alt="Product in store"
                width={'70'}
              />
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
                Wish list
              </span>
              <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
                <BurstMode style={{ color: 'var(--orange)', width: '33px', height: '33px' }} />
                Compare
              </span>
              <button onClick={() => remove(item)} className="text-btn">
                <Clear fontSize={'medium'} /> Remove
              </button>
            </div>
            <div className="w-full">
              <h4>{item?.name}</h4>
              <div>
                {/*current price*/}
                <p className="text__color-green text-btn">
                  {sale_price?.toString()} {CONFIG.product.unit.long}
                </p>
                {/*regular price*/}
                {regular_price != 0 && (
                  <p className="text__color-gray text-btn line-through">
                    {regular_price?.toString()} {CONFIG.product.unit.long}
                  </p>
                )}
              </div>
              <div className="select__input-styled md:w-2/6 w-max">
                <input type="text" className="input-styled" placeholder="1" />
                <span className="line__box" />
                <select name="Pcs" className="select-styled">
                  <option value="Pcs">Pcs</option>
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
