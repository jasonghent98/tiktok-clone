import React, {useEffect, useState} from 'react'
import Sidebar  from '../components/Sidebar'
import Navbar  from '../components/Navbar'
import { AiFillWeiboSquare } from 'react-icons/ai'
import { Video } from '../types.dev'
import {VideoCard} from '../components/VideoCard'
import {NoResults} from '../components/NoResults'

interface IProps {
    videos: Video[]
}

const App = ({videos}: IProps) => {
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
            <div className='flex flex-col gap-10 videos h-full'>
                {videos.length ? (
                    videos.map((video: Video) => (
                        <VideoCard post={video} key={video._id}/>
                    ))
                ) : (
                    <NoResults text={'No Videos'}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default App
