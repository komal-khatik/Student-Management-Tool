import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewStudent = () => {
  const [student, setStudent] = useState({
    studentName:"",
    username:"",
    email:"",
    phone:"",
    address:"",
    date:""
  });
  const { id } = useParams(); {/*It is used to access URL params*/}
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const res = await axios.get(`http://localhost:3003/students/${id}`);
    setStudent(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group ">
        <li className="list-group-item">FirstName: {student.studentName}</li>
        <li className="list-group-item">Last name: {student.lastname}</li>
        <li className="list-group-item">Email: {student.email}</li>
        <li className="list-group-item">Phone: {student.phone}</li>
        <li className="list-group-item">Address: {student.address}</li>
        <li className="list-group-item">Date: {student.date}</li>
      </ul>
    </div>
  );
};

export default ViewStudent;
