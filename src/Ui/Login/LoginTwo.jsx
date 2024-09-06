
import './LoginTwo.css'
const LoginTwo = () => {
    const handelSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className='items-cente justify-center flex h-[100vh]' >
            
            <div className=" w-[500px] h-screen mx-auto px-4 py-4 ">
                <h1 className="text-4xl text-center "><span className="font-bold text-blue-500">f</span>acebook</h1>
                <form onSubmit={handelSubmit} className="form-container border px-6 pt-4  shadow-lg rounded-lg  mt-8  backdrop-filter backdrop-blur-sm bg-opacity-30">
                    <div className="mb-4">
                        <h4>Email</h4>

                        <input className="w-full mt-2 py-3 px-4  border-b-2 bg-transparent  focus:outline-none focus:ring- focus:text-white focus:border-blue-600 " type="email" name="email" id="" placeholder="Email address or phone number" />
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input className="w-full mt-2 py-3 px-4 border-b-2 focus:outline-0 focus:text-white focus:border-blue-600 bg-transparent " type="password" name="password" id="" placeholder="Password" />
                    </div>
                    <div className="text-center mt-4 py-2 text-white font-bold text-xl rounded-lg bg-blue-600 w-full cursor-pointer">
                        <button>Submit</button>
                    </div>
                    <div className="text-center mt-4">
                        <button className="text-blue-600 cursor-pointer">Forgotten password?</button>
                    </div>
                    <div className="border border-b-1 mt-4" />
                    <div className="my-6 text-center ">
                        <button className="py-3 px-4 bg-green-600 rounded-lg text-white font-bold">Create new account</button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm font-serif">
                    <p>Create by Roni chowdhury <span className="border border-gray-500 border-r-1  mx-2" /> <a target="black" href="https://www.facebook.com/i.mdroni"><span className="underline text-blue-500">Profile visit</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginTwo