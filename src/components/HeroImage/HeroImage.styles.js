import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ Hero }) => Hero});
  background-size: 100 cover;
  background-position: center;
  background-attachment: fixed;
  animation: animateHero 1s linear;

  @keyframes animateHero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  color: var(--blue_dark);
  overflow: hidden;
  h1 {
    font-size: var(--font_big);
    padding: 1rem 0;
    text-shadow: 5px 5px 5px var(--green);

    @media screen and (max-width: 500px) {
      font-size: 5rem;
    }
  }

  h2 {
    font-size: var(--font_medium);
    padding: 1rem 0;
    text-shadow: 1px 1px 1px var(--green);
  }
`;
