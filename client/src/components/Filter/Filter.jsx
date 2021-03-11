import "./Filter.css";

const Filter = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="filter-container" onSubmit={props.handleSubmit}>
      <label htmlFor="filter">Category:</label>
        <select className="filter" onChange={handleChange}>
          <option className="option" value="meat">&nbsp; Meat &nbsp;</option>
          <option value="poultry">&nbsp; Poultry &nbsp;</option>
          <option value="sea_food">&nbsp; Seafood &nbsp;</option>
          <option value="dairy">&nbsp; Dairy &nbsp;</option>
          <option value="fruit">&nbsp; Fruit &nbsp;</option>
          <option value="produce">&nbsp; Produce &nbsp;</option>
        </select>
    </form>
  );
};

export default Filter;