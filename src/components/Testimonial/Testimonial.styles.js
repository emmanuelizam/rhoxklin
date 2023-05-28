import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--gray);
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
`;

export const Testimony = styled.div`
  display: flex;
  width: 60%;

  img {
    width: 30%;
    height: auto;
  }

  div {
    width: auto;
    background-color: var(--white);
    p {
      font-size: var(--font_very_small);
      color: var(--blue_dark);
      @media screen and (max-width: 500px) {
        font-size: 0.5rem;
      }
    }
  }
`;
export const LeftArrow = styled.div`
  border-right: 4rem solid var(--blue_dark);
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;

  @media screen and (max-width: 500px) {
    border-right: 2rem solid var(--blue_dark);
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }
`;
export const RightArrow = styled.div`
  border-left: 4rem solid var(--blue_dark);
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;

  @media screen and (max-width: 500px) {
    border-left: 2rem solid var(--blue_dark);
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;

  div {
    height: 0.7rem;
    width: 0.7rem;
    background-color: var(--blue_dark);
    border-radius: 50%;
    margin: 1rem;
    border: 0.2rem solid var(--blue_dark);
    :hover {
      background-color: var(--white);
    }
  }
`;
