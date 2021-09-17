import React from 'react';
import { productList } from '../../Data_Info/DataInfo';
import { ButtonBase } from '@material-ui/core';

export const ProductItem: React.FC = () => {
  return (
    <div className="product__list">
      {productList.map((item) => (
        <div key={item.id} className="product__list-items">
          {item.images.length === 0
            ? null
            : item.images
                .map((e) => (
                  <div key={e.id} className="product__list-item">
                    <span className="product__list-item-sale">
                      {item.sale_price}
                    </span>
                    <img
                      src={e.src}
                      alt="Product in store"
                      className="product__list-item-img"
                    />
                    <h4 className="product__list-item-title">{item.name}</h4>
                    {item.short_description}
                    <div className="product__list-item-price">
                      <span className="price__regular">
                        {item.regular_price}
                        <br />
                        <span className="price">{item.price}</span>
                      </span>
                      <ButtonBase className="product__item-btn">
                        <p className="product__item-text-btn">Buy now</p>
                      </ButtonBase>
                    </div>
                  </div>
                ))
                .slice(0, 7)}
        </div>
      ))}
    </div>
  );
};
