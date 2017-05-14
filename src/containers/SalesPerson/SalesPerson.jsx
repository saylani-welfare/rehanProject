import React, { Component } from "react";
import AddCostumer from 'material-ui/svg-icons/social/person-add';
import Add from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'

class SalesPerson extends Component {




    render() {

        const styles = {
            button: {
                margin: 12,
            },
            exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
                
            },
        };






        return (
            <div>
                 <br />
                <center>
                <h1 style={{fontSize: '30px'}}>Sales Person Dashboard</h1>
                <br />
                 <br />
                  <br />
                    <Link to="/addcostumer">
                        <RaisedButton
                            label="Add New Costumer"
                            style={styles.button}
                            backgroundColor="#1e88e5"
                                labelColor="white"
                            icon={<AddCostumer />}
                        />
                    </Link>


                    <Link to="/addentry">
                        <RaisedButton
                            label="Add Entry"
                            backgroundColor="#1e88e5"
                                labelColor="white"
                            style={styles.button}
                            icon={<Add />}
                        />
                    </Link>


                </center>
            </div>
        )
    }
}

export default SalesPerson