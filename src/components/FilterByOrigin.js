import React from "react";

function FilterByOrigin(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "origin",
      value: ev.target.value,
    });
  };

  const originList = props.origin.map((origin, i) => {
    return (
      <label key={i}>
        <input
          className="Checkbox"
          type="checkbox"
          name="origin"
          value={origin}
          checked={props.origin.includes(origin)}
          onChange={handleChange}
        />
        {origin}
      </label>
    );
  });

  return (
    <>
      <label htmlFor="origin" className="main__form--check stylelabel">
        Origin:
      </label>
      {originList}
    </>
  );
}
export default FilterByOrigin;
