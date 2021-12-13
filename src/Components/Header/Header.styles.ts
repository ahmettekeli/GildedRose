import { AppBar, Box, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

export const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    height: 10%;
    background-color: ${colors.headerBackground};
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const StyledMenuContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 0 1rem;

  .menuItem {
    margin: 0 1rem;
    border-radius: 5px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.btnText};
  /* height: 40%;
  min-width: 100%;
  margin: 0.5rem; */
  text-align: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
