import { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { actionTypesEnum } from "../../Context/ActionTypes";
import { Context } from "../../Context/Store";
import { Item } from "../../Logic/Item";
import { itemEnum } from "../../Logic/Item";
import Notification from "../Notification/Notification";
import { validate } from "../../Utils/Utilities";

function UpdateDialog({
  product,
  isOpen,
  hide,
}: {
  product: Item;
  isOpen: boolean;
  hide: () => void;
}) {
  const [name, setName] = useState(product.name);
  const [img, setImg] = useState(product.img);
  const [quality, setQuality] = useState(product.quality);
  const [sellIn, setSellIn] = useState(product.sellIn);
  const [itemType, setItemType] = useState<string>(product.itemType);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { dispatch } = useContext(Context);

  function handleUpdate(product: Item) {
    const { isValid, message } = validate(
      name,
      img,
      quality,
      sellIn,
      itemType as itemEnum
    );
    hide();
    if (isValid) {
      dispatch({ type: actionTypesEnum.UPDATE, payload: product });
    } else {
      setAlertMessage(message);
      showAlert();
    }
  }

  function hideAlert() {
    setAlertVisible(false);
  }

  function showAlert() {
    setAlertVisible(true);
  }

  useEffect(() => {
    setName(product.name);
    setImg(product.img);
    setQuality(product.quality);
    setSellIn(product.sellIn);
    setItemType(product.itemType);
  }, [
    product.name,
    product.img,
    product.quality,
    product.sellIn,
    product.itemType,
  ]);

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
            type="text"
            value={name}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="img"
            label="Image Url"
            type="text"
            value={img}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sellIn"
            label="Sell in Date"
            type="number"
            value={sellIn}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setSellIn(parseInt(e.target.value));
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quality"
            label="Quality"
            type="number"
            value={quality}
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
                handleUpdate(
                  new Item(
                    product.id,
                    name,
                    sellIn,
                    quality,
                    img,
                    itemType as itemEnum
                  )
                );
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
      <Notification
        open={isAlertVisible}
        onClose={hideAlert}
        message={alertMessage}
      />
    </>
  );
}

export default UpdateDialog;
