import { motion } from "framer-motion";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";

function Store() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductContainer />
    </motion.div>
  );
}

export default Store;
