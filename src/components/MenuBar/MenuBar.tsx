import React, { memo } from 'react';
import './MenuBar.css';
import { itemMenu } from '../Data_Info/DataInfo';
import { ButtonBase } from '@material-ui/core';
import * as Menu from 'Menu';

const MenuBarComponent: React.FC = () => {
  const [idx, setIndex] = React.useState(null);

  const handleClick = (index: number) => {
    setIndex(index);
    console.log(index);
  };

  const MenuItem = ({
    item,
    index,
  }: {
    item: Menu.ItemMenu;
    index: number;
  }) => {
    return (
      <div key={index}>
        <ButtonBase
          key={index}
          onClick={() => handleClick(index)}
          className={index === idx ? 'menubar__btn active' : 'menubar__btn'}
        >
          <a href={item.path}>{item.title}</a>
        </ButtonBase>
      </div>
    );
  };

  const MenuList = () => {
    return (
      <>
        {itemMenu.map((item, index) => (
          <MenuItem key={index} {...{ item, index }} />
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
