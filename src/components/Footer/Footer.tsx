import React from 'react';
import './Footer.css';
import { productTags, footerLinks } from '../Data_Info/DataInfo';

export const Footer: React.FC = () => {
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
          {productTags.map((item, index: number) => (
            <span key={index}>
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
