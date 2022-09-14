import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import { client } from '../utils/client'
import useAuthStore from '../store/authStore'

const Upload = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [videoAsset, setVideoAsset] = useState(null)
  return (
    <div className='flex w-full h-full'>
        <div className='bg-white rounded-lg'>
            <div>
                <div>
                    <p className='text-2xl font-bold'>Upload Video</p>
                    <p className='text-md text-gray-400'>Post a video to your account</p>
                </div>
                <div className='rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] cursor-pointer hover:border-red-300 hover:bg-gray-100'>
                    {isLoading ? (
                        <div>Uploading...</div>
                    )
                    : 
                    // if state isnt loading, we check to see if we have a video asset
                    <div>
                        {videoAsset ? (
                            <div>

                            </div>
                        )
                        :
                            <div className='cursor-pointer'>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='font-bold text-xl'>
                                            <FaCloudUploadAlt 
                                                className='text-gray-300 text-6xl'
                                            />
                                        </p>
                                        <p className="text-xl font-semibold">
                                            Upload Video
                                        </p>
                                    </div>
                                    <p className='text-sm leading-10 text-gray-400 text-center mt-10'>
                                       MP4 or WAV <br/>
                                       Up to 10 minutes <br/>
                                       Less than 2GB <br/>


                                    </p>
                                    <p className='bg-[#F51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                                        Select File
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload