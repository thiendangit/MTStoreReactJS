import React, { memo } from 'react';
import './MenuBar.css';
import { ButtonBase } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getCategories } from '@store/reducers/categoriesSlice';
import { Category } from 'WooCommerce';

const MenuBarComponent: React.FC = () => {
  const [idx, setIndex] = React.useState(null);

  const categories = useSelector(getCategories);

  const handleClick = (index: number) => {
    setIndex(index);
    console.log(index);
  };

  const MenuItem = ({ item }: { item: Category }) => {
    return (
      <div key={item.id}>
        <ButtonBase
          onClick={() => handleClick(item.id)}
          className={item.id === idx ? 'menubar__btn active' : 'menubar__btn'}
        >
          <a href={item.slug}>{item.name}</a>
        </ButtonBase>
      </div>
    );
  };

  const MenuList = () => {
    return (
      <>
        {categories.map((item) => (
          <MenuItem key={item.id} {...{ item }} />
        ))}
      </>
    );
  };

  return (
    <div className="menubar">
      <MenuList />
    </div>
  );
};
export const MenuBar = memo(MenuBarComponent);
