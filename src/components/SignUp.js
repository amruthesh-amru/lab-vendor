import React from 'react'

function SignUp() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-around items-center">
                <div className=' w-full  text-midnight text-[1.25rem] font-[700] p-5'>
                    <h1>Doctor|</h1>
                    <h1>|app</h1>
                </div>
                <div>
                    <div className='w-[36.5rem] bg-midnight rounded-lg text-center p-[2.5rem] shadow-midnight-500/50 shadow-lg '>
                        <h1 className='text-green text-[1.5rem] font-[600]  mb-[3rem]'>ADMIN LOGIN <br />
                            <span className='text-[0.75rem] font-[600] tracking-[1.06rem] text-blue' >LAB</span>
                        </h1>
                        <form className='w-full'>
                            <div >
                                <input className='w-full p-2 rounded-md mb-4 border-2 border-green' type="text" placeholder='First Name' /> <br />
                                <input className='w-full p-2 rounded-md mb-4 border-2 border-green' type="text" placeholder='Last Name' /> <br />
                                <input className='w-full p-2 rounded-md mb-4 border-2 border-green' type="text" placeholder='Email' /> <br />
                                <input className='w-full p-2 rounded-md mb-4 border-2 border-green' type="text" placeholder='DOB' /> <br />
                                <input className='w-full p-2 rounded-md mb-4 border-2 border-green' type="text" placeholder='Entry field' /> <br />

                            </div>
                        </form>
                    </div>
                    {/* <p className='text-dark-blue text-[0.75rem] font-[600] underline mt-[0.69rem] ml-[2.5rem]'>Forgot ID/Password?</p> */}
                </div>
                <button className='bg-blue text-white p-2 rounded-lg'>Login</button>
                {/* <div className='w-full  flex items-end justify-center'>
                <img className='h-[15.1rem] w-full' src={doctor_image} alt="" />
            </div> */}

            </div >
        </>
    )
}

export default SignUp