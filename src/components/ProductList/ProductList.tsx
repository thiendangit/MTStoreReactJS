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
  const [loadingProduct, setLoadingProduct] = React.useState<boolean>(false);

  async function getProducts() {
    const reqSelling = fetchProducts({ category: (categoryItems[4]?.id).toString() });
    const reqRecommend = fetchProducts({ category: (categoryItems[5]?.id).toString() });
    const [resSelling, resRecommend] = await Promise.all([reqSelling, reqRecommend]).finally(() => {
      setTimeout(() => {
        setLoadingProduct(false);
      }, 200);
    });
    if (resSelling.data) setBestSellingProducts(resSelling.data);
    // console.log(resSelling);
    if (resRecommend.data) setRecommendProducts(resRecommend.data);
  }

  // useEffect
  useEffect(() => {
    setLoadingProduct(true);
    if (categoryItems.length > 0) {
      getProducts();
    }
  }, [categoryItems]);

  return (
    <>
      <div className="bestselling">
        <TitleComponent title={'Best selling products'} textBtn={'More products'} path={'product'} />
        <ProductHorizontalItems loading={loadingProduct} data={bestSellingProducts} numItem={7} />
      </div>
      <div className="recommence">
        <TitleComponent title={'Recommence for you'} textBtn={'More products'} path={'recommence'} />
        <ProductHorizontalItems loading={loadingProduct} data={recommendProducts} numItem={7} />
      </div>
    </>
  );
};
