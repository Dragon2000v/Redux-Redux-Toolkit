import s from './SearchBox.module.css';

const SearchBox = ({ setSearchStr }) => {
  return (
    <div className={s.searchBoxWrap}>
      <label className={s.label} htmlFor="search">
        <span className={s.labelText}>Find contacts by name</span>
        <input
          className={s.input}
          onChange={e => setSearchStr(e.target.value)}
          id="search"
          type="search"
          placeholder="Enter search value..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
