import React, { Component } from 'react';

class Login extends Component {
	//http://cheng.logdown.com/posts/2016/03/26/683329
	constructor(props) {
		//since i only have one constructor, so this is necessary to write super(), otherwise "this" isn't initialized
		//since i want to access this.props inside the constructor so use super(props) other than super()
		super(props);
	}

	login(e) {
		//dafault action won't be triggered
		e.preventDefault();
		const values = {
			email: e.target.elements.email.value,
			password: e.target.elements.password.value
		};
		fetch('http://localhost:8888/login-user', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(values)
		})
			.then(response => response.json())
			.then(res => {
				alert(res.msg);
			}).catch((err) => {
				console.log(err);
			})
	}
export default Login;
