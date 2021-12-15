import { Wrapper } from "./Home.styles";
import { urls } from "../../constants";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <h2 className="welcomeText">Welcome to Gilded Rose!</h2>
        <div className="content">
          <img src={urls.welcomeImgUrl} alt="welcome" />
          <p className="storyText">
            Hi and welcome to team Gilded Rose. As you know, we are a small inn
            with a prime location in a prominent city ran by a friendly
            innkeeper named Allison. We also buy and sell only the finest goods.
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Home;
