import React from 'react'

const Login = () => {
  return (
    <div className=' relative ml-2 mt-2  h-100 w-100 flex flex-col justify-center items-center z-10 bg-black rounded-xl ' >
            <form action="#" className='flex flex-col gap-5 items-center border-t-4 border-t-blue-500 border-l-4 border-white ' >

                <label className='text-2xl text-white font-semibold' >Login</label>
                <input type="email" name="email" id="" placeholder='Enter Email' className='bg-white p-2 rounded-md w-70 ' />
                <input type="password" name="password" id="" placeholder='Enter Password'className='bg-white p-2 rounded-md w-70 ' />
                <a href="" className='text-white hover:underline ' >Forgot Password ?</a>
                <button type='submit' className='bg-white p-2 rounded-md w-70 font-semibold hover:font-bold ' >
                    Login
                </button>
            </form>
    </div>
  )
}

export default Login
