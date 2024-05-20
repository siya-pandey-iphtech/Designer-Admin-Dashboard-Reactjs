import { useState } from "react";
import Calendar from "react-calendar";
import "../styles/Calender.css";
 const Calender = () => {
  const [date, changeDate] = useState(new Date());
  const formatDay = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
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
        // formatDay={formatDay}

         className=" .react-calender w-full text-sm  overflow-hidden "
      />
    </div>
  );
};


export default Calender