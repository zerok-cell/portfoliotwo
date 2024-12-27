import { Input } from '@mantine/core';
import {
  FieldsLogin,
  InputPropsScheme,
  LoginPropsZodType,
} from '@/types/zodTypes/inputValidatorSchema';

export function LoginField<T extends FieldsLogin>({
  form,
  lb,
  pl,
  ds,
  tp,
  nameField,
  er,
}: LoginPropsZodType<T>) {
  /**
   * `Render` field with use mantine and tanstack form `form.Field`.
   * `form`: result callback hook `useForm`
   * `lb`: label
   * `pl`: placeholder
   * `ds`:description
   * `tp`: `HTML` type input field, example `text`,`password`,`tel`,and other
   * `nameField`: name from props in form.Field. Required argument
   * `er`: use from summon error for alls fields.
   */

  const validateProps = InputPropsScheme.parse({ lb, pl, ds, tp, er });

  return (
    <form.Field name={nameField}>
      {(field: typeof form) => (
        <Input.Wrapper
          error={form.fieldInfo[nameField]?.instance?.getMeta().errors?.join('. ')}
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
}
export default LoginField;
