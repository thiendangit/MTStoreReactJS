import React, { memo, useEffect } from 'react';
import './Hearder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { icons } from '@public/icon';
import { getCategoriesState } from '@store/reducers/categoriesSlice';
import { useSelector } from 'react-redux';
import { Category } from 'WooCommerce';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const HeaderComponent: React.FC = () => {
  const categoriesProp = useSelector(getCategoriesState);
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const copy: Partial<Category>[] = categoriesProp.categoryItems.slice();
    copy.unshift({ id: -1, name: 'All Categories', slug: 'All Categories' });
    setCategories(copy);
  }, [categoriesProp.categoryItems]);

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={icons.logo} alt={'logo'} />
        </Link>
      </div>
      <div className="header__search">
        <select name="All categories" id="categories" className="search__categories">
          {categories.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="search__line" />
        <input placeholder="Search Products, categories ..." type="text" className="search__input" />
        <button className="search__btn">
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
        </button>
      </div>
      <div className="header__icons">
        <img src={icons.user} alt={'user'} className="user__icon" />
        <Badge
          badgeContent={10}
          max={99}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          className="header__icons-badge"
        >
          <img src={icons.cart} alt="Shopping basket" className="basket__icon" />
        </Badge>
      </div>
    </div>
  );
};
export const Header = memo(HeaderComponent);
