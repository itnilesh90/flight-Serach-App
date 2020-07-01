import React, { Component } from "react";
import './../App.css';
import data from "./../data.json"; 
import leftArrow from "./../leftArrow.png";

const filterData = data.filterData;
const flightData = data.flightData;


export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains data
        }

    }
    render() {
      return (
        <div style={{textAlign: 'left'}}>
            <div className="headerDiv"> 
                <span>
                  <img src={leftArrow} className="img-responsive"/>

                </span>
                <label style={{marginLeft: '37%'}}>
                  DEL to CPT
                </label>
            </div>
            <div className="filterFixed" >
                <button className="btnFillterStyle" >Sort</button>
                <button className="btnFillterStyle" >Filter</button>
            </div>
            {flightData.map((fl, key) => (
            <div key={key} style={{ textAlign: 'left', background: '#fff;',padding: '5px', background: '#fff', marginTop : '10px'}}>
              <div >
                {fl.name} | {fl.flightNo}
              </div>
              <br/>

              <div style={{display : 'inline-block', textAlign: 'left',  width : '100%'}}>
                <div style={{width : '33%', display : 'inline-block'}}>
                  {fl.arrivalTime}AM<br/>{fl.origin}
                </div>
                <div style={{width : '33%', display : 'inline-block', textAlign: 'center'}}>
                  <span style={{borderBottom : '1px black solid', width : '50%'}}>
                     {fl.totalTime}
                  </span>
                  <br/>
                  1 Stop (ADD)
                </div>
                <div style={{width : '33%', display : 'inline-block',textAlign: 'right'}}>
                  {fl.departureTime}PM<br/>{fl.destination}
                </div>
              </div>

              <div>
                <button className="btnRateStyle" style={{ textAlign: 'left'}}>${fl.price} <br/>Basic economy</button>
                <button className="btnRateStyle" style={{ textAlign: 'center'}}>${fl.price+10} <br/>Main Cabin</button>
                <button className="btnRateStyle" style={{ textAlign: 'right'}}>${fl.price+20} <br/>Ecomony</button>
              </div>
            </div>))}
        </div>
      )
    }
}