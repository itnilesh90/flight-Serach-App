import React, { Component } from "react";
import './../App.css';
import data from "./../data.json"; 
import leftArrow from "./../leftArrow.png";


const filterData = data.filterData;
const flightData = data.flightData;


export default class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
        }

    }
    render() {
      return (
           <div style={{ textAlign : 'left'}}>
              <div className="headerDiv"> 
                <span>
                  <img src={leftArrow} className="img-responsive"/>

                </span>
                <label style={{marginLeft: '40%'}}>
                  Sort By
                </label>
              </div>
                  {filterData.map((s, key) => (
                      <div key={key} >
                        <label >
                          <input type="radio" style={{margin : '20px', textAlign : 'left'}} value={s} />
                          {s}
                        </label>
                      </div>
                    ))
                  }
                  <button className="btnStyle" >Done</button>

                
            </div>
      )
    }
}