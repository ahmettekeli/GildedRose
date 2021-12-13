import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import { Context } from "../../Context/Store";
import { Wrapper } from "./ProductContainer.styles";
import { ProductType } from "../../type";
import { actionTypes } from "../../Context/ActionTypes";

function ProductContainer() {
  const { state, dispatch } = useContext(Context);

  function handleUpdate(product: ProductType): void {
    console.log(`Updating ${product.name}`);
    dispatch({ type: actionTypes.UPDATE, payload: { ...product } });
  }
  function handleDelete(id: number): void {
    console.log(`Deleting ${id}`);
    dispatch({ type: actionTypes.DELETE, payload: id });
  }
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {state.products?.map((product: ProductType) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product
              product={product}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default ProductContainer;
