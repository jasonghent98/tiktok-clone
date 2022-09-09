import type { AppProps } from 'next/app'
import React, {useEffect, useState} from 'react'
import Sidebar  from '../components/Sidebar'
import Navbar  from '../components/Navbar'
import axios from 'axios'
import { AiFillWeiboSquare } from 'react-icons/ai'

const App = () => {
    const [isSSr, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSr) return null;
    
  return (
    <div>
        <Navbar/>
        <div className="flex gap-6 md:gap-20">
            <div className="h-[92vh overflow-hidden xl:hover:overflow-auto">
                <Sidebar/>
            </div>
            <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 '>
                {/* <Component {...pageProps} /> */}
            </div>
        </div>
    </div>
  )
}

// should use this if the data must be fetched at request time (fetching videos)
export const getServerSideProps = () => {
    const res = axios.get(`http://localhost:3000/api/post`)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    return {
        props: {

        }
    }
}

export default App
