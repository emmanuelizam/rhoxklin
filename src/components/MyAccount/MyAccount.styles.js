import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: var(--white);
  .modal {
    width: 100%;
    height: 100%;
    display: none;
    left: 0;
    top: 0;
    position: fixed;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    transition-property: opacity;

    a {
      float: right;
      font-weight: 600;
      position: absolute;
      right: 20px;
      top: 10px;
      text-decoration: none;
      background-color: var(--gray);
      color: var(--red);
      padding: 5px;
      font-size: var(--font_small);

      :hover {
        background-color: var(--green);
      }
    }
  }
  .modal:target {
    display: block;
    position: fixed;
    opacity: 1;
  }
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
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: var(--white);
  border: 1px solid var(--green);
  border-radius: 20px;

  button {
    font-size: var(--font_small);
    color: var(--blue_dark);
    background-color: transparent;
    border: none;
    padding: 2rem 0;
    border-radius: 20px 20px 20px 20px;
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
      background-color: var(--gray);
    }

    @media screen and (max-width: 900px) {
      font-size: var(--font_very_small);
    }

    span:after {
      content: ">>";
      opacity: 0;
      transition: all 0.5s;
    }
  }
`;

export const List = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    padding: 4rem;
    background-color: var(--white);
    cursor: pointer;
    :nth-child(odd) {
      background-color: var(--gray);
    }

    :hover {
      background-color: var(--green);
    }

    th,
    td {
      width: auto;
      color: var(--blue_dark);
      padding: 1rem;
      text-align: left;

      a:target {
        display: block;
      }
    }
    th {
      background-color: var(--red);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  background-color: var(--blue_light);
  flex-direction: column;
  padding: 2rem;
  border-radius: 20px;

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

  label {
    color: var(--white);
    margin: 1rem 1rem 0.5rem 1rem;
  }
`;
