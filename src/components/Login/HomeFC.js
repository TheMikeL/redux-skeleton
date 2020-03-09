import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setMainName} from '../../redux/actions.js';
import Button from "react-bootstrap/Button";

const Login = () => {
  const currentRecord = useSelector((state) => state.generalInformation);
  const dispatch = useDispatch();

  const submitName = (name) => {
    dispatch(setMainName(name));
  }

  return (
    <div>
      <h1>Hello {currentRecord.name}</h1>
      <Button variant="primary" type="submit" onClick={() => {submitName("Mike")}}>Change</Button>
  
    </div>
  );
}

export default Login;
