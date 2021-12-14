import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.productBackground};
  border: 1px solid lightblue;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(67, 67, 67, 0.7);
  box-shadow: 0px 0px 5px 2px rgba(67, 67, 67, 0.7);

  .button-control {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .edit-button {
    min-width: 50%;
    background-color: ${colors.editBtn};
    color: ${colors.btnText};
    border: none;
    border-radius: 0 0 0 20px;
    :hover {
      background-color: ${colors.editBtnHover};
    }
  }
  .delete-button {
    min-width: 50%;
    background-color: ${colors.deleteBtn};
    color: ${colors.btnText};
    border: none;
    border-radius: 0 0 20px 0px;
    :hover {
      background-color: ${colors.deleteBtnHover};
    }
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
  }
  .product-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div {
      margin: 0.5rem;
    }
  }
`;
