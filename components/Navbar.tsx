import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import {AiOutlineLogout} from 'react-icons/ai'
import {IoMdAdd} from 'react-icons/io'
import Logo from '../utils/tiktok-logo.avif'
import { getOrCreateUser } from '../utils'
import useAuthStore from '../store/authStore'

export const Navbar = () => {
  const {userProfile, addUser} = useAuthStore()

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[130px]'>
          <Image 
          className='cursor-pointer'
          src={Logo}
          alt='tiktik'
          ></Image>
        </div>
      </Link>

      {/*  */}
      <div>Search</div>

        <div>
          {/* check if we have a user logged in  */}
          {userProfile ? (
            <div className='flex gap-5 md:gap-10'>
              <Link href='/upload'>
                <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                  <IoMdAdd className='text-xl'/>
                  <span className='hidden md:block'>Upload</span>
                </button>
              </Link>
              {userProfile.image && (
                 <Link href='/'>
                   <Image
                    height={40}
                    width={40}
                    src={userProfile.image}
                    className='rounded-full cursor-pointer'
                    alt='profile photo'
                    layout='responsive'
                 />
                 </Link>
              )}
              <button type='button' className='px-2'>
                <AiOutlineLogout color='red' fontSize={21}/>
              </button>
            </div>
          ): 
          <GoogleLogin 
            onSuccess={res => getOrCreateUser(res, addUser)} 
            onError={() => console.log('error')}
          />
          }
        </div>
    </div>
  )
}

export default Navbar