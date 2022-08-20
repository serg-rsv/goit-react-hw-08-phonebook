import { useSelector, useDispatch } from 'react-redux';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

import { filterItems } from '../../redux/filterAction';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <SearchIcon />
      <Input
        placeholder="Filter contacts"
        type="text"
        value={filter}
        onChange={e => dispatch(filterItems(e.target.value))}
        inputProps={{ 'aria-label': 'search' }}
      />
    </>
  );
};
