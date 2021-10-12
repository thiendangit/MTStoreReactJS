import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Title {
  title: string;
  textBtn: string;
  path: string;
}
export const TitleComponent = ({ title, textBtn, path }: Title) => {
  const StyleButton = styled(ButtonBase)`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.3rem;
    padding: 0.65rem 1.2rem !important;
    color: var(--black) !important;
    background: var(--white-shadow) !important;
    border-radius: 1.2rem !important;
    width: max-content;
    outline: none !important;
  `;
  const LinkButton = styled(Link)`
    color: var(--black);
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.3rem;
    &:hover {
      cursor: pointer;
      color: var(--green);
    }
  `;
  const IconButton = styled(ChevronRight)`
    font-size: large;
    cursor: pointer;
    color: var(--green);
  `;
  return (
    <div className="flex flex-row justify-between items-baseline">
      <h2>{title}</h2>
      <StyleButton>
        <LinkButton to={`/${path}`}>{textBtn}</LinkButton>
        <IconButton />
      </StyleButton>
    </div>
  );
};
