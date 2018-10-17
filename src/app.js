import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

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
				<Text>App</Text>
			</View>
		);
	}
}

export default App;