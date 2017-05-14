import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import { typography } from 'material-ui/styles';
import { grey600 } from 'material-ui/styles/colors';


import {NewOrders, MonthlySales, InfoBox, ContentBox} from '../../components';
import Data from '../../data';
import customerImg from '../../images/customers.jpg';
import vendorImg from '../../images/vendors.jpg';
import qualityImg from '../../images/quality.jpg';
import employeeImg from '../../images/employees.jpg';

class ManagerDashboard extends React.Component {

    render() {

        const globalStyles = {
            navigation: {
                fontSize: 15,
                fontWeight: typography.fontWeightLight,
                color: grey600,
                paddingBottom: 15,
                display: 'block'
            },
            title: {
                fontSize: 24,
                fontWeight: typography.fontWeightLight,
                marginBottom: 20
            },
            paper: {
                padding: 30
            },
            clear: {
                clear: 'both'
            }
        };

        return (
            <div>
                <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

                <div className="row">

                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={AccountBalance}
                            color={cyan600}
                            title="Bottles"
                            value="200"
                        />
                    </div>


                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={AccountBalance}
                            color={cyan600}
                            title="Water"
                            value="16 lbs"
                        />
                    </div>

                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={AccountBalance}
                            color={cyan600}
                            title="Revenue"
                            value="$3567"
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
                        <NewOrders data={Data.dashBoardPage.newOrders} />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
                        <MonthlySales data={Data.dashBoardPage.monthlySales} />
                    </div>
                </div>


                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                        <ContentBox
                            text="Customers"
                            link="/customers"
                            imageLink={customerImg}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                        <ContentBox
                            text="Vendors"
                            link="/vendors"
                            imageLink={vendorImg}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                        <ContentBox
                            text="Quality"
                            link="/quality"
                            imageLink={qualityImg}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                        <ContentBox
                            text="Employees"
                            imageLink={employeeImg}
                        />
                    </div>
                </div>
                {/*<div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                        <BrowserUsage data={Data.dashBoardPage.browserUsage} />
                    </div>
                </div>*/}
            </div>
        );
    }
};

export default ManagerDashboard;














































/*import React, { Component } from 'react';
import { Link } from 'react-router';

import "./AdminDashboard.css";

class AdminDashboard extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="blue">
                                    <i className="material-icons">account_balance</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Plant 1</p>
                                    <h3 className="card-title">$30000</h3>
                                </div>
                                <div className="card-footer anchorDiv">
                                    <div className="stats">
                                        <i className="material-icons">info</i>
                                        <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="blue">
                                    <i className="material-icons">account_balance</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Plant 2</p>
                                    <h3 className="card-title">$75521</h3>
                                </div>
                                <div className="card-footer anchorDiv">
                                    <div className="stats">
                                        <i className="material-icons">info</i>
                                        <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header" data-background-color="blue">
                                    <i className="material-icons">account_balance</i>
                                </div>
                                <div className="card-content">
                                    <p className="category">Plant 3</p>
                                    <h3 className="card-title">$34,245</h3>
                                </div>
                                <div className="card-footer anchorDiv">
                                    <div className="stats">
                                        <i className="material-icons">info</i>
                                        <a href="#pablo" style={{ textDecoration: 'none', color: '#999' }}>More info....</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Manage Plants</h3>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div className="card-image" data-header-animation="true">
                                    <Link to="/managerdashboard">
                                        <img className="img" src="../assets/img/card-2.jpeg" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="card-actions">
                                        <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                            <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                        <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                            <i className="material-icons">art_track</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                            <i className="material-icons">close</i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <Link to="/managerdashboard">Plant 1</Link>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                                                </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats pull-right">
                                        <p className="category"><i className="material-icons">place</i> DHA phase 5, Karachi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div className="card-image" data-header-animation="true">
                                    <Link to="/managerdashboard">
                                        <img className="img" src="../assets/img/card-3.jpeg" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="card-actions">
                                        <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                            <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                        <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                            <i className="material-icons">art_track</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                            <i className="material-icons">close</i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <Link to="/managerdashboard">Plant 2</Link>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                                                </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats pull-right">
                                        <p className="category"><i className="material-icons">place</i> Bahadurabad, Karachi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div className="card-image" data-header-animation="true">
                                    <Link to="/managerdashboard">
                                        <img className="img" src="../assets/img/card-1.jpeg" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="card-actions">
                                        <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                            <i className="material-icons">build</i> Fix Header!
                                                    </button>
                                        <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                            <i className="material-icons">art_track</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                            <i className="material-icons">close</i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <Link to="/managerdashboard">Plant 3</Link>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                                                </div>
                                </div>
                                <div className="card-footer">
                                    <div className="stats pull-right">
                                        <p className="category"><i className="material-icons">place</i> sadder Town, Karachi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminDashboard*/