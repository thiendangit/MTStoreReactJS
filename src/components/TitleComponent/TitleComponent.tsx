import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

interface Title {
  title: string;
  textBtn: string;
}
export const TitleComponent: React.FC = ({ title, textBtn }: Title) => {
  return (
    <div className="">
      <h2>{title}</h2>
      <ButtonBase className="btn__title">
        {textBtn}
        <ChevronRight fontSize={'medium'} />
      </ButtonBase>
    </div>
  );
};
