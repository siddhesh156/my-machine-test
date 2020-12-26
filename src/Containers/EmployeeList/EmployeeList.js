import React, { useState } from 'react';
import { Button,Form,FormControl } from 'react-bootstrap';
import "./EmployeeList.css";
import ContactList from '../../Components/ContactList/ContactList';

const EmployeeList = () =>{
   

    return(
        <div className="d-f j-c">
        <div className="home">
            <div className="Header">
            <h1>IG Account Details</h1>
            </div>
            <div className="d-f j-c">
            <div className="oborder"></div>
            </div> 

            <div className="d-f subHeader">
           
            <div className="d-f a-c j-s w">
            <h3>Contacts(74)</h3>
            <div className="d-f a-c j-s" style={{width:"22%"}}>
            <Form inline>
            <FormControl type="text" placeholder="Search by name Job Title" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Button variant="outline-secondary">Feedback</Button>
            </div>
            </div>
           </div> 

            <div className="d-f j-c">
            <div className="dborder"></div>
            </div>

        <div className="d-f w mt-20">
            <ContactList />
        </div>
      
           
        </div>
        </div>
    )
}
export default EmployeeList;