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
                <title>TikTok Clone</title>
            </Head>
            <App/>
        </div>
    )
}

export default Home