import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Snackbar,
  Select,
  TextField,
} from "@material-ui/core";
import { ProductType } from "../../type";
import { itemEnum } from "../../Logic/Item";
import {
  isTextValid,
  isRemainingDateValid,
  isNumberValid,
} from "../../Utils/Utilities";

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
  const [itemType, setItemType] = useState(product.itemType);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function canUpdate() {
    return (
      isTextValid(name) &&
      isNumberValid(quality) &&
      isRemainingDateValid(sellinDate)
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
            type="number"
            value={sellinDate}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setSellinDate(parseInt(e.target.value));
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
          <Select
            labelId="itemType"
            id="itemType"
            value={itemType}
            fullWidth
            label="Item Type"
            onChange={(e) => {
              setItemType(e.target.value as string);
            }}
          >
            <MenuItem value={itemEnum.NORMAL}>{itemEnum.NORMAL}</MenuItem>
            <MenuItem value={itemEnum.AGED_BRIE}>{itemEnum.AGED_BRIE}</MenuItem>
            <MenuItem value={itemEnum.BACKSTAGE_PASS}>
              {itemEnum.BACKSTAGE_PASS}
            </MenuItem>
            <MenuItem value={itemEnum.SULFURAS}>{itemEnum.SULFURAS}</MenuItem>
            <MenuItem value={itemEnum.CONJURED}>{itemEnum.CONJURED}</MenuItem>
          </Select>
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
