import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { ProductType } from "../../type";
import { isTextValid, isDateValid, isNumberValid } from "../../Utils/Utilities";

function UpdateDialog({
  product,
  isOpen,
  handleUpdate,
  hide,
}: {
  product: ProductType;
  isOpen: boolean;
  handleUpdate: (product: ProductType) => void;
  hide: () => void;
}) {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState(0);
  const [sellinDate, setSellinDate] = useState(product.sellInDate);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function canUpdate() {
    return (
      isTextValid(name) && isNumberValid(quality) && isDateValid(sellinDate)
    );
  }

  function hideAlert() {
    setIsAlertOpen(false);
  }

  function showAlert() {
    setIsAlertOpen(true);
  }

  return (
    <>
      <Dialog open={isOpen} onClose={hide} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{`Updating ${product.name}`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="name"
            value={product.name}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sellinDate"
            label="Sell in Date"
            type="date"
            value={moment(sellinDate).format("YYYY-MM-DD")}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setSellinDate(moment(e.target.value).format("YYYY-MM-DD"));
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quality"
            label="Quality"
            type="number"
            value={product.quality}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setQuality(parseInt(e.target.value));
            }}
          />
          <DialogActions>
            <Button
              onClick={() => {
                hide();
                if (canUpdate()) {
                  handleUpdate(product);
                } else {
                  showAlert();
                }
              }}
            >
              Update
            </Button>
            <Button onClick={hide} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={6000}
        onClose={hideAlert}
        message="Please enter correct values."
      />
    </>
  );
}

export default UpdateDialog;
