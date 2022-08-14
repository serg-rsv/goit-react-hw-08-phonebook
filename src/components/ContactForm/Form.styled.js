import styled from 'styled-components';

const Form = styled.form`
  width: 300px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid black;

  label {
    display: flex;
    flex-direction: column;

    input {
      width: min-content;
      margin-top: 8px;
    }
  }
`;

export { Form };
