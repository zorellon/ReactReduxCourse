import React from 'react';
// the .. means go back one
import unsplashed from '../api/unsplashed';
// My own components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    // Initialized state empty array
    state = {images: [] };

    // Adding asyn lets us use await insted of promise
    onSearchSubmit = async term => {
        console.log(term);

        // GET /search/photos from documentation
        const response = await unsplashed.get('/search/photos',{
            // Athorization: in unsplashed.js 
            params: {query: term},
        });

        // set liat of images to state object
        this.setState({images: response.data.results });

        // Use to get callback from a promise
        // .then(() => {
        //  console.log(response.data.results);
        // });
    }

    render(){
        return (
            <div className = "ui container" style = {{marginTop: '10px'}}> 
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <ImageList images = {this.state.images}/>
                Found: {this.state.images.length} images
            </div>
            );
    }
}

export default App;
