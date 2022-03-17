import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { sendLoginData } from "../../redux/auth_data";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'input'} name={'email'} placeholder='Login' />
        </div>
        <div>
            <Field component={'input'} name={'password'} placeholder='Password' />
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'} />Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

let mapStateToProps = (state) => ({});

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);



class Login extends React.Component {

    onSubmit = (form) => {
        console.log(form);
        this.props.sendLoginData(form);
        debugger;
    }

    render() {
        return <div>
            <h1> LOGIN </h1>
            <LoginReduxForm onSubmit={this.onSubmit} />
        </div>
    }

}

mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { sendLoginData })(Login);