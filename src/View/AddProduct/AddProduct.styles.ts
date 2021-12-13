import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 50vw;
  height: 70vh;
  margin: auto;
`;

export const AddButton = styled.button`
  width: 20vw;
  min-height: 5vh;
  margin: 1rem 0;
  border: none;
  border-radius: 5px;
  background-color: ${colors.addBtn};
  color: ${colors.btnText};
  :hover {
    background-color: ${colors.addBtnHover};
  }
`;
