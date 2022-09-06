import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from 'react';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <div className="text-3xl font-bold underline red-400">test 123!</div>
        </div>
    )
}

export default Home