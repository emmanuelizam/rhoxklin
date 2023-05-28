import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--white);
`;

export const Title = styled.div`
  background: radial-gradient(rgba(0, 0, 0, 0.41) 55%, #038fcd 100%);
  width: fit-content;
  margin: 4rem auto;
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
  margin: 0;
  overflow: hidden;

  div {
    display: flex;
    width: auto;
    height: auto;
    margin: 2rem 0;

    img {
      width: 40%;
      height: auto;
    }

    div {
      width: 20%;
      height: auto;
      display: flex;
      margin: 0;
      h3 {
        font-size: var(--font_small);
        margin: auto;

        @media screen and (max-width: 500px) {
          font-size: var(--font_supder_small);
        }
      }
    }
  }
`;

export const Laundry = styled.div`
  justify-content: left;
  div {
    background-color: var(--gray);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    box-shadow: 2px 2px 3px var(--green);
    h3 {
      color: var(--blue_dark);
    }
  }
`;

export const Cleaning = styled.div`
  justify-content: right;
  div {
    background-color: var(--blue_dark);
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    box-shadow: -2px 2px 3px black;
    h3 {
      color: var(--white);
    }
  }
`;

export const CleaningProducts = styled.div`
  justify-content: left;
  div {
    background-color: var(--gray);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    box-shadow: 2px 2px 3px var(--green);
    h3 {
      color: var(--blue_dark);
    }
  }
`;

export const ArtWorks = styled.div`
  justify-content: right;
  div {
    background-color: var(--blue_dark);
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    box-shadow: -2px 2px 3px black;
    h3 {
      color: var(--white);
    }
  }
`;

export const PickUpAndDelivery = styled.div`
  justify-content: left;
  div {
    background-color: var(--gray);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    box-shadow: 2px 2px 3px var(--green);
    h3 {
      color: var(--blue_dark);
    }
  }
`;
