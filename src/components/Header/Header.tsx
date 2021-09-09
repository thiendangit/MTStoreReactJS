import React, { memo } from 'react';
import './Hearder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { icons } from '@public/icon';
const HeaderComponent: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={icons.logo} alt={'logo'} />
      </div>
      <div className="header__search">
        <select
          name="All categories"
          id="categories"
          className="search__categories"
        >
          <option value="All categories">All categories</option>
          <optgroup label="Fruit">
            <option value="watermelon">Watermelon</option>
            <option value="orange">Orange</option>
          </optgroup>
          <optgroup label="Drinks">
            <option value="coca">Coca</option>
            <option value="sprite">Sprite</option>
          </optgroup>
        </select>
        <span className="search__line" />
        <input
          placeholder="Search Products, categories ..."
          type="text"
          className="search__input"
        />
        <button className="search__btn">
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
        </button>
      </div>
      <div className="header__icons">
        <img src={icons.user} alt={'user'} className="user__icon" />
        <img src={icons.cart} alt="Shopping basket" className="basket__icon" />
        <span className="quantity__cart">
          <p>400</p>
        </span>
      </div>
    </div>
  );
};
export const Header = memo(HeaderComponent);
