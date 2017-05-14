import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import store from './store';
import themeDefault from './theme-default';
import './index.css';
import {
    Login,
    AdminLogin,
    AdminPanel,
    AdminDashboard,
    ManagerPanel,
    ManagerDashboard,
    Settings,
    Customers,
    Vendors,
    Quality,
    SalesPerson,
    AddEntry,
    AddCostumer
} from './containers';


injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={themeDefault}>
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>
                <Route path="/managerpanel" component={ManagerPanel}>
                    <IndexRoute component={ManagerDashboard}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/vendors" component={Vendors}/>
                    <Route path="/quality" component={Quality}/>
                </Route>   
                <Route path="/admin" component={AdminLogin} />
                <Route path="/adminpanel" component={AdminPanel}>
                    <IndexRoute component={AdminDashboard} />
                    <Route path="/managerdashboard" component={ManagerDashboard}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/vendors" component={Vendors}/>
                    <Route path="/quality" component={Quality}/>
                    <Route path="/settings" component={Settings} />
                    <Route path="/salesperson" component={SalesPerson} />
                    <Route path="/addentry" component={AddEntry} />
                    <Route path="/addcostumer" component={AddCostumer} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)