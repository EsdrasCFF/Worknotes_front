import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button" 
        onClick={onClick}
        className={(isNew ? 'button-add' : 'button-delete')} >
<<<<<<< HEAD
        {(isNew ? <FiPlus /> : <FiX /> )}
=======
        { (isNew ? <FiPlus /> : <FiX /> )}
>>>>>>> 9bdaa7bac6147b9677410dcc0fdd6d36175e3580
      </button>
    </Container>
  );
}