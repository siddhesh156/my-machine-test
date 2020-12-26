import React from "react"

const CompanyAddress = (props) =>{
    return props.companyList.map((m)=>(
        <div className="d-f f-c mt-10" style={{width: "98%"}}>
        <div style={{fontFamily:"Arial", fontSize:"18px"}}>{m.name}</div>
        {m.link ? <a href={m.url} style={{color:"blue"}}>{m.descp}</a> :
        <div style={{fontFamily:"Arial", fontSize:"14px"}}>{m.descp}</div>
        }
        <div className="dborder"></div>
        </div>
        
    ))
    
    }

export default CompanyAddress;