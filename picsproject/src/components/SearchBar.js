import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};
    // Replaced by arrow function
    // onInputChange(event){
    //     //Gives us the text in the input
    //     console.log(event.target.value);
    // }

    //onForumSubmit(event){
    onFormSubmit = (event) => {
        // Forms make hitting enter 
        event.preventDefault();

        //console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    };

    render(){
        return (
        <div className = "ui segment"> 
            <form onSubmit={this.onFormSubmit} className = "ui form" >
                <div className = "feild">
                    <label> Image Search</label>
                    <input 
                        type = "text" 
                        value = {this.state.term}
                        onChange={(event) => this.setState({term: event.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;