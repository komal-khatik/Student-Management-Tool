import React, { useState, useEffect } from "react";
import axios from "axios";       
import './Home.css';
import {Link} from 'react-router-dom';

                         {/*axios is a third party API caliing tool to make http requests*/}


function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {                   {/* this is using for API calling*/}
        loadStudents();
    }, []);                             {/*Here we pass blank array to execute api calling only once when UI will load*/}

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:3003/students"); {/*It makes javascript wait untill execution done*/}  
        setStudents(result.data.reverse());
    }

    const deleteStudent = async id => {
        await axios.delete(`http://localhost:3003/students/${id}`);
        loadStudents();
    };


    return (
        <React.Fragment>

            <h3 className="heading">Students List</h3>

            <div className="Table">
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{student.studentName}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.email}</td>
                                    <td>{student.date}</td>
                                    <td>{student.phone}</td>
                                    <td>
                                        <Link style={{marginRight:'5px'}} to={`/students/${student.id}`} class="btn btn-primary "> <i class="fas fa-eye"></i></Link>
                                        <Link style={{marginRight:'5px'}} to={`/students/edit/${student.id}`} class="btn btn-primary "> <i class="fas fa-edit"></i></Link>
                                       
                                        <button type="button" class="btn btn-danger"
                                         onClick={() => deleteStudent(student.id)}
                                        ><i class="fas fa-trash"></i></button>

                                       
                                    </td>
                                </tr>
                            )
                            )
                        }

                    </tbody>

                </table>
            </div>


        </React.Fragment>
    )
}
export default Home;