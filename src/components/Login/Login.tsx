'use client';

import { useState } from 'react';
import { IconCrown } from '@tabler/icons-react';
import { formOptions } from '@tanstack/form-core';
import { useForm } from '@tanstack/react-form';
import axios from 'axios';
import { Flex, Title } from '@mantine/core';
import SubmitButton from '@/components/Buttons/Submit/SubmitButton';
import LoginField from '@/components/Login/Login-Field/Login-Field';
import { InputValidator, InputValidatorType } from '@/types/zodTypes/inputValidator';
import { chakra } from '~/public/fonts';

const Login = () => {
  const [er, setEr] = useState('');
  const formOpts = formOptions<InputValidatorType>({
    defaultValues: {
      name: '',
      password: '',
    },
    validators: {
      onChange: InputValidator,
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      try {
        await axios.post(
          '/api/login',
          {
            password: value.password,
            username: value.name,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (err) {
        setEr('Failed to login');
      }
    },
  });

  return (
    <form
      // ref={scope}

      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      // onSubmit={handlerLogin}
    >
      <Flex gap={50} h="100vh" w="100%" direction="column" justify="center" align="center">
        <Title className={`${chakra.className}`}>
          <IconCrown /> Admin Panel{' '}
        </Title>

        {/*<InputControlProvider>*/}

        <Flex direction="column" gap={50} justify="center" align="center">
          <LoginField<InputValidatorType>
            er={er}
            nameField="name"
            pl="Username"
            ds="Here your username"
            tp="text"
            lb="Hello admin"
            form={form}
          />
          <LoginField<InputValidatorType>
            nameField="password"
            pl="Password"
            ds="Yep, your password is here. I dont watch. Honestly"
            tp="password"
            form={form}
          />

          {/*</InputControlProvider>*/}
          <SubmitButton insideText="Submit" />
        </Flex>
      </Flex>
    </form>
  );
};

export default Login;
