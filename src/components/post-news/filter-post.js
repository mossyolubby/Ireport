import React, {Component} from 'react';



class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange= this.handleChange.bind(this);
        this.handleKeyUp= this.handleKeyUp.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (event.target.value === '') {
            this.props.onFilter('');
        }
    }

    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.props.onFilter(this.state.value);
        }
    }

    render(){
        return(
            <div>
                <label>
                    <input type="search" value = {this.state.value}
                    onchange={this.handleChange}
                    onKeyUp={this.handleKeyUp} 
                    placeholder="Search by category or content..." />
                </label>
            </div>
        )
    }

}


export default Filter;