import Grid from "@material-ui/core/Grid";

const Counter = ()=> {

const countStyle = {
    backgroundColor: "#3da5dc",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px"
};

    return (
        <div>
            <h1 style={{textAlign: "center"}}>The most flexible reservation system you'll ever find</h1>
            <p style={{textAlign: "center",color: "gray",fontSize: "1.2rem",marginTop: "-10px"}}>Choose a car / bike park , book and start saving !</p>
            <h5 style={{textAlign: "center",color: "",fontSize: "1.5rem"}}>We have around</h5>
            <div class="Counter-sec">
            <Grid container spacing={3}>
                <Grid style={{textAlign: "center"}} item lg={4} md={6} sm={6} xs={12}>
                    <h2><span style={countStyle}>8</span></h2>
                    <h5 style={{color: "#242424",fontSize: "1rem"}}>Countries</h5>
                    <p style={{lineHeight: "1.8"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium</p>
                </Grid>
                <Grid style={{textAlign: "center"}} item lg={4} md={6} sm={6} xs={12}>
                    <h2><span style={countStyle}>150</span></h2>
                    <h5 style={{color: "#242424",fontSize: "1rem"}}>Cities</h5>
                    <p style={{lineHeight: "1.8"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium</p>
                </Grid>
                <Grid style={{textAlign: "center"}} item lg={4} md={6} sm={6} xs={12}>
                    <h2><span style={countStyle}>300</span></h2>
                    <h5 style={{color: "#242424",fontSize: "1rem"}}>Parking zones</h5>
                    <p style={{lineHeight: "1.8"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus a metus sit amet arcu pretium</p>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
export default Counter;