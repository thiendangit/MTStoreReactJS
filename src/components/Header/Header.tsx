import React, { memo, useEffect } from 'react';
import './Hearder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { icons } from '@public/icon';
import { fetchCategories } from '../../logic/categories';
import { getCategories, onSetCategories } from '@store/reducers/categoriesSlice';
import { useDispatch } from '@store/configureStore';
import { useSelector } from 'react-redux';

const HeaderComponent: React.FC = () => {
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();
  const _fetchCategories = async () => {
    try {
      const result = await fetchCategories();
      if (result.data) dispatch(onSetCategories(result.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _fetchCategories();
  }, []);

  // @ts-ignore
  return (
    <div className="header">
      <div className="header__logo">
        <img src={icons.logo} alt={'logo'} />
      </div>
      <div className="header__search">
        <select name="All categories" id="categories" className="search__categories">
          <option value="All categories">All categories</option>
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
        <img src={icons.cart} alt="Shopping basket" className="basket__icon" />
        <span className="quantity__cart">
          <p>400</p>
        </span>
      </div>
    </div>
  );
};
export const Header = memo(HeaderComponent);
