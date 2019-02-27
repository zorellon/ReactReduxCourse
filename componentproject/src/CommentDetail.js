// Import the React and ReactDOM libraries
import React from 'react';
// import ReactDOM from 'react-dom';
//import faker from 'faker';

// Creat a react component
const CommentDetail = (props) => {  // or CommentDetail = function() {}
//console.log(props);
return(

<div className = "comment">
         <a href = "/" className = "avatar">
                < img alt = "avatar" src= {props.avatar}></img>
         </a>
            <div className = "content">
                <a href = "/" className = "author">
                   {props.author}
                </a>
                <div className = "metadata">
                  <span className = "date">{props.date}</span>
                </div> 
                <div className = "text">{props.comment}</div>
            </div> 
        </div>
);


};

export default CommentDetail;
