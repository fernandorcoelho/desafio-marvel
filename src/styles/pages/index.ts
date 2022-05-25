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

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  h1 {
    font-size: 2.25rem;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    font-size: 1.5rem;
    border: none;
    padding: 0.625rem 0.938rem;
    border-radius: 4px 0 0 4px;
    box-shadow: 4px 4px 4px rgba(33,33,32,1);
    width: 20.625rem;
    background: rgba(33,33,32,1);
    color: var(--white);
    transition: all 0.2s ease-in-out;

    &:focus {
      background: #263238;
      outline: none;
    }
  }

  button {
    font-size: 1.5rem;
    background: #1c345b;
    color: white;
    border: blue;
    padding: 10px 10px;
    border-radius: 0 4px 4px 0;
    box-shadow: 4px 4px 4px rgba(33,33,32,1);
    text-shadow: -1px -1px 2px black;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2.25rem;

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
