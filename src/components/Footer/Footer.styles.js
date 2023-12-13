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
  color: var(--white);
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  background-color: transparent;

  h2 {
    margin: auto;
    font-size: 4rem;
    padding: 1.5rem;
    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }
`;

export const ServicesContacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

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
  }
`;
export const Services = styled.div`
  h2 {
    font-size: var(--font_super_small);
    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

export const Bar = styled.hr`
  margin: 0 15%;
  border: 0;
  background: var(--white);
  width: 0.2rem;
`;

export const Contacts = styled.div`
  img {
    width: 36px;
    height: auto;
    @media screen and (max-width: 500px) {
      width: 24px;
      height: auto;
    }
  }
  h2 {
    font-size: var(--font_super_small);

    @media screen and (max-width: 500px) {
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

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  h2 {
    visibility: hidden;
    width: 120px;
    background-color: var(--white);
    color: var(--blue_dark);
    text-align: center;
    padding: 5px 0px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }

  :hover h2 {
    visibility: visible;
  }
`;
