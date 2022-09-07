import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import "tailwindcss/tailwind.css"
import App from "./app";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <div className="text-xl text-blue-400">testing tailwind</div>
            <App/>
        </div>
    )
}

export default Home