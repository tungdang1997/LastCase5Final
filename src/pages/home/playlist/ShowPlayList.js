import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import {getPlayLists, removePlayList} from "../../../services/playlistService";
import {Field, Form, Formik} from "formik";
import {addSong, getSongs, removeSong} from "../../../services/songService";
import {addPlayListDetails} from "../../../services/playListDetailService";


export default function ShowPlayList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const playLists = useSelector(state => {

        return state.playlist.playLists
    })

    const user = useSelector(state => {
        if (state.user.user !== undefined) {
            return state.user.user;
        }
    })

    console.log(user)

    const songs = useSelector(({song}) => {
        return song.songs
    })


    useEffect(() => {
        dispatch(getPlayLists(user.idUser))
        dispatch(getSongs())

    }, [])


    const handleAdd = (values) => {

        let data = {...values};
        dispatch(addPlayListDetails(data)).then(() => {

        })


    }


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
                                                            <h4>{item.namePlaylist}</h4>


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


                                                <td><Link to={`/home/edit-play-list/${item.idPlaylist}`}>
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

        </>
    )
}