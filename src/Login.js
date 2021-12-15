import React from 'react';
import {saveJWT} from './jwtHandler';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error:null,
			username:"",
			password:""
		};
		this.updateUsernameInput = this.updateUsernameInput.bind(this);
		this.updatePasswordInput = this.updatePasswordInput.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	updateUsernameInput(e){
		this.setState({
			username:e.target.value
		})
	}

	updatePasswordInput(e){
		this.setState({
			password:e.target.value
		})
	}

	submitLogin(e){
		e.preventDefault();
		const data = {username:this.state.username, password:this.state.password};
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(data)
		};
		fetch("http://127.0.0.1:8000/users/login", requestOptions)
		.then(res => res.json())
		.then(
			(result) => {
				saveJWT(result['access_token']);
			},
			(error) => {
				this.setState({
					error:error
				});
			}
		)
		
	}

	render(){
		const error = this.error;
		if(error){
			return <div>Error: {error.message}</div>;
		}else{
			return (
				<div className='loginForm'>
					<label htmlFor='username'>Username</label>
					<input
						type="text"
						name="username"
						className="loginInput"
						placeholder="Username"
						onChange={this.updateUsernameInput} />
					<label htmlFor="password">Password</label>
					<input
						type="text"
						name="password"
						className="loginInput"
						placeholder="Password"
						onChange={this.updatePasswordInput} />
					<button
						type="button"
						className="loginBtn"
						onClick={this
							.submitLogin
							.bind(this)}>Login</button>
				</div>
			);
		}
	}
}

export default Login