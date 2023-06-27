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

export const ContactUs = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.41) 50%, #038fcd 100%);
  width: fit-content;
  margin: 4rem auto;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 10px 10px 30px var(--white);
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px 20px;
  padding: 2rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
`;

export const Details = styled.div`
  background-color: var(--blue_light);
  padding: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 5%;

  p {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: normal;
    color: var(--white);
  }
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 8px;
  color: black;
`;

export const AddToCart = styled.button`
  width: 100%;
  height: auto;
  background-color: transparent;
  border-radius: 5px;
  font-size: 0.8rem;
  border: 1px solid var(--red);
  cursor: pointer;
  color: red;
  padding: 1rem 1rem;
  transition-duration: 0.3s;
  :hover {
    background-color: var(--green);
  }
`;
