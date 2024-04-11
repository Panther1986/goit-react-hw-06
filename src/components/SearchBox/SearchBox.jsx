import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.textSearch}>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
