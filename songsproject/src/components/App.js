import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
//import {selectSong} from '../actoins';

const App = () => {
    return (
    <div className= "ui container grid">
        <div className="ui row">
            <div className = "column eight wide">
                <SongList />
            </div>
            <div className="colum eight wide">
                <SongDetail />
            </div>
        </div>
        
    </div>
    );
};

export default App;
