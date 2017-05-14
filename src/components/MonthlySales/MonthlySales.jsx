import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, blue400, blue600} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';

const MonthlySales = (props) => {

  const styles = {
    paper: {
      backgroundColor: blue600,
      height: 300
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 230
    },
    header: {
      color: white,
      backgroundColor: blue600,
      padding: 10
    },
    title: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 20
  },
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.title, ...styles.header}}>Monthly Sales</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={blue400}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlySales.propTypes = {
  data: PropTypes.array
};

export default MonthlySales;
