import { useState } from "react";
import SlotDetails from "./SlotDetails";
import Grid from "@material-ui/core/Grid";

const Slot = (props) => {
  const [bgClrBoolean, setBgClrBoolean] = useState(null);

  const handleClick = (index) => {
    setBgClrBoolean(SlotDetails[index]);
  }
  const activeBgStyle = (index) => {
    if (SlotDetails[index] === bgClrBoolean) {
      return "slot activeSlotBg";
    } else {
      return "slot inactiveSlotBg";
    }
  }
  const bookdetailsSec = {
    boxShadow: "0px 2px 10px #ccc",
    padding: "20px",
    marginTop: "20px"
  };
  return (

          <div style={{padding: "5%"}}>
            <Grid container spacing={3}>
            <Grid  item lg={4} md={4} sm={12} xs={12}>
                    <div style={bookdetailsSec}>
                        <h5 style={{textAlign: "center",fontSize: "1.5rem"}}>Important Note</h5>
                        <ul style={{lineHeight: "2"}}>
                          <li>First 1 hour is free</li>
                          <li>If it exceeds more than one hour you should pay 10 Rupees for every exceeding hour.</li>
                          <li>4 Hours should be a maximum hours for parking .</li>
                        </ul>
                    </div>
                </Grid>
                <Grid  item lg={8} md={8} sm={12} xs={12}>
                <div className="slotMainSec">
        {
          SlotDetails.map((Details, index) => {
            return (
              <div className={activeBgStyle(index)}
                key={index}
                style={{ textAlign: "center" }}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <p style={{ color: "#fff", textAlign: "center" }}>{Details.slotText}</p>
                  {SlotDetails[index] === bgClrBoolean ? <a 
                  href="#formSec"
                  style={{ border: "none", 
                  backgroundColor: "#fff",
                  color: "#3da5dc", 
                  padding: "5px 15px", 
                  marginLeft: "-5px" }}
                  onClick={props.handleBookBtn}
                  >Book</a> : null}
              </div>
            );
          })}
      </div>
                </Grid>
                
            </Grid>
        </div>
  );
};
export default Slot;