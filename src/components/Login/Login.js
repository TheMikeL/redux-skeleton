import React from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import {setMainName} from '../../redux/actions.js'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const styles = theme => ({
//     health: {
//         width: '80%',
//     },
// });

class Login extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(this.props.currentRecord);
    console.log("hi");
    console.log(this.props);
    
  }
  test (test){
    this.props.setMainName(test);
    console.log("test" + test);
  }
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <h1>{this.props.currentRecord}</h1>
      </div>
    );
  }
}

// Login.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

const mapStateToProps = state => {
  return {
      currentRecord: state.generalInformation.name,
  };

};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {setMainName},
    dispatch
  );
}

// export default withStyles(styles)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
