import styled from "styled-components";
export const Loading = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  border: 5px solid var(--red);
  border-left: 5px solid var(--blue_dark);
  transform-origin: center;
  border-radius: 50%;
  animation-name: spin;
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
