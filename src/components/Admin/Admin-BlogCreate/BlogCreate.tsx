import { formOptions } from '@tanstack/form-core';
import { useForm } from '@tanstack/react-form';
import SubmitButton from '@/components/Buttons/Submit/SubmitButton';
import Form from '@/components/Forms/Form';
import LoginField from '@/components/LoginField/LoginField';
import {
  InputCreateAdminSchema,
  InputCreateAdminType,
} from '@/types/zodTypes/inputValidatorSchema';
import {Prisma} from "@prisma/client";
import axios from "axios";

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
      const {content, title}:Prisma.BlogCreateInput = value.value
      console.log(content, title);
      await axios.post('api/posts/create/', {content,title})

    },
  });

  return (
    <Form prv onSubmit={form.handleSubmit} dr="column" tt="Create Blog" js="center" al="center">
      <LoginField<InputCreateAdminType> form={form} pl="Title" nameField="title" tp="text" />
      <LoginField<InputCreateAdminType> form={form} pl="Content" nameField="content" tp="text" />
      <SubmitButton insideText="Create" />
    </Form>
  );
};

export default BlogCreate;
