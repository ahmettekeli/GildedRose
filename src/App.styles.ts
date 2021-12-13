import styled from "styled-components";
import { colors } from "./constants";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: auto;
  background-color: ${colors.storeBackground};
`;

export const Container = styled.div`
  min-height: 100%;
`;
