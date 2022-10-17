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
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'news news about about' 'race events training shop';
  padding: 20px 0 20px;
  width: 85%;
`;
