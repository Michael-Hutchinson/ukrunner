import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--grey);
  border: 1px solid var(--lightGrey);
  min-height: 3.125rem;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  border-left: none;
  border-right: none;
  @media (max-width: 48rem) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  @media (max-width: 48rem) {
    background-color: var(--grey);
    border-bottom: 1px solid var(--lightGrey);
    flex-direction: column;
    text-align: center;
  }
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  @media (max-width: 48rem) {
    :not(:checked) ~ ${MobileLinks} {
      display: none;
    }
  }
`;

export const Label = styled.label`
  @media (max-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    min-height: 3.125rem;
    align-items: center;
  }
  svg {
    display: none;
      @media (max-width: 48rem) {
        cursor: pointer;
        display: flex;
        margin-right: 0.938rem;
      }
    }
  }
`;

export const Links = styled(Link)`
  color: #000;
  font-size: 0.875rem;
  padding: 0.625rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  :after {
    bottom: 0;
    content: '';
    display: block;
    height: 0.125rem;
    left: 50%;
    position: relative;
    background: var(--yellow);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover {
    color: var(--yellow);
    :after {
      width: 100%;
      left: 0;
      top: 0.313rem;
    }
  }
`;
