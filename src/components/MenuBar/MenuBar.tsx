import React, { memo } from 'react';
import './MenuBar.css';
import { ButtonBase, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getCategoriesState } from '@store/reducers/categoriesSlice';
import { Category } from 'WooCommerce';
import { Skeleton } from '@material-ui/lab';
import { itemMenu } from '../Data_Info/DataInfo';

const MenuBarComponent: React.FC = () => {
  const [idx, setIndex] = React.useState(null);
  const categories = useSelector(getCategoriesState);

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
        {categories.categoryItems.map((item) => (
          <MenuItem key={item.id} {...{ item }} />
        ))}
      </>
    );
  };

  return (
    <div className="menubar">
      {!categories.isLoading ? (
        <MenuList />
      ) : (
        itemMenu.map((item, index) => <Skeleton className="menubar__btn skeleton" key={index} />).slice(0, 6)
      )}
    </div>
  );
};
export const MenuBar = memo(MenuBarComponent);
