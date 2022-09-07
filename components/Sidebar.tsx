import React, {useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GoogleLogin from 'react-google-login'
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded'
  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl"
            onClick={() => setShowSidebar((prevState) => !prevState)}>

      </div>
      {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-4-2 border-gray-100 xl:border-0 p-3'>
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl ">
                  <AiFillHome />
                </p>
                <span className='text-xl hidden xl:block'>For You</span>
              </div>
              </Link>
          </div>
        </div>
      )}

        {/* check if user is logged in to render 'login' page or 'go to profile' */}

        
    </div>
  )
}

export default Sidebar
