import React from "react";
import {setMainName} from '../../redux/actions.js'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "react-bootstrap/Button";

class Login extends React.Component {

  submitName (name){
    this.props.setMainName(name);
  }

  render() {
    const { currentRecord } = this.props;
    return (
      <div>
        <h1>Hello {currentRecord.name}</h1>
        <Button variant="primary" type="submit" onClick={() => {this.submitName("Mike")}}>Change</Button>
    
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      currentRecord: state.generalInformation,
  };

};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {setMainName},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
