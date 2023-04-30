import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  background-image: url(${({ Hero }) => Hero});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Content = styled.div`
  margin: 2rem;
  color: var(--blue_dark);
  h1 {
    font-size: var(--font_big);
    margin: 4rem 0;
  }

  h2 {
    font-size: var(--font_medium);
    margin: 1rem 0;
  }
`;
