import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .hg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 90vw;
  }

  .hg img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin: 0 auto;
  }

  .hg h3 {
    text-align: center;
    font-weight: 500;
  }

  .hg p {
    line-height: 2;
    text-align: center;
  }

  .hg .backHome {
    text-align: center;
    color: red;
    font-weight: 450;
  }
`;

export default Wrapper;
