
import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:49'},
        {title: 'Rock On!', duration: '3:38'},
        {title: 'Yellow', duration: '3:45'},
        {title: 'Telephone', duration: '3:21'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});