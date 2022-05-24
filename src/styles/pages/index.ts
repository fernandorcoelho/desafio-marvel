import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 10%;

  .slick-track {
    display: flex !important;
  }

  .slick-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-slide {
    width: unset !important;
    height: auto;
    padding: 0 1rem;

    &.slick-active > div > * {
      margin: 0 auto;
    }

    &.slick-active:first-child > div > * {
      margin: 0;
      margin-right: auto !important;
    }

    &.slick-active:last-child > div > * {
      margin: 0;
      margin-left: auto !important;
    }
  }

  .slick-dots {
    bottom: 0px !important;

    li {
      button {
        &::before {
          content: '';
          width: 0.5rem;
          height: 0.5rem;
          font-size: 0.813rem;
          border-radius: 100px;
          background-color: var(--gray-300);
          opacity: 1;
          margin-top: 20px;

          transition: all 0.2s;
        }
      }

      &.slick-active {
        button {
          &::before {
            background-color: var(--black);
          }
        }
      }
    }
  }

  @media (min-width: 426px) {
    .slick-list + .slick-list {
      margin: 0 -5px;
    }
    .slick-slide > div {
      padding: 0 5px;
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;

  > img {
    width: 21rem !important;
  }
`;

