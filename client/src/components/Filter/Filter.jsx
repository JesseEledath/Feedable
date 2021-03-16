import Checkbox from "../Checkbox/Checkbox";
import "./Filter.css";

const filterList = [
  { id: 1, name: "Meat", case: "meat" },
  { id: 2, name: "Poultry", case: "poultry" },
  { id: 3, name: "Seafood", case: "sea_food" },
  { id: 4, name: "Dairy", case: "dairy" },
  { id: 5, name: "Fruit", case: "fruit" },
  { id: 6, name: "Produce", case: "produce" },
];

const Filter = (props) => {
  return (
    <div className="checklist-container">
      <div className="checklist-box">
        {filterList.map((item, index) => {
          return <Checkbox item={item} key={index} onChange={props.onChange} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
