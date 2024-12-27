import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import { FormPropsSchema, FormPropsType } from '@/types/zodTypes/forms.types';

const Form: FC<FormPropsType> = ({ children, dr, tt, js, al }) => {
  /**
   * accepts children, `children` this `Input field`, and create form with this field.
   * `dr`: direction from inside flex this form tag.
   * `tt`: This title spawn only if attr tt not undefined. Title spawn inside Text tag `mantine`
   */
  const validateProps = FormPropsSchema.parse({ children, dr, tt, al,js });
  return (
    <form
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex justify={validateProps.js} align={validateProps.al} gap={20} direction={validateProps.dr}>
        <Text>{validateProps.tt}</Text>
        {children}
      </Flex>
    </form>
  );
};
export default Form;
