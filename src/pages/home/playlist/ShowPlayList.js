import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import {getPlayLists, removePlayList} from "../../../services/playlistService";
import {Field, Form, Formik} from "formik";
import {addSong, getSongs, removeSong} from "../../../services/songService";
import {addPlayListDetails, getPlayListDetails} from "../../../services/playListDetailService";



export default function ShowPlayList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const user = useSelector(state => {
        if (state.user.user !== undefined) {
            return state.user.user;
        }
    })

    const playLists = useSelector(state => {
        return state.playlist.playLists
    })


    const songs = useSelector(({song}) => {
        return song.songs
    })





    const handleAdd = (values) => {
console.log(values)
        let data = {...values};
        dispatch(addPlayListDetails(data)).then(() => {

        })


    }


    const handleShow= (values) => {
        console.log(values)
        dispatch(getPlayListDetails(values)).then(() => {

        })


    }

    useEffect(() => {
        dispatch(getPlayLists(user.idUser))
        dispatch(getSongs())

    }, [])

    return (
        <>

            <div className="music_area music_gallery inc_padding">


                <div className="container">
                    <div className="row align-items-center justify-content-center mb-20">
                        {user !== undefined && playLists &&
                            playLists.map((item, index) => {

                                return (
                                    <div className="col-xl-10">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9 col-md-9">
                                                <div className="music_field">
                                                    <div className="thumb">
                                                        <img src={item.imagePlaylist} alt="" width={148} height={148}/>
                                                    </div>
                                                    <div className="audio_name">
                                                        <div className="name">
                                                                    <label htmlFor="exampleInputUsername">Name play list: {item.namePlaylist} </label>
                                                                    <Link to={`my-playlist-detail/${item.idPlaylist}`}>
                                                                        <h5>Show Song</h5>
                                                                    </Link>
                                                        </div>
                                                        <Formik initialValues={{
                                                            idSong: '',
                                                            idPlayList: ''
                                                        }} onSubmit={(values) => {

                                                            values.idPlayList = item.idPlaylist + ''
                                                            handleAdd(values)

                                                        }}>
                                                            <td>
                                                                <Form>

                                                                    <Field as="select" name={'idSong'} id="cars">
                                                                        {
                                                                            songs && songs.map((item) => (
                                                                                <>
                                                                                    <option
                                                                                        value={item.idSong}>{item.nameSong}</option>
                                                                                </>
                                                                            ))
                                                                        }

                                                                    </Field>


                                                                    <button type="submit">Add Song</button>

                                                                </Form>
                                                            </td>

                                                        </Formik>

                                                    </div>

                                                </div>

                                                <br/>
                                                <br/>
                                                <br/>


                                                <td><Link to={`edit-play-list/${item.idPlaylist}`}>
                                                    <button>Edit</button>
                                                </Link>
                                                </td>

                                            </div>


                                        </div>
                                    </div>
                                )

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