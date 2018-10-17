import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCswy5nRJCuI4WH-Gz_CQWN8JfMZ8Vy3Uk',
			authDomain: 'authentication-6149d.firebaseapp.com',
			databaseURL: 'https://authentication-6149d.firebaseio.com',
			projectId: 'authentication-6149d',
			storageBucket: 'authentication-6149d.appspot.com',
			messagingSenderId: '469226029883'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;