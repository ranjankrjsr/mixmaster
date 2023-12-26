import styled from "styled-components";

const Wrapper = styled.div`
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1.5rem;
  }

  .drink img {
    border-radius: var(--borderRadius);
  }
  .drink .drink-info {
    margin-top: 2rem;
  }

  .drink .drink-info p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .drink .drink-info p .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-500);
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  .drink .drink-info p .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3.5rem;
      align-items: center;
    }
  }
`;

export default Wrapper;
