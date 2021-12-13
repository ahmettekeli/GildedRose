import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AlertDialog from "../AlertDialog/AlertDialog";
import UpdateDialog from "../UpdateDialog/UpdateDialog";
import { Wrapper } from "./Product.styles";
import { ProductType } from "../../type";

function Product({
  product,
  handleUpdate,
  handleDelete,
}: {
  product: ProductType;
  handleUpdate: (product: ProductType) => void;
  handleDelete: (id: number) => void;
}) {
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
          <p>{`Quality: ${product.quality}  Sell in Date: ${product.sellInDate}`}</p>
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
        handleUpdate={() => {
          handleUpdate(product);
        }}
      />
      <AlertDialog
        product={product}
        isOpen={isAlertOpen}
        hide={hideAlert}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Product;
