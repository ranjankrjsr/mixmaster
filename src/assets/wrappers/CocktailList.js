import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Wrapper;
