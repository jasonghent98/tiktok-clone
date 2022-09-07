import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import {AiOutlineLogout} from 'react-icons/ai'
import {IoMdAdd} from 'react-icons/io'

export const Navbar = () => {
  return (
    <div>
      <Link>
        <div>
          <Image 
          className='cursor-pointer'
          src={}
          ></Image>
        </div>
      </Link>
    </div>
  )
}

export default Navbar