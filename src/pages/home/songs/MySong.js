import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSongs, removeSong} from "../../../services/songService";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";


export default function MySong() {

    const user = useSelector(state => {
        return state.user.user
    })

    const dispatch = useDispatch()

    const songs = useSelector(state => {
        return state.song.songs
    })




    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])
    return (
        <>



            <div className="music_area music_gallery inc_padding">


                <div className="container">
                    <div className="row align-items-center justify-content-center mb-20">
                        {songs!== undefined &&
                            songs.map((item, index) => {
                                if (user !== undefined && item.idUser === user.idUser) {
                                return (
                                    <div className="col-xl-10">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9 col-md-9">
                                                <div className="music_field">
                                                    <div className="thumb">
                                                        <img src={item.image} alt="" width={148} height={148}/>
                                                    </div>
                                                    <div className="audio_name">
                                                        <div className="name">
                                                            <h4>{item.nameSong}</h4>
                                                            <p>Name Album : {item.nameAlbum}</p>
                                                            <p>Singer : {item.singer}</p>
                                                            <p>Author : {item.author}</p>

                                                        </div>
                                                        <audio preload="auto" controls>
                                                            <source src={item.sound}/>
                                                        </audio>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-3">
                                                <div className=" music_btn">

                                                    <Link style={{width: 20, float: "left", border: 5}} href="#"
                                                          className="boxed-btn"
                                                          to={`edit-song/${item.idSong}`}><i
                                                        className="fa-solid fa-pen-to-square"></i></Link>

                                                </div>
                                                <div className="music_btn">
                                                    <Link style={{width: 20, border: 5}} href="#"
                                                          className="mr-3 boxed-btn"
                                                          to={`delete-song/${item.idSong}`}>
                                                        <i className=" fa-solid fa-trash" onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "!!!",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then((willDelete) => {
                                                                if (willDelete) {
                                                                    dispatch(removeSong(item.idSong)).then(() => {
                                                                        dispatch(getSongs()).then(() => {
                                                                            navigate('/home')
                                                                        })
                                                                    })
                                                                    swal("Xoa thanh cong!", {
                                                                        icon: "success",
                                                                    });
                                                                } else {
                                                                    swal("Khong xoa thanh cong!");
                                                                    dispatch(getSongs()).then(() => {
                                                                        navigate('/home')
                                                                    })
                                                                }
                                                            })
                                                        }}></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            })
                        }

                    </div>
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