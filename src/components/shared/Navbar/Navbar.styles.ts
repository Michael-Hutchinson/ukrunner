import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  min-height: 50px;
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
  a {
    padding: 0.625rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    :hover {
      // color: var(--gold);
    }
    &:last-of-type {
      :before {
        content '';
        margin-right: 0;
      }
    }
  }
  @media (max-width: 48rem) {
    // background-color: var(--navy);
    flex-direction: column;
    overflow-y: auto;
    position: absolute;
    text-align: center;
    top: 100%;
    width: 100%;
    a {
      display: block;
      padding: 0.625rem;
    }
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
        // color: var(--slate);
      }
    }
  }
`;

export const Links = styled.a`
  // color: var(--slate);
  font-size: 0.875rem;
  &:hover {
    // color: var(--slate);
  }
`;
