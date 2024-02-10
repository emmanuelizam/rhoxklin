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
  background-size: cover;
  background-repeat: no-repeat;
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

export const ContactUsButton = styled.a`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.41) 50%, #038fcd 100%);
  width: fit-content;
  margin: 4rem auto;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 10px 10px 30px var(--white);
  display: block;
  cursor: pointer;
  text-decoration: none;

  h2 {
    font-size: var(--font_small);
    color: var(--white);
    padding: 1rem;
    margin: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;

export const Service = styled.div`
  width: 100%;
  height: auto;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    padding: 2rem;
    border-radius: 20%;
    cursor: pointer;
    text-decoration: none;
    animation: animateNames 1s cubic-bezier(0.075, 0.82, 0.165, 0.5);

    @keyframes animateNames {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    :hover {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }

    h1 {
      font-size: var(--font_medium);
    }
  }
`;

export const NameStyle1 = styled.a`
  background-color: var(--white);
  color: var(--blue_dark);
`;

export const NameStyle2 = styled.a`
  background-color: var(--blue_dark);
  color: var(--white);
`;
