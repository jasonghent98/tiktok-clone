import type { AppProps } from 'next/app'
import React, {useEffect, useState} from 'react'
import Sidebar  from '../components/Sidebar'
import Navbar  from '../components/Navbar'

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

export default App
