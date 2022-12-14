import React from 'react'
import { useState } from 'react';
import Axios from "axios"

const Form = () => {
    const option = ["5AM-6AM", "6AM-7AM", "7AM-8AM", "8AM-9AM"];

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [ageReg, setAgeReg] = useState(null);
    const [mobileNumberReg, setMobileNumberReg] = useState(0);
    const [batchReg, setBatchReg] = useState(option[0]);
    const [resMssg, setResMssg] = useState("");
  
    const register = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:4000/register", {
        username: usernameReg,
        password: passwordReg,
        age: ageReg,
        mobilenumber: mobileNumberReg,
        batch: batchReg,
      }).then((res, err) => {
        if (res) {
          setResMssg(res.data);
        } else {
          console.log(err);
        }
      });
    };
  
    return (
      <div className="wrapper">
        <div className="heading">
          <p>Yoga Class Registration Form</p>
        </div>
        <form onSubmit={register}>
          <div className="formWrapper">
            <div className="name">
              <div className="label">
                <label>Name</label>
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
                required="true"
              />
            </div>
            <div className="password">
              <div className="label">
                <label>Password</label>
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                required="true"
              />
            </div>
  
            <div className="age">
              <div className="label">
                <label>Age</label>
              </div>
              <input
                type="number"
                min="18"
                max="65"
                onChange={(e) => {
                  setAgeReg(e.target.value);
                }}
                required="true"
              />
            </div>
            <div className="phonenumber">
              <div className="label">
                <label>Mobile Number</label>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                onChange={(e) => {
                  setMobileNumberReg(e.target.value);
                }}
                required="true"
              />
            </div>
  
            <div className="batch">
              <div className="label">
                <label>Select Batch</label>
              </div>
  
              <div className="dropdown">
                <select
                  id="select"
                  value={batchReg}
                  onChange={(e) => {
                    setBatchReg(e.target.value);
                  }}
                >
                  {option.map((list) => (
                    <option className="option" key={list} value={list}>
                      {list}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="response-mssg">{resMssg}</div>
            <div>
              <button className="registerBtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Form