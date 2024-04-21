import { changeFilter, selectedName } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedName);

  return (
    <div className={s.wrapper_search}>
      <label>
        Find contact by name or number
        <input
          onChange={e => dispatch(changeFilter(e.target.value))}
          value={filter}
          type="text"
          placeholder="Enter smth"
        />
      </label>
    </div>
  );
};

export default SearchBox;
