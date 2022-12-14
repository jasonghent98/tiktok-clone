import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import "tailwindcss/tailwind.css"
import App from "./app";
import axios from "axios";
import { Video } from "../types.dev";

// our props returned will be an array of videos
interface IProps {
    videos: Video[]
}

const Home = ({videos} : IProps) => {
    return (
        <div>
            <Head>
                <title>TikTok Clone</title>
            </Head>
            <App videos={videos}/>
        </div>
    )
}

export const getServerSideProps = async () => {
    const {data} = await axios.get(`http://localhost:3000/api/post`)
    return {
        props: {
            videos: data
        }
    }
}

export default Home