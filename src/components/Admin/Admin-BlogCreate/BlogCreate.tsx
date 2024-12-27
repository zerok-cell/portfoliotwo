import { formOptions } from '@tanstack/form-core';
import { useForm } from '@tanstack/react-form';
import Form from '@/components/Forms/Form';
import LoginField from '@/components/LoginField/LoginField';
import {
  InputCreateAdminSchema,
  InputCreateAdminType,
} from '@/types/zodTypes/inputValidatorSchema';
import SubmitButton from "@/components/Buttons/Submit/SubmitButton";

const BlogCreate = () => {
  const options = formOptions<InputCreateAdminType>({
    defaultValues: {
      title: '',
      content: '',
    },
    validators: {
      onSubmit: InputCreateAdminSchema,
    },
  });

  const form = useForm({
    ...options,
    onSubmit: async (value) => {
      console.log(value);
    },
  });

  return (
    <Form dr="column" tt="Create Blog" js={'center'} al={'center'}>
      <LoginField<InputCreateAdminType> form={form} pl='Title' nameField="title" tp="text" />
      <LoginField<InputCreateAdminType> form={form} pl='Content' nameField="title" tp="text" />
      <SubmitButton insideText={'Create'}/>
    </Form>
  );
};

export default BlogCreate;
