import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  background-image: url(${({ Hero }) => Hero});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
`;

export const Content = styled.div`
  padding: 2rem;
  color: var(--blue_dark);
  overflow: hidden;
  h1 {
    font-size: var(--font_big);
    padding: 4rem 0;
  }

  h2 {
    font-size: var(--font_medium);
    padding: 1rem 0;
  }
`;
