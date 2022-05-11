import React from "react";

export default function ItemCount() {
  const [count, setCount] = React.useState(1);
  const stock = 10;

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const StockButton = ({ handleOnClick, text }) => {
    return (
      <button className="stockButton" onClick={handleOnClick}>
        {text}
      </button>
    );
  };

  const AddButton = () => {
    return <button className="addButton">añadir al carrito</button>;
  };

  return (
    <div className="buttonContainer">
      <StockButton text="-" handleOnClick={onDecrease} />
      <span className="addButtonCount">{count}</span>
      <AddButton />
      <StockButton text="+" handleOnClick={onAdd} />
    </div>
  );
}
