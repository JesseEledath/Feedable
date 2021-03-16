import "./Sort.css";

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort by:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="name-ascending">
          &nbsp; Alpha, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alpha, Z-A &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;
