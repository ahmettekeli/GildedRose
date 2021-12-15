import { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { actionTypesEnum } from "../../Context/ActionTypes";
import { Context } from "../../Context/Store";
import { Item } from "../../Logic/Item";
import { Wrapper, StyledButton } from "./ProductContainer.styles";
import { urls } from "../../constants"; //process.env.REACT_APP_API_URL

function ProductContainer() {
  const { state, dispatch } = useContext(Context);
  function handleDayPass() {
    dispatch({ type: actionTypesEnum.PASS_DAY });
  }

  useEffect(() => {
    if (state.products.length <= 0) {
      fetch(urls.mockApiUrl)
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: actionTypesEnum.GET_PRODUCTS, payload: data })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, state.products.length]);
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
