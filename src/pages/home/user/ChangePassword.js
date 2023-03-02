import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {changePassword} from "../../../services/userService";
import swal from "sweetalert";
import {Field, Form, Formik} from "formik";

export default function ChangePassword(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {idUser} = useParams()
    const handleEdit = (value)=>{
        let data = [idUser , value]
        dispatch(changePassword(data)).then((e)=>{
            if (e.payload === "User not found") {
                swal("User not found");
            } else if (e.payload === "Old password does not match") {
                swal("Old password does not match");
            } else if (e.payload === "New password is match with old password") {
                swal("New password is match with old password");
            } else {
                swal("Change Password success");
                // localStorage.clear();
                // navigate("/");
            }

        })
    }
    return(
        <>

            <div className={'row'}>

                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Change Password</h1>
                    <Formik initialValues={{
                        oldPassword: '',
                        newPassword: ''
                    }} onSubmit={(values) => {
                        handleEdit(values)
                    }} enableReinitialize={true}
                    >

                        <Form>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputUsername">Old Password: </label>
                                <Field type='password' className={'form-control'} name={'oldPassword'}/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">New Password: </label>
                                <Field type='password' className={'form-control'} name={'newPassword'}/>
                            </div>
                            <hr/>
                            <br/>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </Form>
                    </Formik>
                </div>
            </div>


            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Services
                                    </h3>
                                    <div className="subscribe-from">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your mail"/>
                                            <button type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                    <p className="sub_text">Esteem spirit temper too say adieus who direct esteem esteems
                                        luckily.</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-5 offset-xl-1">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Contact Me
                                    </h3>
                                    <ul>
                                        <li><a href="#">conbusi@support.com
                                        </a></li>
                                        <li><a href="#">+10 873 672 6782
                                        </a></li>
                                        <li><a href="#">600/D, Green road, Kings Garden NewYork-6732</a></li>
                                    </ul>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className=" fa fa-facebook "></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-youtube-play"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-7 col-md-6">
                                <p className="copy_right">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                        aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                            <div className="col-xl-5 col-md-6">
                                <div className="footer_links">
                                    <ul>
                                        <li><a href="#">home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">tracks</a></li>
                                        <li><a href="#">blog</a></li>
                                        <li><a href="#">contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}