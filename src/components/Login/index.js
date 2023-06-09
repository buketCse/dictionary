// import '../Body/body.scss';
import {input, label} from 'bootstrap'

function Login(props){
    return <div class="login-container">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Log in to Codepen</h3>
		<div class="card-text">
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<a style={{float:'right',fontSize:'12px'}}>Forgot password?</a>
					<input type="password" class="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<button type="submit" class="btn btn-primary btn-block">Sign in</button>
				<div class="sign-up">
					Don't have an account? <a href="#">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
}

export default Login