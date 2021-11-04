import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas: 'nav' 'main' 'footer';
  grid-template-rows: 100px 1fr 80px;
`;

export default Container;
