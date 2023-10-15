import React,{useState} from "react";
import './logo.png';
import { LuMenuSquare } from "react-icons/lu";
export default function Navbar() {
    //const[clicked,setClicked]=useState(false);
    const[mystyle,setMystyle] = useState({display:"none"});
    function toggleClick() {
        console.log("clicked");
        //if(clicked===true){
        //    setClicked(false);
        //    setMystyle({
        //        display: "none"
        //    })
        //}else{
        //    setClicked(true);
        //    setMystyle({
        //        display: "block"
        //    })
        //}
    }
    return (
        <div className="nav">
            <div className="nav-bar">
                <img src={require("./logo.png")} alt="logo" id="logo"></img>
                <ul className="right-bar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#complaints">Complaints</a></li>
                    <li><a href="#footer">Contacts</a></li>
                </ul>
            </div>
            <div className="new-bar">
                <img src={require("./logo.png")} alt="logo" id="logo"></img>
                <div className="menu-box">
                    <LuMenuSquare className="menu-bar" onClick={toggleClick} />
                    <div className="togglemenu" style={mystyle}>
                        <li href="#about">About</li>
                        <li href="#complaints">Complaints</li>
                        <li href="#footer">Contacts</li>
                    </div>
                </div>
                
            </div>
        </div>

    );
}