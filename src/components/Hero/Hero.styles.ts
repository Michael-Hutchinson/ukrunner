import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  &#news {
    grid-area: news;
  }
  &#about {
    grid-area: about;
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

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'news news about about' 'race events training shop';
`;
