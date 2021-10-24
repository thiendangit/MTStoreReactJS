import { Product } from 'WooCommerce';
import React from 'react';
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

export const TabDetailContent = ({ item }: { item: Product }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <TabList onChange={handleChange} variant="scrollable" scrollButtons={'auto'}>
          <Tab label="Description" value="1" className="tab__btn" />
          <Tab label="Reviews" value="2" className="tab__btn" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
      </TabPanel>
      <TabPanel value="2">
        <p className="text__p mb-8">{item?.status}</p>
      </TabPanel>
    </TabContext>
  );
};
