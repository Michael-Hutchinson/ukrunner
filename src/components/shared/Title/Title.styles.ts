import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  text-align: center;
  :after {
    content: '';
    position: absolute;
    bottom: -0.938rem;
    left: 50%;
    width: 3.125rem;
    height: 0.188rem;
    margin-left: -1.563rem;
    background-color: var(--yellow);
  }
`;

export const SubHeading = styled.small`
  font-style: italic;
  color: #858899;
  font-size: 0.938rem;
`;
