import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--white);
  z-index: 1;
  #modal {
    width: 100%;
    height: 100%;
    display: none;
    left: 0;
    top: 0;
    position: fixed;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    opacity: 1;
    transition-property: opacity;

    button {
      float: right;
      font-weight: 600;
      position: absolute;
      right: 20px;
      top: 10px;
      text-decoration: none;
      background-color: var(--gray);
      color: var(--red);
      padding: 5px;
      border: none;
      cursor: pointer;
      font-size: var(--font_small);

      :hover {
        background-color: var(--green);
      }
    }
  }
  #modal:target {
    display: none;
  }
`;

export const Title = styled.div`
  background: var(--blue_dark);
  width: fit-content;
  margin: 1rem 0 1.5rem 0;
  border-radius: 10%;
  overflow: hidden;
  h2 {
    font-size: var(--font_medium);
    color: var(--white);
    padding: 0.5rem;
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
  height: min-content;
  display: inline-block;
  padding: 4rem 0;
`;

export const Menu = styled.nav`
  width: 20%;
  height: 35rem;
  background-color: var(--blue_dark);
  padding: 0;
  margin: 0 4rem 0 0;
  border: solid var(--green);
  display: block;
  float: left;
  button {
    font-size: var(--font_small);
    color: var(--white);
    background-color: transparent;
    width: 100%;
    border: none;
    padding: 2rem 0;
    text-align: left;
    outline: none;
    cursor: pointer;

    :active,
    :focus span:after {
      background-color: var(--blue_light);
      color: white;
      opacity: 1;
      :hover {
        background-color: var(--blue_light);
        color: white;
      }
    }

    :active,
    :focus {
      background-color: var(--blue_light);
      color: white;
      opacity: 1;
      :hover {
        background-color: var(--blue_light);
        color: white;
      }
    }

    :hover {
      background-color: var(--blue_light);
      color: white;
    }

    @media screen and (max-width: 900px) {
      font-size: var(--font_very_small);
    }

    span {
      margin: auto;
      padding: 1rem;
    }

    span:after {
      content: ">>";
      opacity: 0;
      transition: all 0.5s;
    }
  }
`;

export const List = styled.div`
  height: 30rem;
  overflow: auto;
`;

export const Table = styled.table`
  border-collapse: separate;
  border: solid var(--red) 1px;
  tr {
    padding: 4rem;
    background-color: var(--white);
    cursor: pointer;
    :nth-child(odd) {
      background-color: var(--gray);
    }

    th,
    td {
      width: auto;
      border: solid var(--red) 1px;
      color: var(--green);
      padding: 1rem;
      text-align: left;

      a:target {
        display: block;
      }
    }
    th {
      background-color: var(--blue_dark);
      color: var(--white);
      font-weight: 700;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  background-color: var(--blue_light);
  padding: 1rem;
  margin: 2rem;
  border-radius: 20px;
  display: block;
  label {
    display: block;
    padding: 0.5rem;
    color: var(--white);
  }
  input[type="text"],
  input[type="email"],
  input[type="address"],
  input[type="tel"],
  input[type="password"] {
    margin: 0rem 1rem 1rem 1rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
    padding: 0 1rem;
    :focus-visible {
      outline: none;
      border: 1px solid var(--green);
    }
  }

  input[type="button"] {
    margin: 1rem;
    width: 50%;
    height: 2rem;
    color: var(--white);
    background-color: var(--blue_dark);
    align-self: center;
    border-radius: 10px;
    cursor: pointer;
  }
`;
