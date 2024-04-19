import s from './SearchBox.module.css';
const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div className={s.wrapper_search}>
      <label>
        Find contact by name or number
        <input
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Enter smth"
        />
      </label>
    </div>
  );
};

export default SearchBox;
