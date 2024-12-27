import { z } from 'zod';

export const InputValidatorSchema = z
  .object({
    name: z.string().nonempty('The field is empty'),
    password: z
      .string()
      .regex(/^\S*$/, 'The string must not contain spaces')
      .nonempty('The field is empty'),
  })
  .strict();

export const InputCreateAdminSchema = z.object({
  title:z.string().nonempty().min(1),
  content:z.string().nonempty().min(10),
})

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



export const InputPropsScheme = z.object({
  /**
   * Schema from validation input field.
   */
  lb: z.string().nonempty().optional(),
  ds: z.string().nonempty().optional(),
  pl: z.string().nonempty().optional(),
  tp: z.enum(inputTypes),
  er: z.string().optional(),
});

export type FieldsLogin = Record<string, any>;

export type LoginPropsZodType<TFields extends FieldsLogin> = {
  form: any;
  nameField: keyof TFields;
} & z.infer<typeof InputPropsScheme>;

export type InputCreateAdminType = z.infer<typeof InputCreateAdminSchema>;
export type InputValidatorType = z.infer<typeof InputValidatorSchema>;
