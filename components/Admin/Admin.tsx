'use client';

import {
    Admin,
    EditGuesser,
    ListGuesser,
    Resource
} from 'react-admin';
import neondbProvider from "@/lib/Providers/neodbProvider";
import authProvider from "@/lib/Providers/authProvider";
import Login from "@/components/Login/Login";


const AdminApp = () => (
  <main>
      <Admin loginPage={Login} authProvider={authProvider} dataProvider={neondbProvider}>
          <Resource  name="Blog" list={ListGuesser} edit={EditGuesser} recordRepresentation="blog" />
      </Admin>
  </main>
);

export default AdminApp;