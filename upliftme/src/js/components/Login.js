//when triggering the login event, fetch data of login.
import React, { Component } from 'react';

class Login extends Component {
	//http://cheng.logdown.com/posts/2016/03/26/683329
	constructor(props) {
		//since it only has one constructor, so this is necessary to write super(), otherwise "this" isn't initialized
		//since i want to access this.props inside the constructor so i use super(props) other than super()
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
	register(e) {
		e.preventDefault();
		const values = {
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
			userName: e.target.elements.userName.value
		};
		fetch('http://localhost:8888/register-user', {
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
	render() {
		return (
			<div style={{ backgroundImage: `url(${background})`, height: '100vh' }} className="body">
				<div className="main-form">
					<div className="login-btn splits">
						<p>Already an user?</p>
						<button className="active">Login</button>
					</div>
					<div className="rgstr-btn splits">
						<p>Don't have an account?</p>
						<button>Register</button>
					</div>
					<div className="wrapper">
						<form id="login" onSubmit={this.login} tabIndex="500">
							<h3>Login</h3>
							<div className="mail">
								<input type="mail" name="email" required />
								<label>Email</label>
							</div>
							<div className="passwd">
								<input type="password" name="password" required />
								<label>Password</label>
							</div>
							<div className="submit">
								<button className="dark">Login</button>
							</div>
						</form>
						<form id="register" onSubmit={this.register} tabIndex="502">
							<h3>Register</h3>
							<div className="name">
								<input type="text" name="userName" required />
								<label>Username</label>
							</div>
							<div className="mail">
								<input type="mail" name="email" required />
								<label>Email</label>
							</div>
							<div className="passwd">
								<input type="password" name="password" required />
								<label>Password</label>
							</div>
							<div className="submit">
								<button className="dark">Register</button>
							</div>
						</form>
					</div>
				</div>
				<script src="../index.js" ></script>
			</div>
			);
		}
	}
	
export default Login;
