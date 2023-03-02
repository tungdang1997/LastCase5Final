import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import swal from "sweetalert";
import {Field, Form, Formik} from "formik";
import {register} from "../services/userService";

export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (value) => {
        dispatch(register(value)).then(() => {
            console.log(value)
                swal("Đăng ký thành công!", {
                    icon: "success",
                }).then(() => {
                    return navigate('/')
                });

        })
    }
    return (
        <div className={'row'}>

            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Register</h1>
                <Formik initialValues={{username: '', password: '', avatar: ''}} onSubmit={(values) => {

                    handleRegister(values)
                }}>
                    <Form>
                        <div className="ml-3 form-group">
                            <label htmlFor="exampleInputUsername">User Name: </label>
                            <Field type='text' className={'form-control'} name={'username'}/>
                        </div>
                        <div className="ml-3 form-group">
                            <label htmlFor="exampleInputPassword">Password: </label>
                            <Field type='text' className={'form-control'} name={'password'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button type="submit" className="btn btn-primary" style={{marginLeft: 10}}>
                            <Link to={'/'} style={{textDecoration: 'none', color: 'red'}}>Login</Link>
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}