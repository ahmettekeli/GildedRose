import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { Context } from "../../Context/Store";
import { Wrapper } from "./ProductContainer.styles";
import { Item } from "../../Logic/Item";
import { actionTypesEnum } from "../../Context/ActionTypes";

function ProductContainer() {
  const { state, dispatch } = useContext(Context);
  function handleDelete(id: number): void {
    console.log(`Deleting ${id}`);
    dispatch({ type: actionTypesEnum.DELETE, payload: id });
  }
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {state.products?.map((product: Item) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product product={product} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default ProductContainer;
