import React, {useState, useEffect, useRef} from 'react'
import {Video} from '../types.dev'
import {NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import {BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'


interface IProps {
    post: Video
}

export const VideoCard: NextPage<IProps> = ({post}) => {

    const [isHover, setIsHover] = useState(false)
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb6'>
        {/* // wrapper */}
        <div>
            {/* can be reformatted to be a card wrapper component */}
            <div className='flex gap-3 p-3 cursor-pointer font-semibold rounded'>
                {/* profile photo */}
                <div className='md:w-16 md:h-16 w-10 h-10'>
                    <Link href='/'>
                        <Image
                        height={62}
                        width={62}
                        src={post.postedBy.image}
                        className='rounded-full'
                        alt='profile photo'
                        layout='responsive'
                        />
                    </Link>
                </div>

                {/* render the username who posted this video */}
                <div>
                    <Link href='/'>
                        <div className='flex items-center gap-2'>
                            <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                                {post.postedBy.userName}
                                <GoVerified className='text-blue-400 text-md'/>
                            </p>
                            <p className='capitalize font-medium hidden md:block text-xs text-gray-500'>
                                {post.postedBy.userName}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* create the video */}
        <div className="lg:ml-20 flex gap-4 relative">
            <div className='rounded-3xl'
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}>
                <Link href='/'>
                    <video 
                    src={post.video.asset.url}
                    loop
                    className='md:h-[400px] lg:w[600px] h-[300px] lg:h-[530px] w-[200px]'
                    >

                    </video>
                </Link>

                {/* if we are hovering on the video, we want to show mute mute and volume buttons */}
            </div>
        </div>
    </div>
  )
}
