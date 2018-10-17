import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
	
	state = { loggedIn: null };

	componentWillMount() {	

		firebase.initializeApp({
			apiKey: 'AIzaSyCswy5nRJCuI4WH-Gz_CQWN8JfMZ8Vy3Uk',
			authDomain: 'authentication-6149d.firebaseapp.com',
			databaseURL: 'https://authentication-6149d.firebaseio.com',
			projectId: 'authentication-6149d',
			storageBucket: 'authentication-6149d.appspot.com',
			messagingSenderId: '469226029883'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Button onPress={()=> firebase.auth().signOut()}>
						Logout
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <View style={style.viewStyle}><Spinner /></View>;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const style = {
	viewStyle: {
		paddingTop: 20
	}
}

export default App;