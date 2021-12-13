import { useState } from "react";
import moment from "moment";
import { TextField } from "@material-ui/core";
import { Wrapper, AddButton } from "./AddProduct.styles";

function AddProduct() {
  const [name, setName] = useState("");
  const [sellinDate, setSellinDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [quality, setQuality] = useState(0);

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
          type="date"
          value={sellinDate}
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
          value={quality}
          fullWidth
          variant="standard"
          onChange={(e) => {
            setQuality(parseInt(e.target.value));
          }}
        />
      </div>
      <AddButton>Add</AddButton>
    </Wrapper>
  );
}

export default AddProduct;
