import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--blue_dark);
`;

export const Content = styled.div`
  width: 100%;
  height: inherit;
  padding: 0rem 0 0 0rem;
  overflow: hidden;
  background-color: transparent;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  background-color: transparent;

  h2 {
    margin: auto;
    font-size: 3rem;
    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }
`;

export const ServicesContacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a:link {
      color: var(--green);
      background-color: transparent;
      text-decoration: underline;
    }
    a:hover {
      text-decoration: underline;
    }
    a:visited {
      color: var(--white);
      background-color: transparent;
      text-decoration: underline;
    }
    a:active {
      text-decoration: underline;
    }
  }

  h2 {
    background-color: var(--blue_dark);
    color: var(--white);
  }
`;
export const Services = styled.div`
  h2 {
    font-size: var(--font_small);
    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

export const Contacts = styled.div`
  left-border: 2px black;
  h2 {
    font-size: 1.5rem;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

export const Rights = styled.div`
  h2 {
    margin-bottom: 0;
    width: fit-content;
    font-size: calc(1rem / 2);
  }
`;
