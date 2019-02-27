// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create react function that can be called like vairiable
function getButtonText(){
    return 'Click on me!';
}

// Function returns current time
function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Creat a react component
const App = () => {  // or App = function() {}

const buttomText = 'Click Me!';
return (
    <div className = "ui container comments">
        <ApprovalCard > 
        <CommentDetail 
            author = "Sam" 
            date = "Today at 4:34PM" 
            comment = "Blah Blah!" 
            avatar = {faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard > 
        <CommentDetail 
            author = "Alex" 
            date = "Today at 4:45PM" 
            comment = "Hi there, U Rock" 
            avatar = {faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard >
             <div>
             <h4> Warning! </h4>
             Are you sure you want to do it?
             </div>
        </ApprovalCard>
        <CommentDetail 
            author = "James" 
            date = "Today at 6:14PM" 
            comment = "That was Dope." 
            avatar = {faker.image.avatar()}
        />
        

    </div>
);
};

// Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
    );
