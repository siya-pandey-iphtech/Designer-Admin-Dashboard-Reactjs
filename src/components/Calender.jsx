import { useState } from "react";
import Calendar from "react-calendar";
import "../styles/Calender.css";
import NewCalendar from "./NewCalendar";
 const Calender = () => {
  const [date, changeDate] = useState(new Date());
  const customWeekdayLabel = ({ date }) => {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return weekday.charAt(0);
  };
  function changeValue(val) {
    changeDate(val);
  }

  return (
    <div className=" z-10 shadow-lg bg-white p-6 text-sm  ">
    

    
      <Calendar 
        onChange={changeValue} 
        selectRange={true}
        defaultValue={date} 
        value={date} 
        locale="en-US" 
        formatShortWeekday={(locale,date)=>customWeekdayLabel({date})}
     

         className="   text-sm  overflow-hidden "
      />
      {/* <NewCalendar/> */}
    </div>
  );
};


export default Calender