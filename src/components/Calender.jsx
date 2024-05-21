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
    <div className=" mr-5 z-10 h-70 shadow-lg bg-white w-96 m-1 mt-4 flex flex-col p-5 text-sm ">
    

    
      <Calendar 
        onChange={changeValue} 
        selectRange={true}
        defaultValue={date} 
        value={date} 
        locale="en-US" 
        formatShortWeekday={(locale,date)=>customWeekdayLabel({date})}
     

         className=" .react-calender w-full text-sm  overflow-hidden "
      />
      {/* <NewCalendar/> */}
    </div>
  );
};


export default Calender