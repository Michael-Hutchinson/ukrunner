import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Cta = styled(Button)<{ margin?: boolean }>`
  border: 2px solid #e9e9e9;
  margin-top: 0.938rem;
  margin-bottom: 0.938rem;
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
  margin: ${(props) => props.margin && 'inherit'};
`;

export default Cta;
