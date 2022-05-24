import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 10%;
`;

export const CardContainer = styled.div`
  background-color: var(--gray-50);
  
  display: grid;
  align-items: flex-end;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.5rem;
    color: var(--gray-900);
    margin-bottom: 1rem;

    strong {
      color: var(--red-500);
    }
  }
`;
