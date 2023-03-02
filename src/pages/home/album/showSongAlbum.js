import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSongs, removeSong} from "../../../services/songService";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {getAlbums} from "../../../services/albumService";


export default function ShowSongAlbum() {

    const user = useSelector(state => {
        return state.user.currentUser
    })

    const dispatch = useDispatch()

    const songs = useSelector(state => {
        return state.song.songs
    })
    console.log(songs)

    const albums = useSelector(state => {
        if (state.album !== undefined) {
            return state.album.albums[0];
        }
    })


    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAlbums())
        dispatch(getSongs())
    }, [])

    return (
        <>


            <div className="music_area music_gallery inc_padding">


                <div className="container">
                    <div className="row align-items-center justify-content-center mb-20">
                        {songs !== undefined && albums &&
                            albums.map((item, index) => {
                                if (songs.idAlbum === item.idAlbum) {
                                    return (
                                        <div className="col-xl-10">
                                            <div className="row align-items-center">
                                                <div className="col-xl-9 col-md-9">
                                                    <div className="music_field">
                                                        {/*<div className="thumb">*/}
                                                        {/*    <img src={item.image} alt="" width={148} height={148}/>*/}
                                                        {/*</div>*/}
                                                        <div className="audio_name">
                                                            <div className="name">
                                                                <h4>{item.nameSong}</h4>
                                                                <p> Singer : {item.singer}</p>
                                                                <p> Author : {item.author}</p>

                                                            </div>
                                                            <audio preload="auto" controls>
                                                                <source src={item.sound}/>
                                                            </audio>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-3">

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


        </>
    )
}