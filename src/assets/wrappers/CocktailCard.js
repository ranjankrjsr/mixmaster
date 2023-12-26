import styled from "styled-components";
const Wrapper = styled.article`
  background: white;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: auto 1fr;
  :hover {
    box-shadow: var(--shadow-4);
  }

  .img-container .img {
    height: 18rem;

    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;
  }

  .footer h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .footer h5 {
    margin-bottom: 0.5rem;
  }

  .footer p {
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
`;

export default Wrapper;
