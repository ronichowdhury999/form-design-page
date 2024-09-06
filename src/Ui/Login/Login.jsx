// import { FaFacebook } from "react-icons/fa6";
import { useState } from 'react';
import './Login.css'
import { Navigate, } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState('')
    const handelSubmit = e => {
        e.preventDefault();
        console.log('email', email, password);

        if (email || password) {
            setShow(email, password)

        }
        else {
            return alert('Please enter your email or password')
        }
        if(show){
            <Navigate to={'/home'}/>
        }else{
            <Navigate to={'/'}/>
        }
    }
    console.log('show', show);
    return (
        <div className='items-cente justify-center flex h-[100vh]'>
            <div className="w-[500px] h-screen mx-auto px-4 py-2 ">
                <h1 className="text-4xl text-center"><span className="font-bold text-blue-500">f</span>acebook</h1>
                <form onSubmit={handelSubmit} className="form-container border px-6 pt-4  bg-opacity-100 shadow-lg rounded-lg  mt-4  bg-white text-black">

                    <div className='flex items-center justify-center gap-4'>
                        <p className='text-black text-center'>{show}</p>
                        <div>
                            {show && <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/128/17707/17707926.png'></img>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h4 className=''>Email</h4>
                        <input onChange={e => (setEmail(e.target.value))} className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="email" name="email" placeholder="Email address or phone number" />
                    </div>
                    <div>
                        <h4 className=''>Password</h4>
                        <input onChange={e => (setPassword(e.target.value))} className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="text-center mt-4 py-2 text-white font-bold text-xl rounded-lg bg-blue-600 w-full cursor-pointer">
                        <button>Submit</button>
                    </div>
                    <div className="text-center mt-4">
                        <button className="text-blue-600 cursor-pointer">Forgotten password?</button>
                    </div>
                    <div className="border border-b-1 mt-4" />
                    <div className="my-6 text-center ">
                        <button className="py-3 cursor-pointer px-4 bg-green-600 rounded-lg text-white font-bold">Create new account</button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm text-gray-600 font-serif">
                    <p className='text-white'>Create by Roni chowdhury <span className="border border-gray-500 border-r-1  mx-2" /> <a target="black" href="https://www.facebook.com/i.mdroni"><span className="underline text-blue-500">Profile visit</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Login