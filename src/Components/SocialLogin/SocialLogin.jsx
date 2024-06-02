import { FaGoogle } from "react-icons/fa6";
import UseAuth from "../../Hooks/UseAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = UseAuth()

    const navigate = useNavigate()

    const axiosPublic =usePublicAxios()

    const handleGoogleSIgnIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                  navigate('/')
            })
          
        })
    }
    return (
        <div className=" flex justify-center flex-col items-center space-y-4">
            <h2 className="text-[#444] text-2xl">Or sign in with</h2>
            <button onClick={handleGoogleSIgnIn}>
                <FaGoogle className=" border-2 rounded-full p-4 text-6xl" ></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;