import React,  { PropTypes } from 'react';
import {white, blue600} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';


const ContentBox = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    container: {
        // width: '200px',
        height: '200px',
    },
    firstDiv: {
        width: '100%',
        height: '80%'
    },
    secondDiv: {
        width: '100%',
        height: '20%',
        textAlign: 'center'
    }
  };

  return (
    <Paper style={styles.container}>
        <div style={styles.firstDiv}>
            <img src={props.imageLink} alt="image" width="100%" height="100%"/>
        </div>
        <div style={styles.secondDiv}>
            <Link to={props.link}>{props.text}</Link>
        </div>
    </Paper>
  );
};

ContentBox.propTypes = {
  imageLink: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string
};

export default ContentBox;
