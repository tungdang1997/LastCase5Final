import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import {getPlayLists, removePlayList} from "../../../services/playListService";


export default function ShowPlayList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const playLists = useSelector(state => {
        return state.playList.playLists
    })

    const user = useSelector(state => {
        if (state.user.user !== undefined) {
            return state.user.user;
        }
    })

    useEffect(() => {
        dispatch(getPlayLists())

    }, [])
    return (
        <>
            <div className={"row"}>
                <div className="offset-center">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name Play List</th>
                            <th scope="col">Image</th>
                            <th scope="col">Count Song</th>
                            <th scope="col" colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user !== undefined && playLists &&
                            playLists.map((item, index) => {
                                if (user !== undefined && item.username === user.username) {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td><Link to={"detail"}>{item.namePlaylist}</Link></td>
                                            <td><img src={item.imagePlaylist} alt="" width={200} height={200}/></td>
                                            <td>{item.countSongPlaylist}</td>
                                            <td><Link to={`/home/edit-play-list/${item.idPlaylist}`}>
                                                <button>Edit</button>
                                            </Link>
                                            </td>
                                            <td><Link to={`delete-album/${item.idPlaylist}`}>
                                                <button onClick={() => {
                                                    swal({
                                                        title: "Are you sure?",
                                                        text: "!!!",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((willDelete) => {
                                                        if (willDelete) {
                                                            dispatch(removePlayList(item.idPlaylist)).then(() => {
                                                                dispatch(getPlayLists()).then(() => {
                                                                    navigate('/home')
                                                                })
                                                            })
                                                            swal("Xoa thanh cong!", {
                                                                icon: "success",
                                                            });
                                                        } else {
                                                            swal("Khong xoa thanh cong!");
                                                            dispatch(getPlayLists()).then(() => {
                                                                navigate('/home')
                                                            })
                                                        }
                                                    });
                                                }}>Delete
                                                </button>
                                            </Link></td>
                                        </tr>
                                    )
                                } else return (<></>)
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}