import { useContext, useState } from "react";
import { MenuItem, Select, Snackbar, TextField } from "@material-ui/core";
import { Wrapper, AddButton } from "./AddProduct.styles";
import { Item, itemEnum } from "../../Logic/Item";
import { actionTypesEnum } from "../../Context/ActionTypes";
import { Context } from "../../Context/Store";
import {
  isTextValid,
  isRemainingDateValid,
  isNumberValid,
} from "../../Utils/Utilities";

function AddProduct() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [sellIn, setSellIn] = useState(0);
  const [quality, setQuality] = useState(0);
  const [itemType, setItemType] = useState<string>(itemEnum.NORMAL);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { state, dispatch } = useContext(Context);

  function canAdd() {
    return (
      isTextValid(name) &&
      isNumberValid(quality) &&
      isRemainingDateValid(sellIn)
    );
  }
  function handleAdd(product: Item) {
    if (canAdd()) {
      dispatch({ type: actionTypesEnum.CREATE, payload: product });
    } else {
      showAlert();
    }
  }

  function showAlert() {
    setIsAlertVisible(true);
  }

  function hideAlert() {
    setIsAlertVisible(false);
  }

  return (
    <Wrapper>
      <div>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Product Name"
          type="name"
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
          margin="dense"
          id="sellinDate"
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
      </div>
      <AddButton
        onClick={() => {
          handleAdd(
            new Item(
              state.products.length + 1,
              name,
              sellIn,
              quality,
              img,
              itemType as itemEnum
            )
          );
        }}
      >
        Add
      </AddButton>
      <Snackbar
        open={isAlertVisible}
        autoHideDuration={6000}
        onClose={hideAlert}
        message="Please enter correct values."
      />
    </Wrapper>
  );
}

export default AddProduct;
