import React, { PropTypes } from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Settings from 'material-ui/svg-icons/action/settings';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';


import {Header, LeftDrawer} from '../../components';
import managerImg from '../../images/manager.jpg';

class ManagerPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({ navDrawerOpen: nextProps.width === LARGE });
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let { navDrawerOpen } = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };

        const menus = [
            { text: 'DashBoard', icon: <Assessment />, link: '/managerpanel'},
            { text: 'Customers', icon: <Assessment />, link: '/customers' },
            { text: 'Vendors', icon: <Assessment />, link: '/vendors' },
            { text: 'Quality', icon: <Assessment />, link: '/quality' }
        ]

        return (
                <div>
                    <Header styles={styles.header}
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />

                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={menus}
                        username="Mnager" 
                        header="Manager Panel"
                        avatar={managerImg}
                        />

                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
        );
    }
}

ManagerPanel.propTypes = {
    children: PropTypes.element,
    width: PropTypes.number
};

export default withWidth()(ManagerPanel);
