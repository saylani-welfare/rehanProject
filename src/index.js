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
    Settings,
    Customers,
    Vendors,
    Quality
} from './containers';


injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={themeDefault}>
            <Router history={browserHistory}>
                <Route path="/" component={Login} />
                <Route path="/admin" component={AdminLogin} />
                <Route path="/adminpanel" component={AdminPanel}>
                    <IndexRoute component={AdminDashboard} />
                    {/*<Route path="/managerdashboard" component={ManagerDahsboard}/>*/}
                    {/*<Route path="/customers" component={Customers}/>
                    <Route path="/vendors" component={Vendors}/>
                    <Route path="/quality" component={Quality}/>*/}
                    <Route path="/settings" component={Settings} />
                </Route>
                {/*<Route path="/" component={ManagerLogin}/>
                <Route path="/managerpanel" component={ManagerPanel}>
                    <IndexRoute component={ManagerDahsboard}/>
                    <Route path="/managercustomers" component={ManagerCustomers}/>
                    <Route path="/managervendors" component={ManagerVendors}/>
                    <Route path="/managerquality" component={ManagerQuality}/>
                    <Route path="/managersettings" component={ManagerSettings}/>
                </Route>    */}
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)