'use client';

import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import Login from '@/components/Login/Login';
import authProvider from '@/lib/Providers/authProvider';
import neonProvider from '@/lib/Providers/neodbProvider';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import BlogCreate from "@/components/Admin/Admin-BlogCreate/BlogCreate";

const AdminApp = () => (
  <main>
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={neonProvider}>
      <Resource name="Blog" list={ListGuesser} create={BlogCreate}  edit={EditGuesser} recordRepresentation="blog" />
        <ReactQueryDevtools initialIsOpen />
    </Admin>
  </main>
);

export default AdminApp;
