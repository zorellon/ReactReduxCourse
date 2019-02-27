import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // in JS class first methode called
    constructor(props){
        // Need to do this every time because we are overriding constructor in parent(react.component)
        super(props);
        // Default lat to null in initialization
        // This is the only time you do direct assignment to this.state
        this.state = {lat: null , errorMessage: ''};
    }

    componentDidMount(){
        console.log('My component was Mounted!');

        // Get user location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Call setState!!
                this.setState({lat : position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );       
    }

    componentDidUpdate(){
        console.log('My component was Updated!');
    }

    // Do Cleanup
    componentWillUnmount(){
        console.log('My component was Unmounted!');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div> 
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        else if(!this.state.errorMessage && this.state.lat){
            return (
               <SeasonDisplay lat = {this.state.lat} />
            );
        }
        else{
            return <Spinner message = "Waiting for Location info"/>;
        }
     
    }
    

    // React says we have to define render!!
    render(){
     return(
         <div className = "border red">
            {this.renderContent()}
         </div>
     )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));