import React,{useState} from "react";
import Modal from './modal';
import "./header.jpg";
export default function Header(){
    const[openModal, setOpenModal] = useState(false);
    return(
        <div className="header">
            <p>RK COMPLAINT</p>
            <button 
                className="btn"
                onClick={()=>{
                    setOpenModal(true);
                    document.body.style.overflowY="hidden";
                }}
            >File a Complaint</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    );
}