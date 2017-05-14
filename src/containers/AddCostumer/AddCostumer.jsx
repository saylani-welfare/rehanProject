import React, { Component } from "react";
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





// PAper

const style = {
  height: 500,
  width: 800,
  margin: 0,
  textAlign: 'center',

};








class AddCostumer extends Component {

    // select field
    state = {
        value: null,
        value2: null
    };

    handleChange = (event, index, value) => this.setState({ value });
        handleChange2 = (event, index, value2) => this.setState({ value2 });
    


    // STEPPER

    state = {
        finished: false,
        stepIndex: 0
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
                if (this.refs.familyMembers.getValue() === "" ) {
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
                if (this.refs.address.getValue() === "" || this.refs.phoneNumber.getValue() === "") {
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



    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <form onSubmit={this.handleNext}>
                            <TextField
                                hintText="Name"
                                floatingLabelText="Costumer Name"
                                
                                labelColor="white"
                                multiLine={false} ref="costumerName" /> <br />
                            <TextField
                                hintText="ID"
                                floatingLabelText="Costumer ID"
                                
                                labelColor="white"
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
                                <br /><br />
                            </div>
                        </form>

                    </div>
                );
            case 1:
                return (
                    <form>
                        <TextField
                            hintText="Number of Family Members"
                            floatingLabelText="Number of Family Members"
                            labelColor="white"
                            
                            multiLine={false}
                            type="number"
                            ref="familyMembers"
                        /><br />

                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange}
                            floatingLabelText="Transport Used"
                            ref="transportUsed"
                        >
                            <MenuItem key={1} value={1} primaryText="Never" />
                            <MenuItem key={2} value={2} primaryText="Cycle" />
                            <MenuItem key={3} value={3} primaryText="Bike" />
                            <MenuItem key={4} value={4} primaryText="Car" />
                            <MenuItem key={5} value={5} primaryText="Other" />
                        </SelectField>
                        <br />
                        <SelectField
                            value={this.state.value2}
                            onChange={this.handleChange2}
                            floatingLabelText="Do You Own A Tank"
                            ref="ownTank"
                        >
                            <MenuItem key={1} value={1} primaryText="Yes" />
                            <MenuItem key={2} value={2} primaryText="No" />
                        </SelectField>
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
            case 2:
                return (
                    <div>
                        <form onSubmit={this.handleNext}>
                            <TextField
                                hintText="Address"
                                floatingLabelText="Address"
                                multiLine={true}
                                ref="address"
                                rows={1}
                            /><br />
                            <TextField
                                hintText="Phone Number"
                                floatingLabelText="Phone Number"
                                ref="phoneNumber"
                                type="number"
                            />


                            <br />
                            <br />
                            <br /><br />

                            <div style={{ marginTop: 12 }}>

                                <RaisedButton
                                    label='Next'
                                    backgroundColor="#1e88e5"
                                    labelColor="white"
                                    type="submit"
                                />
                                <br />
                                <br />
                            </div>
                        </form>

                    </div>
                );
            case 3:
                return (
                    <div> Are you sure to add New Costumer ?
            <div style={{ marginTop: 12 }}>

                            <RaisedButton
                                label='Finish'
                                backgroundColor="#1e88e5"
                                labelColor="white"
                                onTouchTap={this.handleNext}
                            />
                            <br />
                            <br />
                        </div>
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
                 <h1 style={{ textAlign: "center" }}> New Costumer </h1>
               
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Costumer Details</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel >Additional Details</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Contact and Location</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Confirmation</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <div>
                            <br />
                            <h3>  You Have Successfully Added New Costumer < br /><br />
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

export default AddCostumer