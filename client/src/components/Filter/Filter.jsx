import Checkbox from "../Checkbox/Checkbox";
import "./Filter.css";

const filterList = [
  { name: "Meat", case: "meat" },
  { name: "Poultry", case: "poultry" },
  { name: "Seafood", case: "sea_food" },
  { name: "Dairy", case: "dairy" },
  { name: "Fruit", case: "fruit" },
  { name: "Produce", case: "produce" },
];

// filterList = []
// props.queriedProducts.category.map((x) => {
//  if (!filterList.includes(x)) {
//    filterList.push(x)
//  }
// })

const Filter = (props) => {
  return (
    <>
      <div> Filter </div>
      {/* <input type="checkbox"  value="checkedall" /> Check / Uncheck All */}
      <>
        {filterList.map((item, index) => {
          return (
            <Checkbox
              item={item}
              key={index}
              onChange={props.onChange}
              queriedProducts={props.queriedProducts}
            />
          );
        })}
      </>
    </>
  );
};

export default Filter;
