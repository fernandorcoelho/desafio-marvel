import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  z-index: 2;

  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5rem);
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;

  font: 500 1.25rem "Roboto", sans-serif;
`;
