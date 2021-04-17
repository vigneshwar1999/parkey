import Grid from "@material-ui/core/Grid";
import ParkingData from "./ParkingzoneData";
import { Link } from "react-router-dom";

const Parkingzone = (props) => {
  const zoneCard = {
    padding: "20px",
    boxShadow: "0px 2px 10px #eee",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px gray"
  };
  const cardBtn = {
    padding: "10px 30px",
    backgroundColor: "#3da5dc",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    fontWeight: "bold"
  };

  return (
    <div id="bookSec" className="parkingZoneSec">
    <h1 style={{color: "#3da5dc",textAlign:"center",marginBottom: "50px"}}>Parking zones available near you</h1>
      <Grid container spacing={3}>
        {ParkingData.map((Pdata) => {
          return (
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <div className="zoneCard" style={zoneCard}>
                <h2>{Pdata.ZoneTitle}</h2>
                <h4>{Pdata.ZoneStatus}</h4>
                <p>{Pdata.ZoneDescription}</p>
                <Link to="/Booking">
                  <button style={cardBtn}>Book</button>
                </Link>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Parkingzone;
