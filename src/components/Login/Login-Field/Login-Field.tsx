import { Input } from '@mantine/core';
import {
  InputValidatorType,
  LoginProps,
  LoginPropsZod,
  LoginPropsZodType,
} from '@/types/zodTypes/inputValidator';

const LoginField = ({
  form,
  lb,
  pl,
  ds,
  tp,
  nameField,
  er,
}: LoginProps & LoginPropsZodType<InputValidatorType>) => {
  /**
   * `Render` field with use mantine and tanstack form `form.Field`.
   * `lb`: label
   * `pl`: placeholder
   * `ds`:description
   * `tp`: `HTML` type input field, example `text`,`password`,`tel`,and other
   * `name`: name from props in form.Field. Required argument
   * `er`: use from summon error for alls fields.
   */

  const validateProps = LoginPropsZod.parse({ lb, pl, ds, tp, er });

  return (
    <form.Field name={nameField}>
      {(field) => (
        <Input.Wrapper
          error={
            form.fieldInfo[nameField]?.instance?.getMeta().isDirty &&
            form.fieldInfo[nameField]?.instance?.getMeta().errors?.join('. ')
          }
          w="100%"
          onBlur={field.handleBlur}
          label={validateProps.lb}
          description={validateProps.ds}
        >
          <Input
            error={validateProps.er}
            type={validateProps.tp}
            onChange={(e) => {
              field.handleChange(e.target.value);
            }}
            placeholder={validateProps.pl}
            value={field.state.value}
          />
        </Input.Wrapper>
      )}
    </form.Field>
  );
};
export default LoginField;
