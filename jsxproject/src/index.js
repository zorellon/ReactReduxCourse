// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create react function that can be called like vairiable
function getButtonText(){
    return 'Click on me!';
}

// Function returns current time
function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Creat a react component
const App = function(){  // or App = () => {}

const buttomText = 'Click Me!';
    return (
    <div>
    <label className = "label" htmlFor = "name"> Enter name: </label>
    <input id = "name" type = "text"/>
    <button style = {{backgroundColor: 'blue', color: 'white'}}> {buttomText}</button>     
    <button style = {{backgroundColor: 'white', color: 'blue'}}> {getButtonText()}</button>           
   </div>
   );
};

// Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
    );
