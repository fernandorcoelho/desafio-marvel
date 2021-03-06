import styled from 'styled-components';

interface ThumbnailProps {
  src: string;
}

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  background-color: var(--gray-50);
  transform: translatey(0px);
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  z-index: 1;
	
  &:hover {
    box-shadow: 1px 1px 40px var(--yellow-500);
    transform: scale(1.02);
    filter: brightness(1.2) saturate(110%);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

export const Thumbnail = styled.div<ThumbnailProps>`
  height: 450px;
  width: 100%;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  display: block;
  position: absolute;
  bottom: 2rem;
  left: 0;
  z-index: 2;

  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.75rem);
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Title = styled.h1`
  position: relative;
  color: var(--gray-50);
  z-index: 2;
`;

export const Description = styled.h1`
  position: relative;
  color: var(--gray-50);
  z-index: 2;

  opacity: 0;
  height: 0;

  font: 400 1rem "Marvel", sans-serif;

  &.active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    height: 100%;
  }
`;
