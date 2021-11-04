import React from 'react';
import { Button, Checkbox, Input } from '@material-ui/core';
import { icons } from '@public/icon';

export const Confirm = () => {
  return (
    <div>
      <div>
        <h3>Additional information</h3>
        <p className="text__color-gray">Need something else? We will make it for you!</p>
        <p className="text__p font-bold">Order notes</p>
        <Input placeholder={'Need a specific delivery day? Sending a gift? Let’s say ...'} />
      </div>
      <div>
        <h3>Confirmation</h3>
        <p className="text__color-gray">We are getting to the end. Just few clicks and your order si ready!</p>
        <div>
          <Checkbox />
          <p className="text__p">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
        </div>
        <div>
          <Checkbox />
          <p className="text__p">
            I agree with our <span className="underline">terms and conditions</span> and{' '}
            <span className="underline">privacy policy</span>.
          </p>
        </div>
        <Button type={'submit'} value={'Complete order'} className="add__product-btn text__add-btn">
          Complete order
        </Button>
        <br />
        <img src={icons.confirm} alt={''} className="w-10" />
        <p className="text__p">All your data are safe</p>
        <p className="text__p text__color-gray">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    </div>
  );
};
