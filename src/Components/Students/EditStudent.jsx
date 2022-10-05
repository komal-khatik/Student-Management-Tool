import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditStudent = () => {
  const navigate = useNavigate();  {/*It will navigate to other page*/}
  const { id } = useParams();  {/*It is used to access URL params*/}
  const [student, setStudent] = useState({
    studentName:"",
    lastname:"",
    email:"",
    phone:"",
    address:"",
    date:""
  });

  const {studentName,lastname,email,phone,address,date } = student;
  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/students/${id}`, student);
    navigate("/");
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:3003/students/${id}`);
    console.log(result.data);
    setStudent(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="studentName"
              value={studentName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your lastname"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your address Name"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
             
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button style={{width:'100%',marginTop:'20px'}} className="btn btn-primary btn-block">Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
