import { FC, FormEventHandler } from 'react';
import { Flex, Text } from '@mantine/core';
import { FormPropsSchema, FormPropsType } from '@/types/zodTypes/forms.types';

/**
 * accepts children, `children` this `Input field`, and create form with this field.
 * `dr`: direction from inside flex this form tag.
 * `tt`: This title spawn only if attr tt not undefined. Title spawn inside Text tag `mantine`
 * `js`: justify
 * `al`:align
 * `onSubmit`: this function summon by click on submit button. Default `preventDefault`.
 * `prv`: preventDefault, boolean true or false.
 */
const Form: FC<FormPropsType> = ({ children, dr, tt, js, al, onSubmit, prv }) => {


  const validateProps = FormPropsSchema.parse({ children, dr, tt, al, js, onSubmit ,prv});

    const handlerSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        validateProps.prv && e.preventDefault()
        onSubmit();
    };
  return (
    <form
      onSubmit={handlerSubmit}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        justify={validateProps.js}
        align={validateProps.al}
        gap={20}
        direction={validateProps.dr}
      >
        <Text>{validateProps.tt}</Text>
        {children}
      </Flex>
    </form>
  );
};
export default Form;
