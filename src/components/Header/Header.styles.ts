import styled, { css } from 'styled-components';

export const Text = styled.a`
  color: #fff;
  font-size: 11px;
  line-height: 30px;
  display: block;
  display: inline;
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

// .top_bar a:hover {
//   color: #ffaa00;
// }

// .top_bar p:after {
//   content: "|";
//   padding-left: 10px;
//   padding-right: 10px;
//   color: #666;
// }
