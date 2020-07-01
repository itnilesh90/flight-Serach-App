import React, { Component } from "react";
import './../App.css';
import data from "./../data.json"; 
import menu from "./../menu.png"; 


const filterData = data.filterData;
const flightData = data.flightData;


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                departure : '(PNQ) Lohegaon Airport Pune, India',
                destination : 'Airport or City',
                departDate : 'Sun, July 17',
                returnDate : 'Tuesday, July 17',
                economy : 'Economy',
                noOfTraveler : 2
            }, 
        }
    }
    actionClicked(trigger){
        console.log("Action created", trigger.value);
        if(trigger === 1){
            this.setState({
              currentTab : 3
            })
        }
    }

    render() {
        const formData = this.state.formData;
      return (
        <div style={{ textAlign : 'left'}}>
        <div className="headerDiv"> 
          <span>
            <img src={menu} className="img-responsive"/>
          </span>
        </div>
        <div style={{textAlign: 'left', margin : '20px 10px', position : 'relative'}}>
          <div style={{textAlign: 'left', border : '1px solid black', paddingLeft : '25px', position : 'relative'}}>
            <span className="headingBackground">
              Departure
            </span>
            <div>
                {/* {formData.departure} */}
                <input type="text" className="searchText" value={formData.departure}/>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'left', margin : '30px 10px', position : 'relative'}}>
          <div style={{textAlign: 'left', border : '1px solid black', paddingLeft : '25px', position : 'relative'}}>
            <span className="headingBackground">
              Destination
            </span>
            <div>
            {/* Airport or City */}
            {/* {formData.destination} */}
            <input type="text" className="searchText" value={formData.destination}/>

            </div>
          </div>
        </div>

        <div style={{textAlign: 'left', margin : '30px 10px' }}>
          <div style={{textAlign: 'left', width: '40%', border : '1px solid black', paddingLeft : '25px', display : 'inline-block'}}>
            <span className="headingBackground">
              Depart Date
            </span>
            <div>
            {/* Sun, July 17 */}
            {/* {formData.departDate} */}
            <input type="text" className="searchText" value={formData.departDate}/>
            

            </div>
          </div>

          <div style={{textAlign: 'left', width: '40%', border : '1px solid black', paddingLeft : '25px', marginLeft : '8%', position : 'relative', display : 'inline-block'}}>
            <span className="headingBackground">
              Return Date
            </span>
            <div>
                {/* Tuesday, July 19 */}
                {/* {formData.returnDate} */}
                <input type="text" className="searchText" value={formData.returnDate}/>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'left', margin : '30px 10px' }}>
          <div style={{textAlign: 'left', width: '40%', border : '1px solid black', paddingLeft : '25px', display : 'inline-block'}}>
            <span className="headingBackground">
              Travler
            </span>
            <div>
            {/* 1 Adult */}
            <input type="text" className="searchText" value={formData.noOfTraveler+' Adult'}/>


            </div>
          </div>

          <div style={{textAlign: 'left', width: '40%', border : '1px solid black', paddingLeft : '25px', marginLeft : '8%', position : 'relative', display : 'inline-block'}}>
            <span className="headingBackground">
              Class
            </span>
            <div>
            <input type="text" className="searchText" value={formData.economy}/>

            </div>
          </div>
          <button className="btnFlight" onClick={this.actionClicked}>Search Flight</button>
        </div>

      </div>
      )
    }
}