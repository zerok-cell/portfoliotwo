import { ReactFormExtendedApi } from '@tanstack/react-form';
import {z, ZodString} from 'zod';

export const InputValidator = z
  .object({
    name: z
        .string()
        .nonempty('The field is empty'),
    password: z
      .string()
      .regex(/^\S*$/, 'The string must not contain spaces')
      .nonempty('The field is empty'),
  })
  .strict();





const inputTypes = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

// type KeysInputValidator = keyof InputValidator
export const InputPropsMantine= z.object({
  /**
   * dwad
   */
  lb: z.string().nonempty().optional(),
  ds: z.string().nonempty().optional(),
  pl: z.string().nonempty().optional(),
  tp: z.enum(inputTypes),
  er: z.string().optional(),
});


// <T extends {[key:string]:string}>

export type LoginPropsZodType<T> =  {
  form: ReactFormExtendedApi<T>;
  nameField: keyof T,
}& z.infer<typeof InputPropsMantine>;


export type InputValidatorType = z.infer<typeof InputValidator>;
