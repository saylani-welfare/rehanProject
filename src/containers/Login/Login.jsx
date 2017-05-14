import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { grey500, blue600 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { connect } from "react-redux";
import AuthMiddleware from '../../store/middlewares/authMiddleware.js';

function mapStateToProps(state) {
    return {
        data: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (id, password) => dispatch(AuthMiddleware.login(id, password))
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormActive: false,
            loginAs: null,
            id: null,
            password: null
        }
    }

    handleSubmit = () => {
        const { id, password } = this.state;
        this.props.signIn(id, password);
    }
    loginAsManager(){
        this.changeStep();
        setTimeout(() => this.refs.inputId.focus(), 100);
        this.setState({loginAs: "Manager"});
    }
    loginAsSailsPerson(){
        this.changeStep();
        setTimeout(() => this.refs.inputId.focus(), 100);
        this.setState({loginAs: "Sailsperson"});
    }
    changeStep(){
        this.setState({isFormActive: !this.state.isFormActive});
    }
    stepBack(){
        this.changeStep();
        this.setState({loginAs: null});
    }

    render() {
        const styles = {
            h1: {
                fontSize: '2em',
                marginTop: 10,
                marginBottom: 30
            },
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '20%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            paper: {
                textAlign: 'center',
                padding: 20,
                overflow: 'auto'
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            btn: {
                margin: 10
            },
            btnBack : {
                color: blue600,
                position: 'absolute',
                left: 0,
                top: 4
            },
            hide: {//animations when hiding buttons and showing form
                opacity: 0,
                display: 'none'
            },
            show: {//animations when hiding form and showing buttons
                opacity: 1,
                display: 'block'
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };
        return (
            <div>
                <div style={styles.loginContainer}>

                    <Paper style={styles.paper}>
                        <h1 style={styles.h1}>Company Name</h1>
                        <h2>
                            Login {this.state.loginAs ? ' As '+ this.state.loginAs : null}
                        </h2>
                        {/*Login buttons (step 1)*/}
                        <div className="loginStep" style={!this.state.isFormActive ?  styles.show : styles.hide}>
                            <div>
                                <RaisedButton label="As Manager"
                                primary={true}
                                style={styles.btn}
                                onTouchTap={() => this.loginAsManager()}
                                />
                            </div>
                            <h2>OR</h2>
                            <div>
                                <RaisedButton label="As SalesPerson"
                                    primary={true}
                                    style={styles.btn}
                                    onTouchTap={() => this.loginAsSailsPerson()}
                                />
                            </div>
                        </div>
                        {/*Login form (step 2)*/}
                        <div className="loginStep" style={this.state.isFormActive ? styles.show : styles.hide}>
                            <form>
                                <TextField
                                    hintText="ID"
                                    ref="inputId"
                                    floatingLabelText="ID"
                                    fullWidth={true}
                                    type="text"
                                    onChange={event => this.setState({ id: event.target.value })}
                                />
                                <TextField
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                    type="password"
                                    onChange={event => this.setState({ password: event.target.value })}
                                />
                                <div style={{position: 'relative'}}>
                                    <IconButton style={styles.btnBack} touch={true} onTouchTap={() => {this.stepBack()}}>
                                        <ArrowBack />
                                    </IconButton>
                                    <RaisedButton label="Login"
                                        primary={true}
                                        style={styles.btn}
                                        onTouchTap={this.handleSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
































// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import './Login.css';
// import AuthMiddleware from '../../store/middlewares/authMiddleware.js';

// function mapStateToProps(state) {
//     return {
//         data: state,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         signIn: (id, password) => dispatch(AuthMiddleware.login(id, password))
//     }
// }

// class Login extends Component {
//     constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: null,
    //         password: null
    //     }
    // }

    // handleSubmit = () => {
    //     const {id, password} = this.state;
    //     this.props.signIn(id, password); 
    // }
//     render() {
//         return (

//         )
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
