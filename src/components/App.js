import React from 'react';
import CardList from './CardList';
import Form from './Form';
import '../styles/styles.css';

// static data for testing
// const testData = [
// 	{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
// 	{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
// 	{name: "Xenia N", avatar_url: "https://avatars2.githubusercontent.com/u/50034855?v=4", company: "Library"},
// ];

// ToDo: Handle errors like * invalid input, * network problems

// ToDo: as an exercise - convert all class components to function components
// ToDo: state --> hook, setState --> updater function from the hook

// class way of defining Component
class App extends React.Component {
	// initializing the state object
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		profiles: testData,
	// 	};
	// }

	// same initializing in a shorter way
	state = {
		profiles: []
	};
	addNewProfile = (profileData) => {
		// console.log('App', profileData);
		this.setState(prevState => ({
			// same as concat
			profiles: [...prevState.profiles, profileData],
		}));
	};

	render() {
		// returns the Virtual DOM description of my component
		return (
			<div className="container">
				<div className="header">
					<h2>GitHub Cards App on React</h2>
					<p>Take input from the user, call a public Github API,<br/> update the list of users</p>
				</div>

				<Form onSubmit={this.addNewProfile}/>
				<CardList profiles={this.state.profiles}/>
			</div>
		);
	}
}

// function way of defining Component
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );

export default App;
