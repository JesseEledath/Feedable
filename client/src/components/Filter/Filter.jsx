import "./Filter.css";

const Filter = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="filter-container" onSubmit={props.handleSubmit}>
      <label htmlFor="filter">Category:</label>
        <select className="filter" onChange={handleChange}>
          <option className="option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
      </select>
    </form>
  );
};

export default Filter;