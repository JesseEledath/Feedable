import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <>
      <input
        key={props.index}
        // onClick={props.handleCheckChildElement}
        onChange={(e) => props.onChange(e)}
        type="checkbox"
        // checked={props.isChecked}
        value={props.item.name}
      />
      {props.item.name}
    </>
  );
};

export default Checkbox;
