import { ReactFormExtendedApi } from '@tanstack/react-form';
import {z} from 'zod';

export const InputValidator = z
  .object({
    name: z.string().nonempty('The field is empty'),
    password: z
      .string()
      .regex(/^\S*$/, 'The string must not contain spaces')
      .nonempty('The field is empty'),
  })
  .strict();



export interface LoginProps {
}


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
export const LoginPropsZod= z.object({
  lb: z.string().nonempty().optional(),
  ds: z.string().nonempty().optional(),
  pl: z.string().nonempty().optional(),
  tp: z.enum(inputTypes),
  er: z.string().optional(),
});


export type LoginPropsZodTypeLocal = z.infer<typeof LoginPropsZod>;


export type LoginPropsZodType<T extends {[key:string]:string}> =  {
  form: ReactFormExtendedApi<InputValidatorType>;
  nameField: keyof T,
}& LoginPropsZodTypeLocal;


export type InputValidatorType = z.infer<typeof InputValidator>;
