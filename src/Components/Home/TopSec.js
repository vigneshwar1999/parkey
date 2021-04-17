const TopSec = ()=> {

    const logoStyle = {
        display: "inline-block",
        margin: "10px 0 0 50px",
        color: "#fff",
        fontSize: "2rem"
    };

    return(
        <div className="homeTopSec">

        <div>
        <span className="logoStyle"  style={logoStyle}>PARKEY</span>
        <a href="#bookSec"><button className="TopBookBtn">Book Now</button> </a>         
        </div>
        <div className="topText">
        <h1>Online Booking System For</h1>
        <h1>Car / Bike Parks</h1>
        <a href="#bookSec"><button className="TopTextBtn">Get Slot</button></a>
        </div>
        </div>
    );
}

export default TopSec;