import { useState } from "react";
import { MenuItem, Select, TextField } from "@material-ui/core";
import { Wrapper, AddButton } from "./AddProduct.styles";
import { itemEnum } from "../../Logic/Item";

function AddProduct() {
  const [name, setName] = useState("");
  const [sellinDate, setSellinDate] = useState(0);
  const [quality, setQuality] = useState(0);
  const [itemType, setItemType] = useState<string>(itemEnum.NORMAL);

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
      <AddButton>Add</AddButton>
    </Wrapper>
  );
}

export default AddProduct;
