import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { Item } from "../../Logic/Item";

function AlertDialog({
  product,
  isOpen,
  hide,
  handleDelete,
}: {
  product: Item;
  isOpen: boolean;
  hide: () => void;
  handleDelete: (id: number) => void;
}) {
  return (
    <Dialog open={isOpen} onClose={hide} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{`Are you sure you want to delete ${product.name}?`}</DialogTitle>

      <DialogActions>
        <Button
          onClick={() => {
            hide();
            handleDelete(product.id);
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
