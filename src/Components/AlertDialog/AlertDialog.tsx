import { useContext } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { actionTypesEnum } from "../../Context/ActionTypes";
import { Context } from "../../Context/Store";
import { Item } from "../../Logic/Item";

function AlertDialog({
  product,
  isOpen,
  hide,
}: {
  product: Item;
  isOpen: boolean;
  hide: () => void;
}) {
  const { dispatch } = useContext(Context);
  function handleDelete(product: Item): void {
    dispatch({ type: actionTypesEnum.DELETE, payload: product });
  }
  return (
    <Dialog open={isOpen} onClose={hide} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{`Are you sure you want to delete ${product.name}?`}</DialogTitle>

      <DialogActions>
        <Button
          onClick={() => {
            hide();
            handleDelete(product);
          }}
        >
          Yes
        </Button>
        <Button onClick={hide} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
