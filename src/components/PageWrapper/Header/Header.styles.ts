import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Text = styled(Link)<{ icon?: boolean }>`
  color: var(--white);
  font-size: 0.625rem;
  line-height: 1.875rem;
  text-decoration: none;
  &:hover {
    color: var(--yellow);
  }
  &:after {
    content: '|';
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    color: #666;
  }
  &:last-child:after {
    content: '';
  }

  ${(props) =>
    props.icon &&
    css`
      vertical-align: middle;
      display: flex;
      align-items: center;
    `}
`;

export const Section = styled.section<{ top?: boolean }>`
  display: flex;
  justify-content: space-evenly;

  ${(props) =>
    props.top &&
    css`
      justify-content: space-evenly;
      background: #111;
      border-bottom: 0.063rem solid var(--black);
      text-align: center;
      vertical-align: middle;
      height: 1.875rem;
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkText = styled.a<{ icon?: boolean }>`
  color: var(--white);
  font-size: 0.625rem;
  line-height: 1.875rem;
  text-decoration: none;
  &:hover {
    color: var(--yellow);
  }
  &:after {
    content: '|';
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    color: #666;
  }
  &:last-child:after {
    content: '';
  }

  ${(props) =>
    props.icon &&
    css`
      vertical-align: middle;
      display: flex;
      align-items: center;
    `}
`;
