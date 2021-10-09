import React, { useEffect, useState } from 'react';
import './Footer.css';
import { footerLinks } from '../Data_Info/DataInfo';
import { fetchProductTag } from '@logic';

export const Footer: React.FC = () => {
  const [productTags, setProductTags] = useState([]);

  const getProductTags = async () => {
    try {
      console.log('Mounting');
      const result = await fetchProductTag();
      setProductTags(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductTags();
    console.log('Mounted');
  }, []);
  return (
    <footer className="footer">
      <div className="footer__item1">
        {footerLinks.map((item, index) => (
          <ul key={index}>
            <li>{item.title}</li>
            {item.links.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer__item2">
        <h3>Product tags</h3>
        <div className="footer__item2-tags">
          {productTags.map((item) => (
            <span key={item.id}>
              <a href="#tags" title="tags">
                {item.name}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="footer__item3">
        <span>Copyright © 2020 petrbilek.com</span>
      </div>
    </footer>
  );
};
