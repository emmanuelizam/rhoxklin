import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  display: ${(props) => props.display};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 65%,
    rgba(0, 0, 0, 1) 100%
  );
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
  background: var(--white);
  width: fit-content;
  margin: 3rem auto;
  border-radius: 2rem;
  overflow: hidden;
  h2 {
    font-size: var(--font_medium);
    color: var(--blue_dark);
    padding: 1rem;
    margin: 0rem;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 1rem;
  background-color: var(--gray);
  border: 2px solid var(--white);

  h1 {
    color: var(--blue_dark);
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: auto;

    @media screen and (max-width: 720px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    * {
      padding: 1rem;
      border-radius: 10px;
      border: 1px solid var(--red);
      color: var(--red);
      font-weight: 400;
      font-size: var(--font_super_small);
    }
    textarea {
      width: 100%;
      height: 400px;
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

    div {
      width: 100%;
      height: 400px;
      margin: auto 1rem;

      @media screen and (max-width: 720px) {
        height: auto;
        margin: 1rem auto;
      }

      input {
        width: 100%;
        margin: 0.5rem 0;
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
  }
`;

export const CloseButton = styled.button`
  display: inline;
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
