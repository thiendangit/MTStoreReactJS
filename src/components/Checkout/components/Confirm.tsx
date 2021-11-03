import React from 'react';
import { Button, Checkbox, TextField } from '@material-ui/core';
import { icons } from '@public/icon';

export const Confirm = () => {
  return (
    <div>
      <div>
        <h3>Additional information</h3>
        <p>Need something else? We will make it for you!</p>
        <p>Order notes</p>
        <TextField label={'Need a specific delivery day? Sending a gift? Let’s say ...'} variant={'outlined'} />
      </div>
      <div>
        <h3>Confirmation</h3>
        <p>We are getting to the end. Just few clicks and your order si ready!</p>
        <div>
          <Checkbox />
          <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
        </div>
        <div>
          <Checkbox />
          <p>
            I agree with our <span className="underline">terms and conditions</span> and{' '}
            <span className="underline">privacy policy</span>.
          </p>
        </div>
        <Button type={'submit'} value={'Complete order'} className="add__product-btn" />
        <br />
        <img src={icons.confirm} alt={''} />
        <p>All your data are safe</p>
        <p>We are using the most advanced security to provide you the best experience ever.</p>
      </div>
    </div>
  );
};
