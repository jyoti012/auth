import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
	state = { email: '', password: '', error: '' };

	onButtonPress() {
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				console.log('firebase success');
			})
			.catch(() => {
				console.log('firebase error');
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(() => {
						console.log("User registered");
					})
					.catch(() => {
						console.log("Auth err")
						this.setState({ error: 'Authentication Failed' });
					});
			});
	}

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

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;
