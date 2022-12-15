import styled, { css } from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid var(--lightGrey);
  padding-top: 4.438rem;
  padding-bottom: 4.563rem;
  text-align: center;
`;

export const ActivitySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
`;

export const ActivityItem = styled.div`
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ActivityInner = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}`;

export const ActivityTitle = styled.h3`
  color: var(--yellow);
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  font-size: 1.5rem;
`;

export const ActivityImage = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  max-height: 80%;
  max-width: 300px;
  z-index: 1;
  opacity: 0.1;
`;

export const ActivitySubTitle = styled.span<{ small?: boolean }>`
  font-size: 3.2rem;
  font-weight: 600;
  ${(props) =>
    props.small &&
    css`
      font-size: 1.6rem;
      text-align: left;
    `}
  color: #454545;
  sub {
    vertical-align: baseline;
    font-size: 60%;
  }
`;

export const TopSection = styled.div<{ bottom?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: 0;
    `}
`;

export const ParText = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.6;
  margin: 0;
`;
