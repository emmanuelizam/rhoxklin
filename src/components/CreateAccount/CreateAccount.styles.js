import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: var(--white);
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

export const ContactUsButton = styled.button`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.41) 50%, #038fcd 100%);
  width: fit-content;
  margin: 4rem auto;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 10px 10px 30px var(--white);
  display: block;
  border: none;
  cursor: pointer;
  text-decoration: none;

  h2 {
    font-size: var(--font_small);
    color: var(--white);
    padding: 1rem;
    margin: 0rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 5rem;

  form {
    display: flex;
    background-color: var(--blue_light);
    flex-direction: column;
    padding: 2rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="address"],
  input[type="tel"] {
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

  input[type="password"] {
    margin: 0rem 1rem 0.5rem 1rem;
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
    margin: 1rem;
    width: 50%;
    height: 2rem;
    color: var(--white);
    background-color: var(--blue_dark);
    align-self: center;
    border-radius: 10px;
    cursor: pointer;
  }

  a {
    margin: 1rem;
    width: 50%;
    height: 2rem;
    color: var(--white);
    background-color: none;
    align-self: center;
    border-radius: 10px;
    border: none;
    text-align: center;
    text-decoration: none;
  }

  label {
    color: var(--white);
    margin: 1rem 1rem 0.5rem 1rem;
  }
`;
