import React, { memo } from 'react';
import './MenuBar.css';
import { itemMenu } from '../Data_Info/DataInfo';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const MenuBarComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menubar">
      {itemMenu.map((item, index) => (
        <Button
          key={index}
          aria-controls="menubar"
          aria-haspopup="true"
          onClick={handleClick}
          className="menubar__btn"
        >
          {item.title}
          <KeyboardArrowDownIcon fontSize="small" className="icon__btn" />
        </Button>
      ))}

      <Menu
        id="menubar"
        className="menubar__menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="menubar__menu-item">
          Water
        </MenuItem>
        <MenuItem onClick={handleClose} className="menubar__menu-item">
          Coca
        </MenuItem>
        <MenuItem onClick={handleClose} className="menubar__menu-item">
          Bakery
        </MenuItem>
      </Menu>
    </div>
  );
};
export const MenuBar = memo(MenuBarComponent);
