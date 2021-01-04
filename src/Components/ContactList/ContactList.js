import { DriveEtaRounded } from "@material-ui/icons";
import React from "react"
import "./ContactList.css"
import userImage from "../../images/userImage.png"
import suitCase from "../../images/suitcase.png"
import message from "../../images/message.png"
import phone from "../../images/phone.png"

import linkedin from "../../images/linkedin.png"
import lock from "../../images/lock.png"
import plus from "../../images/plus.png"



const ContactList = (props) =>{
    var reveal = true;

    return (<div>
        <div className="mcard">
        <div className="cbody d-f">
            <img className="usImg" src={userImage} />
            <div className="mll-10">
                <div className='h-f'>Harshal</div>
                <div className="d-f f-c s-b">
                <div className="d-f ">
                <img className="iImg" src={suitCase} />
                <div className="mm-5">Developer</div>
                </div>
        {!reveal ? 
                <div className="d-f">
                <img className="iImg" src={lock} />
                <a className="mm-5">Reveal</a>
                </div>

                :
                
                <>
                <div className="d-f">
                <img className="iImg" src={message} />
                <div className="mm-5">Mail</div>
                </div>
                <div className="d-f ">
                <img className="iImg" src={phone} />
                <div className="mm-5">8898480707</div>
                </div>
               
                </>
                }

             </div>
            </div>

                {reveal ?
           <div className="addI">
                    <img className="iImg" src={plus}/>
                    <img className="iImg" src={linkedin}/>
            </div>
            : null}

            </div>
        </div>
    </div>)
}

export default ContactList;