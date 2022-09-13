import React, {useEffect, useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
import { Discover } from './Discover'
import { Footer } from './Footer'
import { SuggestedAccounts } from './SuggestedAccounts'

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const userProfile = false

  useEffect(() => console.log(showSidebar), [showSidebar])

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded'
  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl"
            onClick={() => setShowSidebar(prevState => !prevState)}
      >
      {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>

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
          {/* check if user is logged in to render 'login' page or 'go to profile' */}
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400 '>Log in to like and comment on videos</p>
              <div className='pr-4'>
                {/* requires a clientid, key to generate to login. also takes onSuccess handler, onFailure*/}
                {/* <GoogleLogin 
                  clientId=''
                  render={renderProps =>  
                      <button 
                          className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997]'
                          onClick={renderProps.onClick} 
                          disabled={renderProps.disabled}>
                       Log in
                      </button> 
                  }
                  onSuccess={() => {}}
                  onFailure={() => {}}
                /> */}
              </div>
            </div>
          )} 

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>   
      )}
    </div>

  )
}

export default Sidebar
