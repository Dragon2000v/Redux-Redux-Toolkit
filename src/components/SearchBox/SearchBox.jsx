import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { selectFilter, setFilter } from '../../redux/filterSlice';

const SearchBox = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={s.searchBoxWrap}>
      <label className={s.label} htmlFor="search">
        <span className={s.labelText}>Find contacts by name</span>
        <input
          className={s.input}
          onChange={handleChange}
          id="search"
          type="search"
          value={filter}
          placeholder="Enter search value..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
