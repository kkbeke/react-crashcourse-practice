import { useState } from "react";
import CountComponent from "./CountComponent";

const StateCountComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };

  const [name, setName] = useState("kekebeke");
  const [isChecked, setIsChecked] = useState(false);
  const [fruits, setFruits] = useState(["apple", "mango", "durian"]);
  const [person, setPerson] = useState({ name: "kkbke", age: "25" });

  const handleShowFruits = () => {
    setIsChecked(!isChecked);
  };

  const handleAddFruit = () => {
    setFruits([...fruits, "Pineapple"]);
  };

  const handleRemoveFruit = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruit, index) => index !== fruitIndex
    );
    setFruits(filteredFruits);
  };

  return (
    <>
      <CountComponent
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <hr />
      <div>
        <label>Show? </label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>
      <button onClick={handleAddFruit}>Add Fruit</button>
      <ul className="list-group">
        {isChecked &&
          fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <li className="list-group-item">{fruit}</li>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFruit(index)}
                >
                  Remove Fruit
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default StateCountComponent;
