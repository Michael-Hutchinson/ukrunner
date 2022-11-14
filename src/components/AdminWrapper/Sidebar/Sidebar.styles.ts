import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Side = styled(Paper)`
  background-color: #fcf8e3;
  width: 320px;
  max-width: 100%;
  @media (max-width: 48rem) {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-evenly;
      li,
      a {
        div {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

export default Side;
