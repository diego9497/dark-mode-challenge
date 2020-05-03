import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;
