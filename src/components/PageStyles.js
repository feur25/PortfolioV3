import styled from 'styled-components';
export const StyledPage = styled(Grid)`
  min-height: 100vh;
  padding-top: 120px;
  grid-template-rows: min-content auto;
  position: relative;
  overflow: hidden;
  .bg-text {
    position: absolute;
    top: 200px;
    font-size: 8rem;
    opacity: 0.2;
    font-weight: 800;
    right: 0;
    z-index: -10;
    transform: translateX(30%);
    text-transform: uppercase;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    padding-inline-start: 1rem;
    .bg-text {
      font-size: 5.5rem;
    }
  }
`;