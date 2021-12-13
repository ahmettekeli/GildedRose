import styled from "styled-components";
import { Button } from "@material-ui/core";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin: 1rem;
  width: 50%;
  height: 100%;
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    background-color: ${colors.addBtn};
    color: ${colors.btnText};
  }
`;
