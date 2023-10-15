import React,{useState} from "react";

export default function Modal({closeModal}){
    return(
        <div className="modal" id="modal">
            <div className="modalContainer">
                <div className="titleContainer">
                    <div className="title">
                        <h3>File a Complaint</h3>
                    </div>
                    <button
                        id="close"
                        onClick={()=>{
                            document.body.style.overflowY="scroll";
                            closeModal(false);
                        }}                        
                    >X</button>
                </div>
                <form>
                    <lable for="name">Name of Student: </lable>
                    <input type="text" id="name" name="name"/>
                    <lable for="roll">Roll No. of Student: </lable>
                    <input type="text" id="roll" name="roll"/>
                    <lable for="room">Room No. of Student: </lable>
                    <input type="text" id="room" name="room"/>
                    <lable for="complaint title">Complaint title: </lable>
                    <input type="text" id="comlaint title" name="complaint title"/><br/>
                    <textarea name="description">Complaint Description</textarea>
                    <lable for="complaint category">Complaint Category: </lable>
                    <input type="text" id="comlaint category" name="complaint category"/>
                    <button type="submit" id="submit"
                        onClick={()=>{
                            document.body.style.overflowY="scroll";
                            closeModal(false);
                        }}    
                    >Submit</button>
                </form>
            </div>
        </div>

    );
}