import React, { Component } from "react";
// import { Nav, Tab, Tabs, Navbar,Sonnet, Form, FormControl, Button } from 'react-bootstrap';
import { Tab, Tabs, Image,  Button} from 'react-bootstrap';

// We are writing CSS in App.css 
import './App.css';

// Dummy Data to display 
import data from "./data";  
import French from "./French";  

// Airlines dummy Images
import singaporeFly from "./img/singapore.png";
import malaysiaFly from "./img/malaysia.png";

// Icons for App
// import car from "./img/car.png";
// import activity from "./img/activity.png";
// import hotel from "./img/hotel.png";
// import flight from "./img/flight.png";
import leftArrow from "./img/leftArrow.png"; 
import menu from "./img/menu.png";
import edit from "./img/edit.png";

// import Home from './Component/Home';
// import Search from './Component/Search';
// import Filter from './Component/Filter';

import AppButton from './Component/Button.js';
import RateButton from './Component/RateButton.js';

var filterData;
const flightData = data.flightData;
const totalTime = '14h 20m';

export default class FlightSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
          formData: {
            departure : '(PNQ) Lohegaon Airport Pune, India',
            departureCode : 'PNQ',
            destinationCode : 'BOM',
            destination : 'Airport or City',
            departDate : 'Sun, July 17',
            returnDate : 'Tue, July 17',
            economy : 'Economy',
            noOfTraveler : 2,
          }, 
          departure : '(PNQ) Lohegaon Airport Pune, India',
          currentTab : 1,
          flightResponse : flightData,
          sortType : 'asc',
          language : 'fr'

        }
        
    }

    componentDidMount(){
      if(this.state.language === 'en'){
        filterData = data.filterData;
      }
      else{
        filterData = French.filterData;
      }
    }

    actionForHome = () => {
      this.setState({
        currentTab : 1
      })
    }
    
    actionClicked = () => {
      this.setState({
        currentTab : 2
      })
    }

    actionSort = () => {
      this.setState({
        currentTab : 3
      })
    }

    actionFilter = () => {
      this.setState({
        currentTab : 4
      })
    }

    filterSelected = (event)=> {
      console.log("event",event.currentTarget.value);
      this.setState({
        sortType : event.currentTarget.value
      })
    }

    timeConvert=(time)=> {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }
    
    formDataChange = () =>{
      console.log("forData",this.state.formData);
    }

    handleChange = (event)=> {
      let value = event.currentTarget.value;
      this.setState({
        departure : value
      });
      console.log(event.currentTarget.value)
    }
    

    Sort = () => {
      console.log(this.state.sortType);
      if (this.state.sortType === "asc") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
            return  a.price - b.price
          }), sortType: "asc"
        });
      } else if (this.state.sortType === "desc") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          return  b.price - a.price
        }), sortType: "desc"
      });
      }
      else if (this.state.sortType === "aToZ") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var x = a.flightNo.toLowerCase();
          var y = b.flightNo.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else if (this.state.sortType === "zToA") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var y = a.flightNo.toLowerCase();
          var x = b.flightNo.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else if (this.state.sortType === "arrival") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var x = a.arrivalTime.toLowerCase();
          var y = b.arrivalTime.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else if (this.state.sortType === "departure") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var x = a.departureTime.toLowerCase();
          var y = b.departureTime.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else if (this.state.sortType === "duration-high") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var y = (a.arrivalTime.toLowerCase() - b.departureTime.toLowerCase());
          var x = (b.arrivalTime.toLowerCase()  - a.departureTime.toLowerCase());
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else if (this.state.sortType === "duration-low") {
        this.setState({flightResponse: flightData.sort(function(a, b) {
          var x = (a.arrivalTime.toLowerCase() - b.departureTime.toLowerCase());
          var y = (b.arrivalTime.toLowerCase()  - a.departureTime.toLowerCase());
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
          })
        });
      }
      else{
        console.log("No Sorting applied for this CASE ;)");
      }
      console.log(this.state.flightResponse);
      this.actionClicked();
    }

    render() {
      const formData = this.state.formData;
      return (
        <div className="App">
          {this.state.currentTab === 1 ? 
            <div className="homeStyle">

            <div className="headerDiv"> 
              <span>
                <img src={menu} alt={''} className="img-responsive"/>
              </span>
            </div>
          
            {/* <Image src={flight} thumbnail className="flight-icon" />
            <Image src={hotel} thumbnail className="hotel-icon" />
            <Image src={car} thumbnail className="car-icon" />
            <Image src={activity} thumbnail className="activity-icon" /> */}

          <Tabs defaultActiveKey="flight" transition={false} id="noanim-tab-example">
            <Tab eventKey="flight" title="Flight" className="tab">
              <div className="home-outer-div">
                <div className="departure-style" >
                  <span className="headingBackground">
                    Departure
                  </span>
                  <div>
                      <input type="text" className="searchText" value={this.state.departure} onChange={this.handleChange} />
                  </div>
                </div>
              </div>

              <div className="home-outer-div">
                <div className="departure-style">
                  <span className="headingBackground">
                    Destination
                  </span>
                  <div>
                    <input type="text" className="searchText" value={formData.destination} onChange={this.formDataChange}/>
                  </div>
                </div>
              </div>

              <div className="home-outer-div">
                <div className="home-date">
                  <span className="headingBackground">
                    Depart Date
                  </span>
                  <div>
                    <input type="text" className="searchTextDate" value={formData.departDate} onChange={this.formDataChange}/>
                  </div>
                </div>

                <div className="home-date2-section">
                  <span className="headingBackground">
                    Return Date
                  </span>
                  <div>
                      <input type="text" className="searchTextDate" value={formData.returnDate} onChange={this.formDataChange}/>
                  </div>
                </div>
              </div>

              <div className="home-outer-div">
                <div className="home-date">
                  <span className="headingBackground">
                    Travler
                  </span>
                  <div>
                    <input type="text" className="searchTextDate"  value={formData.noOfTraveler+' Adult'} onChange={this.formDataChange}/>
                  </div>
                </div>

                <div className="home-date2-section" >
                  <span className="headingBackground">
                    Class
                  </span>
                  <div>
                    <input type="text" className="searchTextDate"  value={formData.economy} onChange={this.formDataChange}/>
                  </div>
                </div>
                <span onClick={this.actionClicked}>
                  <AppButton name="Search Flight"/>
                </span>
              </div>
            </Tab>

            <Tab eventKey="hotel" title="Hotel" className="tab">
              
              <ul>
                <h1>Hotel Sample Data</h1>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                elit. Aenean commodo ligula eget dolor. Aenean 
                massa.</li>
                <li>Cum sociis natoque penatibus et magnis dis 
                parturient montes, nascetur ridiculus mus. Donec quam 
                felis, ultricies nec, pellentesque eu, pretium quis, 
                sem.</li>
                <li>Nulla consequat massa quis enim. Donec pede justo, 
                fringilla vel, aliquet nec, vulputate eget, arcu.</li>
                <li>In enim justo, rhoncus ut, imperdiet a, venenatis 
                vitae, justo. Nullam dictum felis eu pede mollis 
                pretium. Integer tincidunt.</li>
              </ul>

              {/* <BootstrapTable data={products} striped hover>
                <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable> */}
            </Tab>
          
            <Tab eventKey="car" title="Car" className="tab">
              <ul>
                <h1>Car Sample Data</h1>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                elit. Aenean commodo ligula eget dolor. Aenean 
                massa.</li>
                <li>Cum sociis natoque penatibus et magnis dis 
                parturient montes, nascetur ridiculus mus. Donec quam 
                felis, ultricies nec, pellentesque eu, pretium quis, 
                sem.</li>
                <li>Nulla consequat massa quis enim. Donec pede justo, 
                fringilla vel, aliquet nec, vulputate eget, arcu.</li>
                <li>In enim justo, rhoncus ut, imperdiet a, venenatis 
                vitae, justo. Nullam dictum felis eu pede mollis 
                pretium. Integer tincidunt.</li>
              </ul>
            </Tab>
          
            <Tab eventKey="activity" title="Activity" className="tab">
                <ul>
                  <h1>Activity Sample Data</h1>
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean 
                  massa.</li>
                  <li>Cum sociis natoque penatibus et magnis dis 
                  parturient montes, nascetur ridiculus mus. Donec quam 
                  felis, ultricies nec, pellentesque eu, pretium quis, 
                  sem.</li>
                  <li>Nulla consequat massa quis enim. Donec pede justo, 
                  fringilla vel, aliquet nec, vulputate eget, arcu.</li>
                  <li>In enim justo, rhoncus ut, imperdiet a, venenatis 
                  vitae, justo. Nullam dictum felis eu pede mollis 
                  pretium. Integer tincidunt.</li>
                </ul>
              </Tab>
          </Tabs>
            
          </div> 
          : 
          ''}

          {this.state.currentTab === 2 ? 
            <div className="search-style">
              
              <div className={"headerDiv"}> 
                <span onClick={this.actionForHome}>
                  <img src={leftArrow} alt={''} className="img-responsive"/>
                </span>
                <div className="filter-label">
                  <label className="hdSecodaryLbl">
                    {/* DEL to CPT */}
                    {formData.departureCode} to {formData.destinationCode}  
                  </label>
                  <div className="hdSecodaryLbl">
                  {formData.departDate} - {formData.returnDate} | {formData.noOfTraveler} Adult
                  </div>
                </div>
                <span onClick={this.actionForHome}>
                  <img src={edit} alt={''} className="img-responsive"/>
                </span>
              </div>

              <div className="filterFixed" >
                  <button className="btnFillterStyle" onClick={this.actionSort}>Sort by</button>
                  <button className="btnFillterStyle" onClick={this.actionFilter}>Filters</button>
              </div>

              {this.state.flightResponse.map((fl, key) => (
              <div key={key} className="search-card" >
                <div >
                  <span> 
                    {key % 2 === 0 ? 
                      <img src={malaysiaFly} alt={''} className="img-flight"/>
                      :
                      <img src={singaporeFly} alt={''} className="img-flight"/>
                    }

                    {fl.name} </span> | <span>{fl.flightNo}</span>
                </div>
                <br/>

                <div className="search-outer-style">
                  <div style={{width : '33%', display : 'inline-block'}}>
                    <span>{this.timeConvert(fl.departureTime)}</span> <br/><span>{fl.origin}</span>
                  </div>
                  <div className="search-data-value" style={{width : '33%', display : 'inline-block', textAlign: 'center'}}>
                    <span className="fl-time">
                      {totalTime}
                    </span>
                    <br/>
                    <span className="fl-below">
                      {1+key%2} Stop (ADD)
                    </span>
                  </div>
                  <div style={{width : '33%', display : 'inline-block',textAlign: 'right'}}>
                    {this.timeConvert(fl.arrivalTime)}<br/>{fl.destination}
                  </div>
                </div>

                <div style={{ textAlign: 'left'}}>
                  <RateButton price={fl.price} text={'Basic economy'}></RateButton>
                  <RateButton price={fl.price+20} text={'Main Cabin'}></RateButton>
                  <RateButton price={fl.price+30} text={'Ecomony'}></RateButton>
                </div>
              </div>))}
            </div>
          : ''}
          
          {this.state.currentTab === 3 ? 
            <div className='filterBody'>
              <div className={"headerDiv"}> 
                <span onClick={this.actionClicked}>
                  <img src={leftArrow} alt={''} className="img-responsive"/>
                </span>
                <div className="filter-label">
                  <label >
                    Sort By
                  </label>
                </div>
              </div>
              <div className="App-margin">
                {filterData.map((s, key) => (
                    <div key={key} >
                      <label >
                        <input type="radio" key={key} name="filterValue" onChange={this.filterSelected} className="filter-page-radio" value={s.key} />
                        {s.value}
                      </label>
                    </div>
                  ))
                }
                <span onClick={this.Sort}>
                  <AppButton name="Done"/>
                </span>
              </div>
            </div>
          : ''}

          {this.state.currentTab === 4 ? 
            <div className='filterBodyOuter'>
              <div className={"headerDiv"}> 
                <span onClick={this.actionClicked}>
                  <img src={leftArrow} alt={''} className="img-responsive"/>
                </span>
                <div className="filter-label">
                  <label >
                    Filter by
                  </label>
                </div>
              </div>

              <div className="filter-div-style">

                <div className="filter-card" >
                  <div className="price-lbl">
                    <span> 
                      Price range 
                    </span>
                  </div>
                  <div className="home-outer-div">
                    <div className="home-date-fl">
                      <span className="headingBackground">
                        Minimum Price
                      </span>
                      <div>
                        <input type="text" className="searchTextDate" value={'$  350'} onChange={this.formDataChange}/>
                      </div>
                    </div>

                    <div className="home-date2-section-fl">
                      <span className="headingBackground">
                        Maximum Price
                      </span>
                      <div>
                          <input type="text" className="searchTextDate" value={'$  550'}  onChange={this.formDataChange}/>
                      </div>
                    </div>
                  </div>    
                </div>
    
                <div className="filter-card" >
                  <div className="price-lbl">
                    <span> 
                      Booking class 
                    </span>
                  </div>
                  <div className="home-outer-div">
                    <div className="home-date-fl">
                      <span className="headingBackground">
                        Minimum Price
                      </span>
                      <div>
                        <input type="text" className="searchTextDate" value={'$  550'}  onChange={this.formDataChange}/>
                      </div>
                    </div>

                    <div className="home-date2-section-fl">
                      <span className="headingBackground">
                        Maximum Price
                      </span>
                      <div>
                          <input type="text" className="searchTextDate" value={'$  550'}  onChange={this.formDataChange}/>
                      </div>
                    </div>
                  </div>    
                </div>
             
                <div className="filter-card" >
                  <div className="price-lbl">
                  </div>
                  
                  <div className="home-outer-div">
                    <Button className="price-fl-btn-reset">
                      Reset All
                    </Button>
                    <Button className="price-fl-btn">
                      Apply
                    </Button>
                  </div>    
                </div>
              </div>
              
            </div>
          : ''}
        </div >

      )
    }

}
