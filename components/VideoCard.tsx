import React, {useState, useEffect, useRef} from 'react'
import {Video} from '../types.dev'
import {NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {HiVolumeUp, HIVolumeOff} from 'react-icons/hi'
import {BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'


interface IProps {
    post: Video
}

export const VideoCard: NextPage<IProps> = ({post}) => {
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb6'>
        {/* // wrapper */}
        <div>
            <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
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

            </div>
        </div>
    </div>
  )
}
