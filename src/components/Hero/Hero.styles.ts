import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  &#news {
    grid-area: news;
    display: flex;
  }
  &#about {
    grid-area: about;
    display: flex;
  }
  &#race {
    grid-area: race;
  }
  &#events {
    grid-area: events;
  }
  &#training {
    grid-area: training;
  }
  &#shop {
    grid-area: shop;
  }
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-areas: 'news news about about' 'race events training shop';
  padding: 20px 0 20px;
  width: 85%;
`;

export const Caption = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 170, 0, 0.5);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 1;
  }
`;

export const Heading = styled.h3`
  color: var(--white);
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const SubHeading = styled.p`
  color: var(--white);
  margin: 0;
  font-size: 1.125rem;
  text-align: center;
`;
