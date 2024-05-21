import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';


const NewCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const renderHeader = () => {
      return (
        <div className=" flex justify-between items-center mb-4">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="text-gray-600"
          >
            &#8249;
          </button>
          <div className="text-xl font-bold text-gray-800">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="text-gray-600"
          >
            &#8250;
          </button>
        </div>
      );
    };
  
    const renderDays = () => {
      const days = [];
      const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
  
      for (let i = 0; i < 7; i++) {
        days.push(
          <div key={i} className="text-center font-bold text-xs text-gray-600">
            {format(addDays(startDate, i), 'EEEEE')}
          </div>
        );
      }
  
      return <div className="grid grid-cols-7 mb-2">{days}</div>;
    };
  
    const renderCells = () => {
      const monthStart = startOfMonth(currentMonth);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
      const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  
      const rows = [];
      let days = [];
      let day = startDate;
      let formattedDate = '';
  
      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, 'd');
          const cloneDay = day;
  
          days.push(
            <div
              key={day}
              className={`p-4 text-center rounded-full w-10 h-10 flex items-center justify-center cursor-pointer
                ${!isSameMonth(day, monthStart) ? 'text-gray-400' : 'text-gray-800'}
                ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}
                ${isSameDay(day, selectedDate) || isSameDay(day, selectedDate) ? 'hover:bg-blue-600 text-white' : 'hover:bg-gray-200'}
              `}
              onClick={() => setSelectedDate(cloneDay)}
            >
              <span className="">{formattedDate}</span>
            </div>
          );
          day = addDays(day, 1);
        }
        rows.push(
          <div className="grid grid-cols-7 gap-1" key={day}>
            {days}
          </div>
        );
        days = [];
      }
      return <div>{rows}</div>;
    };
  
    return (
      <div className="w-80 mx-auto mt-8 bg-white p-4 rounded-lg shadow-md">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    );
  };

export default NewCalendar;
