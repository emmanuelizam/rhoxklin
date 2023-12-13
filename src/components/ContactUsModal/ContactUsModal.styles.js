import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  display: ${(props) => props.display};
  background: radial-gradient(rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
  animation: myanim 1s;

  @keyframes myanim {
    from {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    to {
      opacity: 1;
      transform: rotate(1080deg) scale(1);
    }
  }
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
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5rem;
  margin: auto;
  box-shadow: 1rem;
  background: var(--white);

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;

    * {
      padding: 1rem;
      border-radius: 10px;
      border: 1px solid var(--red);
      background-color: var(--blue_light);
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
        rgb(3 143 205 / 65%) 40%,
        rgb(0 0 0 / 40%) 100%
      );
      cursor: pointer;
      font-size: var(--font_small);
    }
  }
`;

export const CloseButton = styled.button`
  height: auto;
  width: fit-content;
  padding: 0 2px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: var(--white);
  border: solid var(--red) 2px;
  border-radius: 20px;
  cursor: pointer;
  h1 {
    margin: 0;
    font-weight: 900;
    color: var(--red);
    font-size: var(--font_medium);
  }
`;
