import loginImg from '../../../assets/others/authentication2.png'
import loginPng from '../../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import {  useEffect,  useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { login } = UseAuth()

    const from = location.state?.from?.pathname || "/";



    const [disabled, setDisabled] = useState(true)

    


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])



    






    const handleLogin = e => {

        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login SuccessFully",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                    },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                    }
                });
                navigate(from, { replace: true });


            })
            .catch(error => console.log(error))
    }


    const handleValidateCaptcha = (e) => {


        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {

            setDisabled(true)
        }

    }

    return (
        <div style={{
            backgroundImage: `url(${loginPng})`
        }} className="hero min-h-screen  ">

            <div>

                <h1 className='text-center text-3xl font-bold'>Login Now!</h1>

                <div className="hero-content ">


                    <div className="text-center w-1/2">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card   w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type your captcha" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" value="Login" className="btn" style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} />
                            </div>
                            <p className='text-center'>New here?<Link style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} to={'/signUp'}> Create a New Account</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;