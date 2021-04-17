import { useState } from "react";

const BookingForm = ()=> {

        const [username,setUsername] = useState("");
        const [time,setTime] = useState();
        const [hours,setHours] = useState();
        const [vehicle,setVehicle] = useState("");
        const [mobnum,setMobnum] = useState();
        const [numberplate,setNumberplate] = useState("");

        const [activeSuccess,setActiveSuccess] = useState(false);
        const [bookingAmount,setBookingAmount] = useState(0);

const formStyle = {
    boxShadow: "0px 2px 10px #ccc",
    padding: "2% 5%",    
    margin: "5% auto"
};

const bookButtonStyle = {
    backgroundColor: "#3da5dc",
    color: "#fff",   
    border: "none",
    padding: "10px 30px",
    fontWeight: "bold"
};



var bookingArray = [];

const handleSubmit = (e) => {
    e.preventDefault();

    const formDetails = {username,time,hours,vehicle,mobnum,numberplate};
    bookingArray.push(formDetails);
    if(bookingArray != null) {
        setActiveSuccess(true);
    }
    else{
        setActiveSuccess(false);
    }

}
let activeForm = null ;

if(activeSuccess === false) {
    return (
<div className="form"id="formSec" style={formStyle}>
        <h2 style={{textAlign:"center"}}>Fill to get a slot</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" minLength="2" maxLength="20" value={username} required 
                    onChange={(e)=> {
                        setUsername(e.target.value);
                    }}
                /> 
                <label>Select Start Time</label>
                <input type="time" required value={time}
                    onChange={(e)=> {
                        setTime(e.target.value);
                    }}
                />
                <label>How Many Hours ?</label>
                <select value={hours} onChange={(e)=> {
                        setHours(e.target.value);
                        if(e.target.value >=2) {
                        const hrvalue = e.target.value;
                        const calc =  (hrvalue * 10) - 10;
                        setBookingAmount (calc);
                    }
                    }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <span style={{fontSize: "14px",color: "gray",display: "block"}}>(If it exceeds more than one hour you should pay 10 Rupees for every exceeding hour.)</span><br />
                <label>Type Of Vehicle</label>
                <select value={vehicle} onChange={(e)=> {
                        setVehicle(e.target.value);
                    }}>
                    <option value="">---Select Your Vehicle---</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                </select>
                <label>Mobile Number</label>
                <input type="number" placeholder="Enter Mobile Number" minLength="10" maxLength="10" required value={mobnum} onChange={(e)=> {
                        setMobnum(e.target.value);
                    }}/>
                <label>Your Vehicle Number Plate</label>
                <input type="text" placeholder="Enter Number Plate" minLength="6" maxLength="10" required value={numberplate} onChange={(e)=> {
                        setNumberplate(e.target.value);
                    }} />
                

                <div style={{textAlign:"center",marginTop: "20px"}}>
                <button style={bookButtonStyle} type="submit">BOOK</button>
                </div>
                

            </form>
            
        </div>
    );
}
    return(

        <div>
        
            {activeForm}


        {activeSuccess ? <div style={{textAlign: "center",margin:"5% 0  "}}>
                    <h1 style={{color: "green"}}>✔</h1>
                    <h2 style={{color: "green"}}>Successfully Booked a slot for you !</h2>
                    <p style={{fontSize: "1.2rem"}}>Your booking fee is {bookingAmount}</p>
                    <button style={{backgroundColor: "red",color: "#fff",border:"none" ,padding: "10px 30px"}}
                    onClick = {()=> {
                      setActiveSuccess(false);
                      alert("Booking was successfully cancelled");
                      
                        
                    }}
                    >cancel Booking</button>
                </div> : null }
                
        </div>    
    );
}

export default BookingForm;