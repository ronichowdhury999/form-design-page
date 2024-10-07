import './Login.css'
import { Link } from 'react-router-dom';
const Registration = () => {
    const handelRegistration = e => {
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div className='items-cente justify-center flex h-[100vh]'>
            <div className="w-[500px] h-screen mx-auto px-4 py-2 ">
                <h1 className="text-4xl text-center"><span className="font-bold text-blue-500">f</span>acebook</h1>
                <form onSubmit={handelRegistration} className="form-container border px-6 pt-4  bg-opacity-100 shadow-lg rounded-lg  mt-4  bg-white text-black">
                    <div className="mb-4">
                        <h4>Name</h4>
                        <input name="name" className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="name" placeholder="Your name" />
                    </div>
                    <div className="mb-4">
                        <h4>Email</h4>
                        <input name="email" className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="email" placeholder="Email address or phone number" />
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input name="password" className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="password" placeholder="Password" />
                    </div>
                    <div className="text-center mt-4 py-2 text-white font-bold text-xl rounded-lg bg-blue-600 w-full cursor-pointer">
                        <button type='submit'>Registration</button>
                    </div>

                    {/* optional part */}
                    <div className='flex items-center justify-center gap-4'>
                        <div className="text-center mt-4">
                            <button className="text-blue-600 cursor-pointer">Forgotten password?</button>
                        </div>
                        <span className='border border-b-2' />
                        <div className="text-center mt-4">
                            <Link to={'/login'} className="text-black hover:text-blue-400 cursor-pointer">Login</Link>
                        </div>
                    </div>
                    <div className="border border-b-1 mt-4" />
                    {/* <div className="my-6 text-center ">
                        <button className="py-3 cursor-pointer px-4 bg-green-600 rounded-lg text-white font-bold">Create new account</button>
                    </div> */}
                </form>
                <div className="mt-4 text-center text-sm text-gray-600 font-serif">
                    <p>Create by Roni chowdhury <span className="border border-gray-500 border-r-1  mx-2" /> <a target="black" href="https://www.facebook.com/i.mdroni"><span className="underline text-blue-500">Profile visit</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Registration