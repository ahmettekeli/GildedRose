import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { MenuItem, Select, TextField } from "@material-ui/core";
import { actionTypesEnum } from "../../Context/ActionTypes";
import { AddButton, Wrapper } from "./AddProduct.styles";
import { Context } from "../../Context/Store";
import { Item, itemEnum } from "../../Logic/Item";
import Notification from "../../Components/Notification/Notification";
import { validate } from "../../Utils/Utilities";

function AddProduct() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [sellIn, setSellIn] = useState(0);
  const [quality, setQuality] = useState(0);
  const [itemType, setItemType] = useState<string>(itemEnum.NORMAL);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { state, dispatch } = useContext(Context);
  const successMessage = "Added product.";

  function handleAdd(product: Item) {
    const { isValid, message } = validate(
      name,
      img,
      quality,
      sellIn,
      itemType as itemEnum
    );
    if (isValid) {
      dispatch({ type: actionTypesEnum.CREATE, payload: product });
      setAlertMessage(successMessage);
      showAlert();
    } else {
      setAlertMessage(message);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <Notification
          open={isAlertVisible}
          onClose={hideAlert}
          message={alertMessage}
        />
      </Wrapper>
    </motion.div>
  );
}

export default AddProduct;
