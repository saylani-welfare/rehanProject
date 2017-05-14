import React, { Component } from "react";
import AddCostumer from 'material-ui/svg-icons/social/person-add';
import Add from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';





// select feild (bottle type)
const items = [
    <MenuItem key={1} value={1} primaryText="19 Litres" />,
    <MenuItem key={2} value={2} primaryText="11 Litres" />,
    <MenuItem key={3} value={3} primaryText="8 Litres" />,
];







class AddEntry extends Component {

    // select field
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({ value });



    // STEPPER

    state = {
        finished: false,
        stepIndex: 0,
        costumerID: "",
        password: "",
        bottleType: "",
        quantity: ""
    };




    handleNext = (ev) => {
        ev.preventDefault()
        const { stepIndex } = this.state;
        this.setState({
            finished: stepIndex >= 3,
        });
        if (stepIndex === 3) {
            // { this.props.signUp(this.state.Data, this.state.password) }
        }

        switch (stepIndex) {
            case 0:
                if (this.refs.costumerName.getValue() === "" || this.refs.costumerID.getValue() === "") {
                    alert("Please Complete Fields")
                }
                else {

                    const { stepIndex } = this.state;
                    this.setState({
                        stepIndex: stepIndex + 1,

                    })
                }

                break;
            case 1:
                if (this.refs.quantity.getValue() === "") {
                    alert("Please Complete Fields")
                }
                else {

                    const { stepIndex } = this.state;
                    this.setState({
                        stepIndex: stepIndex + 1,

                    })
                }
                break;
            case 2:
                if (this.refs.payment.getValue() === "" || this.refs.balance.getValue() === "") {
                    alert("Please Complete Fields")
                }
                else {

                    const { stepIndex } = this.state;
                    this.setState({
                        stepIndex: stepIndex + 1,

                    })
                }
                break;
            case 3: {

                const { stepIndex } = this.state;
                this.setState({
                    stepIndex: stepIndex + 1
                })
                break;
            }
            default:
                console.log("Something Went Wrong")
        }
    };


    handleChange = (event, index, value) => this.setState({ value });

    changeSex = (event, index, Sex) => this.setState({ Sex });

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <form onSubmit={this.handleNext}>
                            <TextField
                                hintText="Name"
                                floatingLabelText="Name"
                                floatingLabelStyle={{ color: "#1e88e5" }}
                                multiLine={false} ref="costumerName" /> <br />
                            <TextField
                                hintText="ID"
                                floatingLabelText="Costumer ID"
                                floatingLabelStyle={{ color: "#1e88e5" }}
                                multiLine={false}
                                type="number"
                                required ref="costumerID" /> <br />

                            <br /><br />

                            <div style={{ marginTop: 12 }}>

                                <RaisedButton
                                    label='Next'
                                    backgroundColor="#1e88e5"
                                    labelColor="white"
                                    type="submit"
                                />
                            </div>
                            <br />
                        </form>

                    </div>
                );
            case 1:
                return (
                    <div>

                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange}
                            floatingLabelText="Bottle Type"
                            ref="bottleType"
                        >
                            {items}
                        </SelectField>
                        <br />
                        <TextField
                            hintText="Quantity"
                            floatingLabelText="Quantity"
                            ref="quantity"
                            type="number"
                        />
                        <br />
                        <br />
                        <div style={{ marginTop: 12 }}>

                            <RaisedButton
                                label='Next'
                                backgroundColor="#1e88e5"
                                labelColor="white"
                                onTouchTap={this.handleNext}
                            />
                        </div>
                        <br />
                    </div>);
            case 2:
                return (
                    <form>
                        <TextField
                            hintText="Payment"
                            floatingLabelText="Payment"
                            floatingLabelStyle={{ color: "#1e88e5" }}
                            multiLine={false}
                            type="number"
                            ref="payment"
                        /><br />

                        <TextField
                            hintText="Optional"
                            floatingLabelText="Balance"
                            floatingLabelStyle={{ color: "#1e88e5" }}
                            multiLine={false}
                            ref="balance"
                            type="number"
                        /><br />
                        <br />
                        <div style={{ marginTop: 12 }}>

                            <RaisedButton
                                label='Next'
                                backgroundColor="#1e88e5"
                                labelColor="white"
                                onTouchTap={this.handleNext}
                            />
                            <br /><br />
                        </div></form>
                );
            case 3:
                return (
                    <div>
                        Are You Sure To Add Entry  ?
            <div style={{ marginTop: 12 }}>

                            <RaisedButton
                                label='Finish'
                                backgroundColor="#1e88e5"
                                labelColor="white"
                                onTouchTap={this.handleNext}
                            />
                        </div>
                        <br />
                    </div>
                );

            default:
                return 'Something Went Wrong!';
        }
    }






    render() {


        //stepper

        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };






        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Paper style={{ width: '100%', maxWidth: 700, margin: 'auto' }} zDepth={2} >
                    <h1 style={{ textAlign: "center" }}> New Bottle Entry </h1>

                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Costumer Details</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel >Bottle Details</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Payment Details</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Confirmation</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <div>

                                <h3>  You Have Successfully Added New Entry < br /><br />
                                    <Link to="/salesperson">
                                        <RaisedButton
                                            label='Go To Home'
                                            backgroundColor="#1e88e5"
                                            labelColor="white"
                                            onTouchTap={this.handleNext}
                                        />
                                    </Link> </h3>
                                <br />

                            </div>
                        ) : (
                                <div>
                                    <div>{this.getStepContent(stepIndex)}</div>

                                </div>
                            )}
                    </div>
                </Paper>
            </div>
        )
    }
}

export default AddEntry