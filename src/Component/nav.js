const nav = function(props){
    return(
        <div className="headerDiv"> 
            <span>
                <img src={leftArrow} className="img-responsive"/>

            </span>
            <label style={{marginLeft: '40%'}}>
                {props.name}
            </label>
        </div>
    )
}