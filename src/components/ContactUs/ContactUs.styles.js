import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ pic }) => pic});
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
`;

export const Title = styled.div`
  background: radial-gradient(
    rgba(3, 143, 205, 1) 40%,
    rgba(0, 0, 0, 0.5) 100%
  );
  width: fit-content;
  margin: 3rem auto;
  border-radius: 2rem;
  overflow: hidden;
  h2 {
    font-size: var(--font_medium);
    color: var(--white);
    padding: 1rem;
    margin: 0rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5rem;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;

    * {
      padding: 1rem;
      border-radius: 10px;
      border: 1px solid var(--red);
      background-color: var(--white);
      color: var(--black);
      font-weight: 600;
      font-size: var(--font_super_small);
    }

    textarea {
      grid-row-start: 1;
      grid-row-end: 6;

      ::-webkit-input-placeholder {
        text-align: center;
        margin: auto;
        color: var(--black);
      }

      ::-moz-placeholder {
        text-align: center;
        color: var(--black);
      }
    }

    input[type="submit"] {
      background: radial-gradient(
        rgb(26 122 37 / 65%) 40%,
        rgb(129 191 28 / 40%) 100%
      );
      cursor: pointer;
      font-size: var(--font_small);
    }
  }
`;

export const MessageUs = styled.form`
  width: 100%;
  height: auto;
`;
