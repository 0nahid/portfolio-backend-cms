import { FcGoogle } from 'react-icons/fc';
import loginVideo from './login.mp4';
export default function Login() {
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
                            type="button"
                            className="bg-[#FBF8F9] flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        >
                            <FcGoogle className="mr-4" /> Sign in with google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
