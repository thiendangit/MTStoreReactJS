import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import styled from 'styled-components';

interface Title {
  title: string;
  textBtn: string;
}
export const TitleComponent = ({ title, textBtn }: Title) => {
  const StyleButton = styled(ButtonBase)`
    border: 1px solid var(--bolder-green) !important;
    background: var(--green) !important;
    border-radius: 1.2rem !important;
    margin-left: auto !important;
    width: max-content;
    max-height: 3.6rem;
  `;
  const TextButton = styled.p`
    color: var(--white);
    padding: 0.65rem 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.3rem;
  `;
  return (
    <div className="">
      <h2>{title}</h2>
      <StyleButton>
        <TextButton>{textBtn}</TextButton>
        <ChevronRight fontSize={'medium'} />
      </StyleButton>
    </div>
  );
};
