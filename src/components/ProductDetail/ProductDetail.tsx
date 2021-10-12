import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { AddOutlined, BurstMode, FavoriteBorder, Star, StarHalf } from '@material-ui/icons';
import { Product } from 'WooCommerce';
import { LocationState } from 'history';
import { Box, ButtonBase, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { TitleComponent } from '@components';
import { ProductHorizontalItems } from '../ProductList/ProductHorizontalItems/ProductHorizontalItems';
import { useSelector } from 'react-redux';
import { getCategories, getCategoriesState } from '@store/reducers/categoriesSlice';
import { fetchProducts } from '@logic';
import { SkeletonComponent } from '../SkelatonComponent/SkeletonComponent';

export const ProductDetail = () => {
  const location = useLocation<any>();
  const [item, setItem] = useState<Product>(location?.state?.item);
  console.log(location?.state?.item);
  const categoryItems = useSelector(getCategories);
  const categories = useSelector(getCategoriesState);
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);
  const [value, setValue] = React.useState('1');

  async function getProducts() {
    const reqRelated = fetchProducts({ category: (categoryItems[3]?.id).toString() });
    const [resRelated] = await Promise.all([reqRelated]);
    if (resRelated.data) setRelatedProducts(resRelated.data);
    console.log(resRelated);
  }
  // useEffect
  useEffect(() => {
    if (categoryItems.length > 0) {
      getProducts();
    }
  }, [categoryItems]);
  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col mx-20 my-16">
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <div className="flex flex-row justify-start items-center relative">
            <p className="product__detail-percent-btn ml-5">{item?.sale_price}</p>
            <p className="product__detail-percent-btn ml-28">Free shipping</p>
          </div>
          <img src={item?.images?.[0]?.src} alt={item?.name} className="rounded-3xl size__img" />
        </div>
        <div>
          <h2>{item?.name}</h2>
          <div className="flex flex-row justify-start items-center my-8">
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <StarHalf fontSize={'small'} style={{ color: '#FDBC15' }} />
            <p className="underline text__color-gray">(1 customer review)</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-start items-start mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text__p text__color-gray">SKU:</p>
                <p className="text__p text__color-gray">Category:</p>
                <p className="text__p text__color-gray">Stock:</p>
                <p className="text__p text__color-gray">Farm</p>
              </div>
              <div>
                <p className="text__p ">{item?.sku}</p>
                <p className="text__p "> </p>
                <p className="text__p ">{item?.stock_quantity}</p>
                <p className="text__p "> </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text__p text__color-gray">Freshness:</p>
                <p className="text__p text__color-gray">Buy by:</p>
                <p className="text__p text__color-gray">Delivery:</p>
                <p className="text__p text__color-gray">Delivery area</p>
              </div>
              <div>
                <p className="text__p "> </p>
                <p className="text__p "> </p>
                <p className="text__p ">{item?.shipping_class}</p>
                <p className="text__p "> </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-between items-center text__color-gray rounded-3xl mb-8 ">
            <div>
              <p className="text__price-product">{item?.price} USD</p>
              <p className="text__price-sale line-through">{item?.sale_price}4800 USD </p>
            </div>
            <div className="flex flex-row gap-3 justify-start items-stretch">
              <div className="select__input-styled">
                <input type="text" className="input-styled" placeholder="1" />
                <span className="line__box" />
                <select name="Pcs" className="select-styled">
                  <option value="Pcs">Pcs</option>
                  <option value="Kgs">Kgs</option>
                  <option value="Box">Box</option>
                  <option value="Pack">Pack</option>
                </select>
              </div>
              <ButtonBase className="add__product-btn ml-8">
                <AddOutlined fontSize={'large'} style={{ color: 'var(--white)', fontWeight: 'bolder' }} />
                <p className="text__add-btn">Add to cart</p>
              </ButtonBase>
            </div>
          </div>
          <div className="flex flex-row gap-12 justify-between flex-wrap items-center mb-8">
            <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
              <FavoriteBorder fontSize={'medium'} style={{ color: 'var(--orange)' }} />
              Add to my wish list
            </span>
            <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
              <BurstMode fontSize={'medium'} style={{ color: 'var(--orange)' }} />
              Compare
            </span>
          </div>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} variant="scrollable" scrollButtons={'on'}>
                <Tab label="Description" value="1" className="tab__btn">
                  Description
                </Tab>
                <Tab label="Reviews" value="2" className="tab__btn">
                  Reviews
                </Tab>
                <Tab label="Questions" value="3" className="tab__btn">
                  Questions
                </Tab>
              </TabList>
            </Box>
            <TabPanel value="1">
              <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
            </TabPanel>
            <TabPanel value="2">{item.rating_count}</TabPanel>
            <TabPanel value="3">{item.status}</TabPanel>
          </TabContext>
        </div>
      </div>
      <div>
        <TitleComponent title={'Related products'} textBtn={'More products'} path={'related'} />
        {!categories.isLoading ? (
          <ProductHorizontalItems data={relatedProducts} numItem={{ numItem: 7 }} />
        ) : (
          <SkeletonComponent />
        )}
      </div>
    </div>
  );
};
