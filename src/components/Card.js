import React from 'react';

// const testData = [
// 	{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
// 	{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
// 	{name: "Xenia Novosilska", avatar_url: "https://avatars2.githubusercontent.com/u/50034855?v=4", company: "Library"},
// ];

class Card extends React.Component {
	render() {
		// const profile = testData[0];
		const profile = this.props;

		return (
			<div className="github-profile">
				<img src={profile.avatar_url} alt=""/>
				<div className="info">
					{/* Sample of inline styling using javascript syntax
					 Can be used for a conditional styles, for example */}
					{/*<div className="name" style={{fontSize: '125%'}}>Name here..</div>*/}

					{/* Conditional styling */}
					{/*<div style={{color: Math.random() < 0.5 ? 'green' : 'blue'}}>*/}
					{/*	How do you like it?*/}
					{/*</div>*/}

					<div className="name">{profile.name}</div>
					<div className="company">{profile.company}</div>
				</div>
			</div>
		);
	}
}

export default Card;
