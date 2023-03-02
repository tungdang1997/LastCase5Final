import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Field, Formik} from "formik";
import {searchSong} from "../services/songService";
import {useState} from "react";


export default function Navbar() {

    const user = useSelector(state => {
        return state.user.user;
    })


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const song = useSelector(state => {
        return state.song.songs
    })


    const [state1, setState1] = useState('')


    const handleSearch = (name) => {
        dispatch(searchSong(name)).then(() => {
        })
    }


    return (
        <body>


        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2">
                                    <div className="logo">
                                        <a href="../../public/index.html">
                                            <img src="../../public/img/logo.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="main-menu  d-none d-lg-block" >
                                        <nav>

                                            <ul id="navigation">

                                                <li> <input className="form-control me-2" type="search"
                                                       placeholder="Search" aria-label="Search" value={state1}
                                                       onChange={(event) => {
                                                           setState1(event.target.value)


                                                       }}/></li>
                                                    <li><button className="btn btn-outline-success"
                                                        type="submit" onClick={async () => {

                                                    await handleSearch(state1)

                                                    setState1('')

                                                }}>Search
                                                </button></li>
                                                <br/>
                                                <br/>

                                                <li><Link className="active" href="#" to="">home</Link></li>
                                                {/*<li><Link href="#" to="add-album">Add Album</Link></li>*/}
                                                <li><a href="#">Song <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link href="#" to="add-song">Add song</Link></li>
                                                        <li><Link href="#" to="my-song">My song</Link></li>

                                                    </ul>
                                                </li>
                                                <li><a href="#">Album <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link href="#" to="add-album">Add album</Link></li>
                                                        <li><Link href="#" to="list-album">My album</Link></li>

                                                    </ul>
                                                </li>
                                                <li><a href="#">PlayList <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link href="#" to={'add-play-list'}>Add PlayList</Link></li>
                                                        <li><Link href="#" to={'play-lists'}>My PlayList</Link></li>

                                                    </ul>
                                                </li>
                                                <li><a href="#">Tài Khoản: {user !== undefined && user.username}</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="social_icon text-right">
                                        <ul>
                                            <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                            <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-sign-out-alt" onClick={() => {
                                                localStorage.clear();
                                                navigate('/')
                                            }}></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <button onClick={()=>{*/}
                                {/*        localStorage.clear();*/}
                                {/*        navigate('/')*/}
                                {/*    }}> Log Out </button>*/}
                                {/*</div>*/}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="slider_area">
            <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text text-center ">
                                <h3>Musician </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </body>
    )
}