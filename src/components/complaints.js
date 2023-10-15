
import React, { useState } from "react";
import { data } from './data';
export default function Complaints() {
    const [clicked, setClicked] = useState(false);
    const [mystyle, setMystyle] = useState({ display: "none" });
    const [selected, setselected] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);


    const toggle = (i) => {
        if (selected === i) {
            return setselected(null)
        }else{
            setselected(i)
        }
        
    }
    function prePage() {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1);
        }
    }
    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    }
    function changePage(id) {
        setCurrentPage(id);
    }

    function tochoose() {
        if (clicked === true) {
            setClicked(false);
            setMystyle({
                display: "none"
            })
        } else {
            setClicked(true);
            setMystyle({
                display: "block"
            })
        }
    }

    return (
        <div className="complaints" id="complaints">
            <h1 className="head">Complaints</h1><br />
            <div className="select">
                <button className="see-only" onClick={tochoose}>Category</button>
                <div className="status-list" style={mystyle}>
                    <li>Mess</li>
                    <li>Electrical</li>
                    <li>Hygiene</li>
                    <li>Internet/LAN/Wifi</li>
                </div>
            </div>

            <div className="complaint-box">
                <div className="accoridian">
                    {records.map((item, i) => {
                        return (
                            <div className="item">
                                <div className="title" onClick={() => { toggle(i) }}>
                                    <h2 className="title-head">{item.complaintTitle}</h2>
                                    <span className="title-status">{item.status}</span>
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                
                                <div className={selected === i ? 'content show' : 'content'}>
                                    <div>{item.complaintDescription}</div><br/>
                                    <div>Category: {item.complainCategory}</div>
                                    <div>Name: {item.name}</div>
                                    <div>Roll No.: {item.rollNo}</div>
                                    <div>Room No.: {item.roomNo}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#complaints" className="page-link" onClick={prePage}>
                            Prev
                        </a>
                    </li>
                    {numbers.map((n, i) => {
                        return (
                            <li
                                className={`page-item ${currentPage === n ? "active" : ""}`}
                                key={i}
                            >
                                <a href="#complaints" className="page-link" onClick={() => changePage(n)}>
                                    {n}
                                </a>
                            </li>
                        );
                    })}
                    <li className="page-item">
                        <a href="#complaints" className="page-link" onClick={nextPage}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}