import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const StyledButton = styled(Button)`
  && {
    margin: 1rem;
    width: 50%;
    color: ${colors.btnText};
    background-color: ${colors.addBtn};
    :hover {
      background-color: ${colors.addBtnHover};
    }
  }
`;
