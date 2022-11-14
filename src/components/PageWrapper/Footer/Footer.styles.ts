import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageFooter = styled.footer`
  margin-top: 20px;
  background-color: #111;
  text-align: center;
  border-top: 8px solid var(--yellow);
  padding: 3.75rem 2.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 48rem) {
    grid-template-columns: auto;
  }
`;

export const Icon = styled(Link)`
  vertical-align: middle;
`;

export const Bottom = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 48rem) {
    grid-column-end: auto;
    flex-direction: column;
    p:first-child {
      margin-bottom: 0;
    }
  }
  p {
    color: var(--white);
  }
}
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.875rem;
`;
