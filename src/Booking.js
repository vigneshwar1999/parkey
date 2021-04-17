import Slot from "./Components/Booking/Slot";
import BookingForm from "./Components/Booking/BookingForm";
import BookingTopSec from "./Components/Booking/BookingTopSec";
import {useState} from "react";
import Footer from "./Footer";

const Booking = () => {

const [activeForm,setActiveForm] = useState(false);

  const showForm = ()=> {
    setActiveForm(true);
  }

  return (
    <div>
      <BookingTopSec />
      <Slot handleBookBtn={showForm}/>
      {activeForm ? <BookingForm /> : null}
      <Footer />
    </div>
  );
};
export default Booking;
