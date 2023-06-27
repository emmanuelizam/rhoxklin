import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  width: 100%;
`;

export const Content = styled.div`
  display: block;
`;

export const LogoImg = styled.img`
  width: 300px;
  height: auto;
  margin-right: auto;
  margin-left: 2rem;
  @media screen and (max-width: 720px) {
    width: 150px;
  }
`;

export const Bar = styled.hr`
  display: block;
  width: auto;
  margin: 0.5rem 2rem;
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: auto;
  margin: 0.5rem 2rem;

  @media screen and (max-width: 500px) {
    font-size: 0.3rem;
  }

  h3 {
    margin: auto;
    color: var(--blue_dark);
    font-size: var(--font_super_small);
    @media screen and (max-width: 500px) {
      font-size: 0.5rem;
    }
  }

  button {
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 0.5px solid var(--blue_dark);
    background-color: transparent;
    cursor: pointer;

    :hover {
      background-color: var(--gray);
      transition: 0.5s;
    }
  }
`;

export const Home = styled.button`
  margin: 0px 1rem;
`;

export const Services = styled.button`
  margin: 0px 1rem;
`;

export const ContactUs = styled.button`
  margin: 0px 1rem;
`;

export const SignIn = styled.button`
  margin: 0px 1rem;
`;

export const Cart = styled.button`
  background-color: var(--white);
  border: none;
  padding: 5px;
  border-radius: 50%;
  position: relative;

  :hover {
    background-color: var(--gray);
  }

  :hover img {
    opacity: 0.7;
  }
  img {
    width: 26px;
    height: auto;
  }

  span {
    position: absolute;
    border-radius: 50%;
    width: auto;
    padding: 2px;
    left: 1rem;
    top: -0.1rem;
    background-color: var(--green);
  }
`;
