import React, { PropTypes } from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Settings from 'material-ui/svg-icons/action/settings';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';


import {Header, LeftDrawer} from '../../components';
import adminImg from '../../images/admin.jpg';


class AdminPanel extends React.Component {

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
            { text: 'DashBoard', icon: <Assessment />, link: '/adminpanel' },
            { text: 'Settings', icon: <Settings/>, link: '/settings'}
        ]

        return (
                <div>
                    <Header styles={styles.header}
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />

                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={menus}
                        username="Rehan Adamjee"
                        header="Admin Panel"
                        avatar={adminImg}/>

                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
        );
    }
}

AdminPanel.propTypes = {
    children: PropTypes.element,
    width: PropTypes.number
};

export default withWidth()(AdminPanel);
