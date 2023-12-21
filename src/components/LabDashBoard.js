import React from 'react'
import Navbar from './Navbar'

function LabDashBoard() {
    return (
        <>
            <Navbar />
            <div className='w-full h-full p-3  flex  items-start justify-center'>
                <div className='w-[10%] border-[1px] p-1 border-green flex flex-col gap-2 rounded-[0.3125rem] h-[32rem] pt-10'>
                    <h1 className='p-[0.65rem] bg-light-green border-[1px] border-dark-green rounded-[0.3125rem]'>Orders</h1>
                    <h1 className='p-[0.65rem] bg-light-green border-[1px] border-dark-green rounded-[0.3125rem]'>Billing</h1>
                </div>
                <div className=' p-2 pt-10'>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700]'>ID</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700] w-[10.625rem]'>Patient Name</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700]'>Reg/Lab no</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700]  w-[10.625rem]'>Venue</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700] w-[6.875rem]'>Ref by</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700]'>Bill</h1>
                        <h1 className='bg-light-grey p-[0.62rem] text-[1rem] font-[700]'>Actions</h1>
                        <input className='placeholder:text-black placeholder:text-[1rem] placeholder:font-[700] border-[1px] border-black p-[0.62rem] rounded-[0.3125rem]' type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LabDashBoard