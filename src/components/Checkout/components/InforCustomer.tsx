import React from 'react';

export const InforCustomer = () => {
  return (
    <div>
      <h3>Billing infor</h3>
      <p>Please enter your billing info</p>
      <div>
        <label>
          First name:
          <input type="text" placeholder="First name" />
        </label>
        <label>
          Last name:
          <input type="text" placeholder="Last name" />
        </label>
        <label>
          Email address:
          <input type="text" placeholder="Email address" />
        </label>
        <label>
          Phone number:
          <input type="text" placeholder="Phone number" />
        </label>
        <label>
          Address:
          <input type="text" placeholder="Address" />
        </label>
        <label>
          Town / City:
          <input type="text" placeholder="Town / City" />
        </label>
        <label>
          State / Country:
          <input type="text" placeholder="State / Country" />
        </label>
        <label>
          ZIP/Postal code:
          <input type="text" placeholder="ZIP/Postal code" />
        </label>
      </div>
    </div>
  );
};
