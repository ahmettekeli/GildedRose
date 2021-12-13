import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 70vw;
  margin: auto;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 1rem;
  }

  .welcomeText {
    color: ${colors.welcomeText};
  }

  .storyText {
    color: ${colors.welcomeText};
    text-align: center;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;
