import React, { memo } from 'react';
import './Category.css';
import { ButtonBase } from '@material-ui/core';
import { categoryCard } from '../Data_Info/DataInfo';
import { ChevronRight } from '@material-ui/icons';
import { images } from '@public/image';

const CategoryComponent: React.FC = () => {
  return (
    <div className="category">
      <h3 className="heading3">Category menu</h3>
      <div className="category__card">
        {categoryCard.map((item, index) => (
          <div
            key={index}
            className="category__card-item"
            style={{ backgroundImage: `url(${images.bgItem})` }}
          >
            <h6 className="heading6">{item.sub}</h6>
            <h2 className="heading2">{item.title}</h2>
            <ButtonBase className="category__card-btn">
              <p className="text-btn">{item.textBtn}</p>
              <ChevronRight fontSize={'medium'} className="chevron-icon" />
            </ButtonBase>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Category = memo(CategoryComponent);
