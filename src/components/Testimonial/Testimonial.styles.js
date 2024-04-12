import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--gray);
  position: relative;
`;

export const Title = styled.div`
  background-color: var(--blue_dark);
  background: linear-gradient(to top, rgba(3, 143, 205, 0.3) 41%, #fff 100%),
    linear-gradient(to bottom, rgba(3, 143, 205, 0.3) 41%, #fff 100%) #038fcd;
  width: fit-content;
  margin: auto auto 2rem auto;
  overflow: hidden;
  h2 {
    font-size: var(--font_medium);
    color: var(--gray);
    padding: 0.5rem;
    margin: 0rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  background: transparent;

  a {
    position: relative;
    top: 50%;
    font-weight: 900;
    padding: 0.5rem;
    border-radius: 50%;
    color: var(--blue_light);
    font-size: var(--font_medium);
    transition: ease 0.5s;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      font-size: var(--font_very_small);
      padding: 0.2rem;
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Testimony = styled.div`
  display: ${({ display }) => display};
  overflow: hidden;
  width: 80%;
  height: 180px;
  animation: change 1s linear;

  @keyframes change {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  div {
    display: block;
    height: 100%;
    background-color: var(--white);
    padding: 1rem;

    p {
      font-size: 0.75rem;
      i {
        font-size: 0.4rem;
      }
      color: var(--blue_dark);
      @media screen and (max-width: 720px) {
        font-size: 0.5rem;
      }
    }
  }
  .image_container {
    height: 100%;
    width: 120px;
    float: left;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
export const LeftArrow = styled.a`
  left: 10%;
`;
export const RightArrow = styled.a`
  right: 10%;
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const Dot = styled.div`
  height: 0.7rem;
  width: 0.7rem;
  background-color: ${({ display }) => {
    if (display === "none") {
      return "white";
    } else {
      return "#038FCD";
    }
  }};
  border-radius: 50%;
  margin: 1rem;
  border: 0.2rem solid var(--blue_dark);
  :hover {
    background-color: var(--white);
  }
`;
