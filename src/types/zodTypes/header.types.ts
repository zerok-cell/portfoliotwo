import { z } from 'zod';

const AnchorItemSchema = z.object({
  src: z.string().nonempty(), // Проверка, что src это непустая строка
  icon: z.any(), // Тут может быть любой React элемент
  text: z.string().nonempty(), // Проверка, что text это непустая строка
});

export const AnchorPropsSchema = z.array(AnchorItemSchema);

export type AnchorPropsType = z.infer<typeof AnchorPropsSchema>



