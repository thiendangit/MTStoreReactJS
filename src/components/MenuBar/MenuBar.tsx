import React, { memo } from 'react';
import './MenuBar.css';
import { itemMenu } from '../Data_Info/DataInfo';
import { ButtonBase } from '@material-ui/core';
const MenuBarComponent: React.FC = () => {
  const [idx, setIndex] = React.useState(null);

  const handleClick = (index: number) => {
    setIndex(index);
    console.log(index);
  };
  // const [view, setView] = React.useState('bakery');
  //
  // const handleChange = (
  //   event: React.MouseEvent<HTMLElement>,
  //   nextView: string,
  // ) => {
  //   setView(nextView);
  // };
  return (
    <div className="menubar">
      {itemMenu.map((item, index) => (
        <>
          <ButtonBase
            key={index}
            onClick={() => handleClick(index)}
            className={index === idx ? 'menubar__btn active' : 'menubar__btn'}
          >
            <a href={item.path}>{item.title}</a>
          </ButtonBase>
          {/*<h3>{item.title}</h3>*/}
          {/*<section id={item.path}>Category</section>*/}
        </>
      ))}
    </div>
  );
};
export const MenuBar = memo(MenuBarComponent);
