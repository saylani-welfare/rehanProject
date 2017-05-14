import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, blue600, blue400} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {typography} from 'material-ui/styles';

const NewOrders = (props) => {

  const styles = {
    paper: {
      backgroundColor: blue400,
      height: 300
    },
    div: {
      height: 230,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: blue600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Monthly Sales</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="pv" stroke="#1E88E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  data: PropTypes.array
};

export default NewOrders;
