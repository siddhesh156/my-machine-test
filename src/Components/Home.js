import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Home.css"

const Home = () =>{
    const array = [{name:"Company Name",descp:"ABB Ltd"},
    {name:"Address",descp:"Affolternstrasse 44, 8050 Zürich, Switzerland"}, 
    {name:"Phone",descp:"+41 433177111"},
    {name:"Website",descp:"Social.abb", link:true,url:"Social.abb"},
    {name:"Ownership",descp:"Corporation"},
    {name:"LinkedinUrl",descp:"https://www.linkedin.com/company/abb", link:true,url:"https://www.linkedin.com/company/abb"},
    {name:"Parent Company",descp:"ABB Ltd"}
]

const array2 = [{name:"Power Industry","descp":"Electrical Equipment, Appliance and Component Manufacturing"},
    {name:"Revenue",descp:"$1B+"}, 
    {name:"Employ Size",descp:"10,001+"},
    {name:"SBC",descp:"36 - Electronic, Electrical Equipment & components Except Computer Equipment"},
    {name:"NAICS",descp:"35 - Electrical Equipment, Appliance and Component Manufacturing"},
    {name:"All Industry",descp:"Manufacture Electrical Equipment, Appliance and Component Manufacturing"},
    {name:"All SBC",descp:"36 - Electrical Equipment, Appliance and Component Manufacturing"}
]
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
               <div className="d-f f-c j-c h"><img
                    className=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/640px-ABB_logo.svg.png" 
                    height={20}
                    width={40}
                    alt=""
                    />
                </div>
                <div>
                    <div className="d-f f-c ml-20">
                    <div style={{fontFamily:"System", fontSize:"24px", fontFamily:"bold"}}>ABB LTD</div>
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

      
            <div className="d-f mt-20 w j-s">
            <div className="w">{array.map((m)=>(
                <div className="d-f f-c mt-10" style={{width: "98%"}}>
                <div style={{fontFamily:"Arial", fontSize:"18px"}}>{m.name}</div>
                {m.link ? <a href={m.url} style={{color:"blue"}}>{m.descp}</a> :
                <div style={{fontFamily:"Arial", fontSize:"14px"}}>{m.descp}</div>
                }
                <div className="dborder"></div>
                </div>
            ))}</div>

            <div className="w">{array2.map((m,i)=>(
                <div className="d-f f-c mt-10" style={{width: "98%"}}>
                <div style={{fontFamily:"Arial", fontSize:"18px"}}>{m.name}</div>
                <div style={{fontFamily:"Arial", fontSize:"14px"}}>{m.descp}</div>
                <div className="dborder"></div>
                </div>
            ))}
             </div>

            </div>
       
       
        </div>
        </div>
    )
}
export default Home;