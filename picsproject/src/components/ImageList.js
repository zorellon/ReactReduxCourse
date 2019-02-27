import React from 'react';

const ImageList = props => {
    //console.log(props.images);
    const images = props.images.map(image => {
        return <img key = {image.id} alt = {image.description} src = {image.urls.regular} />
    });
    // returns image of
    return <div> {images}</div>;
};

export default ImageList;