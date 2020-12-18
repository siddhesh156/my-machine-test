import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Home.css"

const Home = () =>{
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
            <h3>Account Details</h3>
            <div className="d-f a-c j-s" style={{width:"25%"}}>
            <Button variant="outline-secondary">Update</Button>
            <Button variant="outline-secondary">Feedback</Button>
            <Button variant="outline-secondary">Employee List</Button>
            </div>
            </div>
           </div> 

            <div className="d-f j-c">
            <div className="dborder"></div>
            </div>

            <div className="d-f mt-20">
                <div></div>
                <div>
                    <div className="d-f f-c">
                        <h4 className="b">ABB LTD</h4>
                        <div>Affolternstrasse 44, 8050</div>
                        <div>Zürich, Switzerland</div>

                    </div>
                </div>
                <div style={{width:"200px"}}></div>
                <div><div className="uborder"></div></div>
                <div style={{marginLeft: "20px"}}>
                    <a href="#" style={{color:"blue"}}>Social.abb</a>
                    <div>+4373937747347</div>
                    </div>
            </div>
        
        </div>
        </div>
    )
}
export default Home;