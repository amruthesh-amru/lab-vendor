import React from 'react'

function Navbar() {
    return (
        <>
            <div className=' w-full flex items-center justify-center  p-4'>
                <div className=' flex flex-col items-start justify-start   text-midnight text-[1.25rem] font-[700]'>
                    <h1>Doctor|</h1>
                    <h1>|app</h1>
                </div>
                <div className=' w-full flex flex-col items-center justify-center pt-5'>
                    <h1 className='text-green text-[1.5rem] font-[600] '>LAB</h1>
                    <h2 className='text-[0.75rem] font-[600] tracking-[1.06rem] text-blue'>DASHBOARD</h2>
                </div>
            </div>
        </>
    )
}

export default Navbar