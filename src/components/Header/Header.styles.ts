import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Text = styled.a`
  color: #fff;
  font-size: 11px;
  line-height: 30px;
  text-decoration: none;
  &:hover {
    color: #ffaa00;
  }
  &:after {
    content: '|';
    padding-left: 10px;
    padding-right: 10px;
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
      border-bottom: 1px solid #000;
      text-align: center;
      vertical-align: middle;
      height: 30px;
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  ${StyledIconBase} {
    cursor: pointer;
  }
`;