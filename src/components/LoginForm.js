import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: ''}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="johndoe@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })} />
				</CardSection>
				<CardSection>
				<Input 
					placeholder="aA@qw12"
					label="Password"
					secureTextEntry
					value={this.state.password}
					onChangeText={password => this.setState({ password })} />
			</CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
