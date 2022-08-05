import PropTypes from 'prop-types';
import { useDeleteContatcMutation } from 'redux/contactsApi';
import { Button } from 'styles/Button.styled';

export const Contact = ({ name, number, id }) => {
  const [deleteContactc, { isLoading }] = useDeleteContatcMutation();

  return (
    <li>
      {name}: {number}
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContactc(id)}
      >
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
