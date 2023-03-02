import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import AddSong from "./pages/home/songs/AddSong";
import AddAlbum from "./pages/home/album/AddAlbum";
import ListAlbum from "./pages/home/album/ListAlbum";
import EditAlbum from "./pages/home/album/EditAlbum";

import ShowPlayList from "./pages/home/playList/ShowPlayList";
import AddPlayList from "./pages/home/playList/AddPlayList";
import EditPlaylist from "./pages/home/playList/EditPlaylist";



function App() {

    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register/>}></Route>
                    <Route path={'home'} element={<Home/>}>
                        <Route path={'add-song'} element={<AddSong/>}></Route>
                        <Route path={'add-album'} element={<AddAlbum/>}></Route>
                        <Route path={'list-album'} element={<ListAlbum/>}></Route>
                        {/*<Route path={'my-list'} element={<MyList/>}></Route>*/}


                        <Route path={'edit-album/:id'} element={<EditAlbum/>}/>
                        <Route path={'delete-album/:id'}></Route>

                        <Route path={'play-lists'} element={<ShowPlayList/>}/>
                        <Route path={'add-play-list'} element={<AddPlayList/>}/>
                        <Route path={'edit-play-list/:id'} element={<EditPlaylist/>}/>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
