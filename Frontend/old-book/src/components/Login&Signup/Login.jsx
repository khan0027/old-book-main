import React from 'react'

const Login = () => {
  return (

    <div className='m-20' >
    <div className=' absolute h-104 w-104 rounded-md bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 z-0 blur-md ' >

    </div>

    <div className=' relative ml-2 mt-2  h-100 w-100 flex flex-col justify-center items-center z-10 bg-black rounded-xl ' >
            <form action="#" className='flex flex-col gap-5 items-center ' >

                <label className='text-2xl text-white font-semibold' >Login</label>
                <input type="email" name="email" id="" placeholder='Enter Email' className='bg-white p-2 rounded-md w-70 ' />
                <input type="password" name="password" id="" placeholder='Enter Password'className='bg-white p-2 rounded-md w-70 ' />
                <a href="" className='text-white hover:underline ' >Forgot Password ?</a>
                <button type='submit' className='bg-white p-2 rounded-md w-70 font-semibold hover:font-bold ' >
                    Login
                </button>
            </form>
    </div>

    </div>
  )
}

export default Login
