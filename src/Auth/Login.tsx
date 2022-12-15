import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import loginVideo from './login.mp4';

export default function Login() {
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            toast.success(`Welcome Back, ${auth?.currentUser?.displayName}`, {
                position: "top-center",
                style: {
                    background: "#333",
                    color: "#fff",
                },

            })
            navigate('/dashboard');
        }
    }, [from, user, navigate])

    if (user?.email) {
        navigate('/dashboard');
    }

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className=" relative w-full h-full">
                <video
                    src={loginVideo}
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-[#31313150]">
                    <div className="shadow-2xl">
                        <button
                            onClick={() => signInWithGoogle()}
                            className="text-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        >
                            <FcGoogle className="mr-4" /> Sign in with google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
