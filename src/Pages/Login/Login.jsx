// import { FaFacebook } from "react-icons/fa6";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import './Login.css'
import { Link } from 'react-router-dom';
import { app } from '../../Firebase/Firebase.init';
import { useState } from 'react';
// import app from '../../Firebase/Firebase.init';
const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    // const handelLogin = e => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }


    // google sign in korar jonno
    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log('error', error.message);
            })
    }

    const handelGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // sign out korar jonno 
    const handelSignOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='items-cente justify-center flex h-[100vh]'>
            <div className="w-[500px] h-screen mx-auto px-4 py-2 ">
                <h1 className="text-4xl text-center"><span className="font-bold text-blue-500">f</span>acebook</h1>
                <form className="form-container border px-6 pt-4  bg-opacity-100 shadow-lg rounded-lg  mt-4  bg-white text-black">
                    <div className="mb-4">
                        <h4>Email</h4>
                        <input name="email" className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="email" placeholder="Email address or phone number" />
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input name="password" className="w-full mt-2 py-3 px-4 rounded-lg border text-black border-gray-200 " type="password" placeholder="Password" />
                    </div>
                    <div>{user && <p>user name : {user.displayName}</p>}</div>
                    <div className="text-center mt-4 py-2 text-white font-bold text-xl rounded-lg bg-blue-600 w-full cursor-pointer">
                        <button type='submit'>Login</button>
                    </div>
                    {/* <div className="text-center w-1/2 mt-4 py-2 text-white font-bold text-xl rounded-lg bg-green-500 cursor-pointer">
                        <button>Google</button>
                    </div> */}

                    {/* optional part */}
                    <div className='flex items-center justify-center gap-4'>
                        <div className="text-center mt-4">
                            <button className="text-blue-600 cursor-pointer">Forgotten password?</button>
                        </div>
                        <span className='border border-b-2' />
                        <div className="text-center mt-4">
                            <Link to={'/registration'} className="text-black hover:text-blue-400 cursor-pointer">Registration</Link>
                        </div>
                    </div>
                    <div className="border border-b-1 mt-4" />
                    <div className="my-6 text-center ">
                        <button className="py-3 cursor-pointer px-4 bg-green-600 rounded-lg text-white font-bold">Create new account</button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm text-gray-600 font-serif">
                    <p>Create by Roni chowdhury <span className="border border-gray-500 border-r-1  mx-2" /> <a target="black" href="https://www.facebook.com/i.mdroni"><span className="underline text-blue-500">Profile visit</span></a></p>
                    {user ?
                        <button className='btn btn-primary' onClick={handelSignOut}>Sign out</button> :
                        <div>
                            <button className='btn btn-active' onClick={handelGoogleLogin}>Google</button>
                            <button className='btn btn-active' onClick={handelGithubLogin}>Github</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login