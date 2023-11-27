import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: var(--white);
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
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5rem;
  overflow-y: auto;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;

  div {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 1rem 0;
  }
`;

export const Name = styled.div`
  width: 90%;
  padding: 0 1rem;
  background-color: var(--blue_dark);

  h1 {
    font-size: var(--font_small);
    color: var(--white);
  }
`;

export const Remove = styled.div`
  width: 10%;
  height: auto;
  background: var(--green) url(${({ trash }) => trash});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75% 50%;

  :hover {
    background-color: var(--red);
  }
`;
