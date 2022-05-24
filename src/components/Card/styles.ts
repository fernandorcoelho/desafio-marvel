import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5rem);
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;

  font: 500 1.25rem "Roboto", sans-serif;
`;
