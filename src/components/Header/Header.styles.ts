import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Text = styled.a`
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
  ${StyledIconBase} {
    cursor: pointer;
  }
`;
