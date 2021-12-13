import { Box, MenuItem, Typography } from "@material-ui/core";
import {
  StyledAppBar,
  StyledToolbar,
  StyledMenuContainer,
  StyledLink,
} from "./Header.styles";
import { urls, routes } from "../../constants";

function Header() {
  return (
    <header>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Box>
            <StyledLink to={routes.home}>
              <img className="logo" src={urls.logoUrl} alt="logo" />
            </StyledLink>
          </Box>
          <StyledMenuContainer>
            <StyledLink to={routes.store}>
              <MenuItem>
                <Typography>Store</Typography>
              </MenuItem>
            </StyledLink>
            <StyledLink to={routes.add}>
              <MenuItem>
                <Typography>Add</Typography>
              </MenuItem>
            </StyledLink>
          </StyledMenuContainer>
        </StyledToolbar>
      </StyledAppBar>
    </header>
  );
}

export default Header;
