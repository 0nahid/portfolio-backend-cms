import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { FcGoogle } from 'react-icons/fc';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../firebase.init';

export default function Login() {
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const [data] = useAuthState(auth);
    console.log(data);
    let location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    if (data?.email) {
        return <Navigate to={from} replace={true} />
    }
    if (gLoading || gUser) {
        return <Loading />
    }

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className=" relative w-full h-full">
                <video
                    src="https://res.cloudinary.com/hashtagnahid/video/upload/q_50/v1671369271/login_nthosr.mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    
                bg-[#31313150]"
                >
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
