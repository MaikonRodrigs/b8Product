import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 960px) {
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 10rem 0;
  }
`;
