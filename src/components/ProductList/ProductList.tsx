import React, { useEffect } from 'react';
import './ProductList.css';
import { ProductHorizontalItems } from './ProductHorizontalItems/ProductHorizontalItems';
import { useSelector } from 'react-redux';
import { getCategories } from '@store/reducers/categoriesSlice';
import { Product } from 'WooCommerce';
import { fetchProducts } from '@logic';
import { TitleComponent } from '../TitleComponent/TitleComponent';

export const ProductList: React.FC = () => {
  const categoryItems = useSelector(getCategories);
  const [bestSellingProducts, setBestSellingProducts] = React.useState<Product[]>([]);
  const [recommendProducts, setRecommendProducts] = React.useState<Product[]>([]);

  async function getProducts() {
    const reqSelling = fetchProducts({ category: (categoryItems[0]?.id).toString() });
    const reqRecommend = fetchProducts({ category: (categoryItems[3]?.id).toString() });
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
        <TitleComponent title={'Best selling products'} textBtn={'More products'} path={'product'} />
        <ProductHorizontalItems loading={false} data={bestSellingProducts} numItem={{ numItem: 7 }} />
      </div>
      <div className="recommence">
        <TitleComponent title={'Recommence for you'} textBtn={'More products'} path={'recommence'} />
        <ProductHorizontalItems loading={false} data={recommendProducts} numItem={{ numItem: 7 }} />
      </div>
    </>
  );
};
