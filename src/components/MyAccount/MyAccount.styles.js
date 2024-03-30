import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--white);
  z-index: 1;
`;
export const Modal = styled.div`
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
  #modal:target {
    display: none;
  }
`;
export const Form = styled.form`
  width: auto;
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
  label.sex {
    display: inline;
  }
  input[type="text"],
  input[type="email"],
  input[type="address"],
  input[type="tel"],
  input[type="password"],
  input[type="number"],
  input[type="datetime-local"],
  input[type="date"] {
    width: 90%;
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

  input[type="submit"] {
    display: block;
    margin: auto;
    width: 50%;
    height: 2rem;
    color: var(--white);
    background-color: var(--blue_dark);
    align-self: center;
    border-radius: 10px;
    cursor: pointer;
  }
  img {
    height: 4rem;
    width: 4rem;
    display: inline-block;
    transition: all 500ms linear;
    :hover {
      height: 10rem;
      width: 10rem;
    }
  }
`;

export const Title = styled.div`
  background: var(--white);
  width: fit-content;
  margin: 0 0 2rem 0;
  border-radius: 20px;
  overflow: hidden;
  h2 {
    font-size: var(--font_medium);
    color: var(--red);
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
  height: 55rem;
  background-color: var(--blue_dark);
  padding: 0;
  margin: 0 4rem 0 0;
  border: solid var(--green);
  display: block;
  float: left;

  button {
    font-size: var(--font_very_small);
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

    span {
      margin: auto;
      padding: 1rem 0;
      word-wrap: break-word;
    }

    span:after {
      content: ">>";
      opacity: 0;
      transition: all 0.5s;
    }
  }
`;

export const List = styled.div`
  padding: 1rem;
  background-color: var(--gray);
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.3);
  overflow: auto;
  height: 45rem;
  position: static;
`;

export const Table = styled.table`
  border-collapse: collapse;
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
      border: none;
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
      position: sticky;
      top: 0px;
    }
    input {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0;
    }
    img {
      height: 64px;
      height: 64px;
    }
  }
`;

export const SearchAndAdd = styled.div`
  background-color: var(--gray);
  padding: 1rem;
  margin: 2rem;
  font-weight: 900;
  overflow: hidden;
  position: static;

  input {
    height: 2rem;
    border-radius: 10px;
    border: 1px solid var(--red);
    padding: 0.5rem;
    margin: 1rem 0rem;
  }
  button {
    width: 10rem;
    height: 2rem;
    border: 1px solid var(--red);
    margin: 0.5rem 1rem 0.5rem 0rem;
    border-radius: 10px;
    background-color: var(--blue_dark);
    color: var(--white);
    cursor: pointer;
  }
`;
