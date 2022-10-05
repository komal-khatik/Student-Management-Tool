import React from "react";
import{NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div style={{display:'flex',paddingLeft:'20px'}} className="Container">
                    <NavLink className="navbar-brand" to="/"><i style={{fontSize:'50px'}} class="fas fa-users"></i></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li style={{fontSize:'25px'}} className="nav-item active">
                                <NavLink className="nav-link" to="/">Home </NavLink>  {/*Navlink is like link on click of that navigation will happen.Its generally use in navbar */}
                            </li>
                            <li style={{fontSize:'25px'}} className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li style={{fontSize:'25px',marginLeft:'1000px'}} className="nav-item active">
                                <NavLink className="nav-link" to="/Students/AddStudent/add">Add Student </NavLink>
                            </li>
                           
                            
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;