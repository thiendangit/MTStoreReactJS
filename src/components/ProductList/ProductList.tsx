import React, { useEffect } from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { ProductHorizontalItems } from './ProductHorizontalItems/ProductHorizontalItems';
import { useSelector } from 'react-redux';
import { getCategories, getCategoriesState } from '@store/reducers/categoriesSlice';
import { Product } from 'WooCommerce';
import { fetchProducts } from '@logic';
import { SkeletonComponent } from '../SkelatonComponent/SkeletonComponent';

export const ProductList: React.FC = () => {
  const categoryItems = useSelector(getCategories);
  const categories = useSelector(getCategoriesState);
  const [bestSellingProducts, setBestSellingProducts] = React.useState<Product[]>([]);
  const [recommendProducts, setRecommendProducts] = React.useState<Product[]>([]);

  async function getProducts() {
    const reqSelling = fetchProducts({ category: (categoryItems[0]?.id).toString() });
    const reqRecommend = fetchProducts({ category: (categoryItems[2]?.id).toString() });
    const [resSelling, resRecommend] = await Promise.all([reqSelling, reqRecommend]);
    if (resSelling.data) setBestSellingProducts(resSelling.data);
    console.log(resSelling);
    if (resRecommend.data) setRecommendProducts(resRecommend.data);
  }
  // useEffect
  useEffect(() => {
    if (categoryItems.length > 0) {
      getProducts();
    }
  }, [categoryItems]);

  return (
    <>
      <div className="bestselling">
        <div className="bestselling__title">
          <h2>Best selling products</h2>
          <ButtonBase className="bestselling__btn">
            <Link to="/product">More products</Link>
            <ChevronRight fontSize={'large'} />
          </ButtonBase>
        </div>
        {!categories.isLoading ? (
          <ProductHorizontalItems data={bestSellingProducts} numItem={{ numItem: 7 }} />
        ) : (
          <SkeletonComponent />
        )}
      </div>
      <div className="recommence">
        <div className="recommence__title">
          <h2>Recommence for you</h2>
          <ButtonBase className="recommence__btn">
            More products
            <ChevronRight fontSize={'large'} />
          </ButtonBase>
        </div>
        {!categories.isLoading ? (
          <ProductHorizontalItems data={recommendProducts} numItem={{ numItem: 7 }} />
        ) : (
          <SkeletonComponent />
        )}
      </div>
    </>
  );
};
