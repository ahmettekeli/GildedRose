import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { Context } from "../../Context/Store";
import { Wrapper, StyledButton } from "./ProductContainer.styles";
import { Item } from "../../Logic/Item";
import { actionTypesEnum } from "../../Context/ActionTypes";

function ProductContainer() {
  const { state, dispatch } = useContext(Context);
  function handleDayPass() {
    dispatch({ type: actionTypesEnum.PASS_DAY });
  }
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {state.products?.map((product: Item) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <StyledButton onClick={handleDayPass}>Pass A Day</StyledButton>
    </Wrapper>
  );
}

export default ProductContainer;
