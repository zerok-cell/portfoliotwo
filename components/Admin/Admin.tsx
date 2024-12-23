'use client';

import {
    Admin,
    EditGuesser,
    ListGuesser,
    Resource
} from 'react-admin';
import neondbProvider from "@/lib/Providers/neodbProvider";






const AdminApp = () => (
  <Admin dataProvider={neondbProvider}>
      <Resource name="Blog" list={ListGuesser} edit={EditGuesser} recordRepresentation="blog" />


  </Admin>
);

export default AdminApp;