import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 10%;

  background: #DC2424; 
  background: -webkit-linear-gradient(to left,  #bc4040, #5c6dd6); 
  background: linear-gradient(to left,  #bc4040, #5c6dd6); 

  #logo {
    width: auto;
    height: 3rem;
  }  
`;

export const CardContainer = styled.div`  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    color: var(--white);
    font: 700 2.25rem "Permanent Marker", sans-serif;

    img {
      height: 1.75rem;
      width: auto;
    }
  }
`;

export const MoreButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  cursor: pointer;

  color: var(--white);
  background-color: var(--gray-900);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  height: 3.5rem;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  
  > span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  > svg {
    transition: all 0.3s ease-in-out;
    font-size: 1.75rem;
    transform: rotate(0deg);
  }

  &:hover {
    background-color: var(--red-500);

    > svg {
      transform: rotate(180deg);
    }
  }
`;
