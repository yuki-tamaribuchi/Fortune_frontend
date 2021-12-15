import React from "react";

import {removeJWT} from './jwtHandler';

class Logout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			is_logged_out:false
		};
		this.submitLogout = this.submitLogout.bind(this);
	}

	submitLogout(e){
		e.preventDefault();
		if(removeJWT()){
			this.setState({
				is_logged_out:true
			});
		}
	}

	render(){
		if(this.is_logged_out){
			return <div>Log out success</div>;
		}
		else{
			return (
				<div className="logoutForm">
					<button
						type="button"
						className="logoutBtn"
						onClick={this.submitLogout}>Logout</button>
				</div>
			)
		}
	}
}

export default Logout;