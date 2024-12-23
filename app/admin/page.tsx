'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/components/Admin/Admin"), { ssr: false });

const Home: NextPage = () => <AdminApp />;

export default Home;