import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import "./Login.scss";
import {Link} from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Form,
    FormGroup,
    FormInput
} from "shards-react";

class Login extends Component {
    state = {
        userName: "",
        userPassword: "",
        rememberMe: false,
        loading: false
    };


    componentWillMount() {
    }

    componentDidMount() {

    }


    render() {
        const {logginFailed, loggedIn, errorMessage} = this.state;

        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Logging In'
            >
                <div className="login-page-container">
                    <Card title="Login" className="login-card">
                        <CardHeader><h3>Login to admin panel</h3></CardHeader>
                        <CardBody>

                            {
                                logginFailed && (
                                    <div className={'error'}>{errorMessage}</div>
                                )
                            }
                            {
                                loggedIn && (
                                    <div className={"success"}>Login Success</div>
                                )
                            }
                            <Form>
                                <FormGroup>
                                    <label htmlFor="username">Username</label>
                                    <FormInput id="username" type={'email'}/>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="username">Password</label>
                                    <FormInput id="username" type={"password"}/>
                                </FormGroup>
                            </Form>


                        </CardBody>
                        <CardFooter>
                            <Button block squared theme="secondary" onClick={() => {
                                this.props.history.push("/admin/dashboard");
                            }}>
                                Login
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </LoadingOverlay>

        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Login);
