import React,{useState} from "react";
import './stud.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddStudent() {
            const navigate=useNavigate();  
            const[student,setStudent]=useState({
                studentName:"",
                lastname:"",
                email:"",
                phone:"",
                address:"",
                date:""

            });

const{studentName,lastname,email,phone,address,date}=student;

            const onInputChange = e =>{
                setStudent({...student,[e.target.name]:e.target.value});  {/*All the student's properties will copy here*/}
            }
            const onSubmit = async e => {
                e.preventDefault();        {/*Its prevent default behaviour of event*/}
                await axios.post("http://localhost:3003/students", student);
                navigate("/");  {/*It will navigate to other page*/}
              };
    return (
        <React.Fragment>

           <div className="StudForm">
            <h3 className="heading">Add Student</h3>
           <form onSubmit={e=>onSubmit(e)}> {/*When we submit the form redirection will happen but we stop this using e.preventDefault*/}

            <div className="form-group">
            <input type="text" className="form-control form-control-lg" 
             placeholder="Enter First name" 
             name="studentName" 
             value={studentName} 
             required
            onChange={e=>onInputChange(e)}
            />
            </div>
            <div className="form-group">
            <input type="text" className="form-control form-control-lg" 
             placeholder="Enter LastName" 
             name="lastname" 
             value={lastname} required 
             onChange={e=>onInputChange(e)}
            />
            </div>
            <div className="form-group">
            <input type="text" className="form-control form-control-lg" 
             placeholder="Enter email"
              name="email" 
              value={email} required
             onChange={e=>onInputChange(e)}
            />
            </div>
            <div className="form-group">
            <input type="text" className="form-control form-control-lg" 
             placeholder="Enter phone" 
             name="phone" 
             value={phone} required 
             onChange={e=>onInputChange(e)}
            />
            </div>
            <div className="form-group">
            <input type="text" className="form-control form-control-lg"
              placeholder="Address" 
              name="address"
               value={address} required 
             onChange={e=>onInputChange(e)}
            />  
            </div>

            <div className="form-group">
            <input type="date" className="form-control form-control-lg" 
             name="date" 
             value={date} required 
             onChange={e=>onInputChange(e)}
            />  
            </div >
            <button style={{width:'100%',marginTop:'20px'}} className="btn btn-primary form-control-lg btn-block">Add Student</button>
           </form>

               
           </div>
        </React.Fragment>
    )
}
export default AddStudent;