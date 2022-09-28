import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #f8f8f8;
  border: 0.063rem solid #e7e7e7;
  min-height: 3.125rem;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 99;
  @media (max-width: 48rem) {
    justify-content: flex-end;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  @media (max-width: 48rem) {
    background-color: #f8f8f8;
    border-bottom: 0.063rem solid #e7e7e7;
    flex-direction: column;
    overflow-y: auto;
    position: absolute;
    text-align: center;
    top: 100%;
    width: 100%;
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
  svg {
    display: none;
      @media (max-width: 48rem) {
        cursor: pointer;
        display: block;
        margin-right: 0.938rem;
      }
    }
  }
`;

export const Links = styled.a`
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
    height: 2px;
    left: 50%;
    position: relative;
    background: #ffaa00;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover {
    color: #ffaa00;
    :after {
      width: 100%;
      left: 0;
      top: 5px;
    }
  }
`;
