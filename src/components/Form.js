import React from 'react';

const axios = require('axios');

class Form extends React.Component {

	state = {userName: ''};
	handleSubmit = async (event) => {
		event.preventDefault(); 	// otherwise the page is going to refresh
		// ToDo: create a separate agent type module to communicate with API
		const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
		// console.log(resp.data);
		this.props.onSubmit(resp.data);
		// reset the state of input after submit
		this.setState({userName: ''});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
					   value={this.state.userName}    // React takes control over the input value
					// grab the input value when changed
					// ToDo: extract the logic about managing the state into it's own component
					   onChange={event => this.setState({userName: event.target.value})}
					   placeholder="GitHub username"
					   required/>
				<button>Add card</button>
			</form>
		)
	}
}

export default Form;