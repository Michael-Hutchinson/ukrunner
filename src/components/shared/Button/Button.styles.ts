import styled from 'styled-components';

const Cta = styled.button`
  border: 2px solid #e9e9e9;
  color: #888;
  letter-spacing: 0.188rem;
  padding: 0.625rem 1.25rem;
  text-transform: uppercase;
  border-radius: 0.313rem;
  background-color: var(--white);
  cursor: pointer;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--yellow);
    color: var(--white);
    background-color: var(--yellow);
  }
`;

export default Cta;
