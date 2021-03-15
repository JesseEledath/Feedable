import { useState } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event) => {
    props.onChange(event)
    setIsChecked(!isChecked)
  }
  

  return (
    <div>
      <label htmlFor={props.item.name}>{props.item.name}</label>
      <input
        id={props.item.name}
        name={props.item.name}
        key={props.index}
        onChange={handleChange}
        type="checkbox"

        checked={isChecked}
        value={props.item.case} />
      
    </div>

  );
};

export default Checkbox;
