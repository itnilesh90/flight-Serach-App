import React, { Component } from "react";

export default function RateButton(props) {
    // return <button className="btnFlight App-button-theme" >{props.name}</button>
    return <button className="btnRateStyle" >
                <span>INR {props.price} </span><br/><div className="btn-div">{props.text}</div>
            </button>
}