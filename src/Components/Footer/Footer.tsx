import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Typography } from "@material-ui/core";
import { colors, routes, urls } from "../../constants";
import { StyledLink } from "../Header/Header.styles";

//!! Just to note I'm familiar with Material UI's custom css usage.
const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "20%",
    backgroundColor: colors.footerBackground,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(2),
  },
  content: {
    color: colors.storeBackground,
    "&:visited": {
      color: colors.storeBackground,
    },
  },
  linksContainer: {
    margin: theme.spacing(1),
  },
  socialMediaContainer: {
    display: "flex",
  },
  socialMediaIcon: {
    color: colors.storeBackground,
  },
}));

function Footer() {
  const classes = useStyles();

  const handleOnClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.linksContainer}>
          <Typography gutterBottom>
            <StyledLink to={routes.home} className={classes.content}>
              Home
            </StyledLink>
          </Typography>
          <Typography gutterBottom>
            <StyledLink to={routes.store} className={classes.content}>
              Store
            </StyledLink>
          </Typography>
          <Typography gutterBottom>
            <StyledLink to={routes.add} className={classes.content}>
              Add
            </StyledLink>
          </Typography>
        </div>
        <div className={classes.socialMediaContainer}>
          <IconButton onClick={() => handleOnClick(urls.github)}>
            <GitHubIcon className={classes.socialMediaIcon} />
          </IconButton>
          <IconButton onClick={() => handleOnClick(urls.linkedin)}>
            <LinkedInIcon className={classes.socialMediaIcon} />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
