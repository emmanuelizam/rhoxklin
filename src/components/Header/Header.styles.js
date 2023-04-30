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

  @media screen and (max-width: 720px) {
    font-size: 8px;
  }

  h3 {
    margin: auto;
    color: var(--blue_dark);
    font-size: var(--font_super_small);
    @media screen and (max-width: 500px) {
      font-size: calc(var(--font_super_small) / 1.5);
    }
  }

  div {
    display: flex;
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 1rem;
    
    :hover{
        background-color: var(--gray);
    }
  }
`;

export const Home = styled.div`
  margin: 0px 1rem;
`;

export const Services = styled.div`
  margin: 0px 1rem;
`;

export const ContactUs = styled.div`
  margin: auto 1rem;
`;

export const SignIn = styled.div`
  margin: auto 1rem;
`;

export const Cart = styled.div`
  position: relative;
  margin: auto 1rem;
  background-image: url(${({cart})=>cart});
  background-size: cover;
  background-repeat: no-repeat;

  div {
    position: absolute;
    display: block;
    border-radius: 50%;
    width: auto;
    top: -1rem;
    right: -1.5rem;
    background-color: var(--blue_dark);

    h3 {
        color: var(--white);
        font-size: 8px;
    }
  }
`;
