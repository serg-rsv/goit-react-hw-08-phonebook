import { useSelector, useDispatch } from 'react-redux';
import Input from '@mui/material/Input';

import { filterItems } from '../../redux/filterAction';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        placeholder="Filter contacts"
        type="text"
        value={filter}
        onChange={e => dispatch(filterItems(e.target.value))}
      />
    </>
  );
};
