import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { HiChartBar } from 'react-icons/hi'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { TbMailCog } from 'react-icons/tb'
import { BsCreditCard } from 'react-icons/bs'
import { BsFillBellFill } from 'react-icons/bs'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'


const Sidebar = () => {
    return (
        <div className='bg-sky-700 flex-none items-center w-14 sm:w-20 h-screen'>
            <div className='h-20 items-center  flex'>
                <AiTwotoneHome size={35} className="text-sky-200 fixed left-3 sm:left-6 " />
            </div>
            <div className='fixed left-3 sm:left-3 top-[100px]'>

                <HiChartBar size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />

                <HiOutlineDocumentSearch size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />

                <TbMailCog size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />

                <BsCreditCard size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />

                <BsFillBellFill size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />
            </div>

            <div className='fixed bottom-4 left-3 sm:left-6'>
                <a href="#top">
                    <AiOutlineArrowUp
                        size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />
                </a>

                <LiaExternalLinkAltSolid
                    size={35} className="bg-sky-200 p-2 rounded-lg mb-4 text-neutral-100 bg-opacity-20" />
            </div>
        </div>
    )
}

export default Sidebar
