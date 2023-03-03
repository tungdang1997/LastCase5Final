import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import AddSong from "./pages/home/songs/AddSong";
import AddAlbum from "./pages/home/album/AddAlbum";
import ListAlbum from "./pages/home/album/ListAlbum";
import EditAlbum from "./pages/home/album/EditAlbum";
import ListSong from "./pages/home/songs/ListSong";
import MySong from "./pages/home/songs/MySong";
import EditSong from "./pages/home/songs/EditSong";
import Profile from "./pages/home/user/Profile";
import ChangePassword from "./pages/home/user/ChangePassword";
import ShowPlayList from "./pages/home/playlist/ShowPlayList";
import AddPlayList from "./pages/home/playlist/AddPlayList";
import ShowSongAlbum from "./pages/home/album/showSongAlbum";
import EditPlaylist from "./pages/home/playlist/EditPlaylist";
import ShowSongInPlaylist from "./pages/playListDetail/ShowSong";



function App() {

    return (
        <>
            <div className='container-fluid'>
                <Routes>


                    <Route path={'home'} element={<Home/>}>
                        <Route path={''} element={<ListSong/>}/>

                        <Route path={'my-song'} element={<MySong/>}/>
                        <Route path={'my-profile/:idUser'} element={<Profile/>}/>
                        <Route path={'change-password/:idUser'} element={<ChangePassword/>}/>
                        <Route path={'edit-song/:id'} element={<EditSong/>}/>
                        <Route path={'my-song/edit-song/:id'} element={<EditSong/>}/>
                        <Route path={'add-song'} element={<AddSong/>}></Route>

                        <Route path={'delete-song/:id'}></Route>

                        <Route path={'add-album'} element={<AddAlbum/>}></Route>
                        <Route path={'list-album'} element={<ListAlbum/>}></Route>
                        <Route path={'edit-album/:id'} element={<EditAlbum/>}></Route>
                        <Route path={'delete-album/:id'}></Route>

                        <Route path={'play-lists'} element={<ShowPlayList/>}/>
                        <Route path={'play-lists/my-playlist-detail/:id'} element={<ShowSongInPlaylist/>}/>
                        <Route path={'add-play-list'} element={<AddPlayList/>}/>
                        <Route path={'play-lists/edit-play-list/:id'} element={<EditPlaylist/>}/>


                    </Route>

                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register/>}></Route>


                </Routes>
            </div>
        </>
    );
}

export default App;
