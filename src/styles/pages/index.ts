import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 3rem 3.5%;

  background-image: radial-gradient(ellipse farthest-corner, transparent 0%, transparent 35%, #fff 30%, #fff 40%, transparent 90%), radial-gradient(ellipse farthest-corner at 0px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), radial-gradient(ellipse farthest-corner at 8px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), radial-gradient(ellipse farthest-corner at 0px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 40%), radial-gradient(ellipse farthest-corner at 8px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%),  linear-gradient(40deg, #bd2d1040 0, #f4502f40 30%, #ff6e5140 50%, #f4502f40 70%, #bd2d1040 100%);
  background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;

`;

export const CardContainer = styled.div`  
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 3.5%;
  background-color: var(--orange-50);

  img {
    width: auto;
    height: 3rem;
  }  
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 1rem;

    > img {
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
