import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import { client } from '../utils/client'
import { SanityAssetDocument } from '@sanity/client'
import useAuthStore from '../store/authStore'

const Upload = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>()
    const [wrongFileType, setWrongFileType] = useState(false)

    const uploadVideo = async (e: any) => {
        const selectedFile = e.target.files[0]
        const fileTypes = ['video/mp4', 'video/wav']
        if (e.cancelable) return 
        // the file type is supported
        if (fileTypes.includes(selectedFile.type)) {
            client.assets.upload('file', selectedFile, {
                contentType: selectedFile.type,
                filename: selectedFile.name
            }).then(data => { // once the promise, resolves
                setVideoAsset(data)
                setIsLoading(false)
                console.log(data)
            }).catch(err => console.log(err))
            return
        } 
        // not supported
        setIsLoading(false)
        setWrongFileType(true)
    }
  return (
    <div className='flex w-full h-full justify-center absolute left-0 top-[60px] md:top-20'>
        <div className='bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center pt-6 p-6'>
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
                                <video 
                                    src={videoAsset.url}
                                    loop
                                    controls
                                    className='rounded-xl h-[450px] mt-16 bg-black'
                                    >

                                </video>
                            </div>
                        )
                        :
                            <label className='cursor-pointer'>
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
                                <input 
                                    type="file" 
                                    className='w-0 h-0'
                                    name='upload-video'
                                    onChange={(e) => uploadVideo(e)}
                                />
                            </label>

                        }
                    </div>
                    }
                    {/* if video type not supported */ }
                    {wrongFileType && (
                            <p className='text-center text-red-400 font-semibold mt-4'>File type not supported</p>
                    )}
                </div>
            </div>
              {/* form for file submission */}
              <div className='flex flex-col gap-3 pb-10'>
                    test
                </div>
        </div>
    </div>
  )
}

export default Upload