import React from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <input 
      placeholder="Cortar cebolla" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
