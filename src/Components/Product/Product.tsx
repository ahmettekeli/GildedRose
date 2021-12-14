import { useState } from "react";
import AlertDialog from "../AlertDialog/AlertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import UpdateDialog from "../UpdateDialog/UpdateDialog";
import { Item } from "../../Logic/Item";
import { Wrapper } from "./Product.styles";

function Product({ product }: { product: Item }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  function hideAlert(): void {
    setIsAlertOpen(false);
  }
  function showAlert(): void {
    setIsAlertOpen(true);
  }

  function hideUpdatedialog(): void {
    setIsUpdateDialogOpen(false);
  }

  function showUpdateDialog(): void {
    setIsUpdateDialogOpen(true);
  }

  return (
    <>
      <Wrapper>
        <img src={product.img} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="product-detail">
            <div>{`Quality: ${product.quality}`}</div>
            <div>{`Sell in: ${product.sellIn}`}</div>
            <div>{`Type: ${product.itemType}`}</div>
          </div>
        </div>
        <div className="button-control">
          <button
            className="edit-button"
            onClick={() => {
              showUpdateDialog();
            }}
          >
            <EditIcon />
          </button>
          <button className="delete-button" onClick={showAlert}>
            <DeleteIcon />
          </button>
        </div>
      </Wrapper>
      <UpdateDialog
        product={product}
        isOpen={isUpdateDialogOpen}
        hide={hideUpdatedialog}
      />
      <AlertDialog product={product} isOpen={isAlertOpen} hide={hideAlert} />
    </>
  );
}

export default Product;
