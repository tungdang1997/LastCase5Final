import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {login, register} from "../services/userService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (value)=>{
        dispatch(login(value)).then((state)=>{
            if (state.payload.data !== "User not found" && state.payload.data !== "Wrong password"){
                swal("Đăng nhập thành công!", {
                    icon: "success",
                }).then(()=>{return  navigate('/home')});

            }else {
                swal("Sai mật khẩu hoặc tài khoản!", {
                });
                return  navigate('/')
            }
        })
    }
    return (
        <div className="row">
            <div className="col-md-6 mx-auto p-0">
                <div className="card">
                    <div className="login-box">
                        <div className="login-snip">
                            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1"
                                                                                                          className="tab">Login</label>
                            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2"
                                                                                                  className="tab">Sign
                            Up</label>
                            <div className="login-space">


                                <div className="login">

                                    <Formik initialValues={{username: '', password: ''}} onSubmit={(values)=>{

                                        handleLogin(values)
                                    }}>
                                        <Form>

                                            <div className="group">
                                                <label htmlFor="user" className="label">Username</label>
                                                <Field id="user" type="text" className="input"
                                                       placeholder="Enter your username" name={'username'}/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Password</label>
                                                <Field id="pass" type="password" className="input" data-type="password"
                                                       placeholder="Enter your password" name={'password'}/>
                                            </div>
                                            <div className="group">
                                                <Field id="check" type="checkbox" className="check" checked/>
                                                <label htmlFor="check"><span className="icon"></span> Keep me Signed
                                                    in</label>
                                            </div>
                                            <div className="group">
                                                <Field type="submit" className="button" value="Sign In"/>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="foot">
                                                <a href="#">Forgot Password?</a>
                                            </div>


                                        </Form>

                                    </Formik>


                                </div>



                                <div className="sign-up-form">

                                    <Formik initialValues={{username: '', password: ''}} onSubmit={(values)=>{

                                        handleLogin(values)
                                    }}>
                                        <Form>
                                            <div className="group">
                                                <label htmlFor="user" className="label">Username</label>
                                                <Field id="user" type="text" className="input"
                                                       placeholder="Create your Username" name={'username'}/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Password</label>
                                                <Field id="pass" type="password" className="input" data-type="password"
                                                       placeholder="Create your password" name={'password'}/>
                                            </div>

                                            <br/>

                                            <div className="group">
                                                <Field type="submit" className="button" value="Sign Up"/>
                                            </div>
                                            <br/>
                                            <div className="hr"></div>
                                            <div className="foot">
                                                <label htmlFor="tab-1">Already Member?</label>
                                            </div>


                                        </Form>

                                    </Formik>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}